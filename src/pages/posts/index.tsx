import PostPreview from "../../components/PostPreview";
import Layout from "../../layouts/Layout";
import { getAllPosts } from "../../lib/nextjs";

export default function Posts({ allPosts }: { allPosts: any }) {
  return (
    <Layout>
      <section>
        <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
          More Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
          {allPosts.map((post: any) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
}
