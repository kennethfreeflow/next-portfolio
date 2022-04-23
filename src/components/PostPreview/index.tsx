import Link from "next/link";
import CoverImage from "../CoverImage";

export default function PostPreview({
  title,
  featuredImage,
  description,
  slug,
}: {
  title: string;
  featuredImage: string;
  description: string;
  slug: string;
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={featuredImage}
          height={278}
          width={556}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <p className="text-lg leading-relaxed mb-4">{description}</p>
    </div>
  );
}
