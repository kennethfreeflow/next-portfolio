import { useRouter } from "next/router";
import markdownToHtml from "../../lib/markdownToHtml";
import { getAllPosts, getPostBySlug } from "../../lib/nextjs";
import PostHeader from "../../components/PostHeader";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { classNames } from "../../utils/tailwind";
import PostBody from "../../components/PostBody";
import PostTitle from "../../components/PostTitle";

const Post = ({
  post,
  morePosts,
  preview,
}: {
  post: any;
  morePosts: any;
  preview: any;
}) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <div>Error</div>;
  }

  const { title, coverImage, date, content } = post;

  return (
    <>
      <Navbar />
      <main className={classNames("min-h-screen")}>
        {router.isFallback ? (
          <PostTitle>Loading...</PostTitle>
        ) : (
          <article className="mb-32">
            <PostHeader title={title} coverImage={coverImage} date={date} />
            <PostBody content={content} />
          </article>
        )}
      </main>
      <Footer />
    </>
  );
};

export async function getStaticProps({ params }: { params: any }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]) as any;
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post: any) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Post;
