import Link from "next/link";
import { FEATURED_IMAGE, TITLE, SLUG } from "../../constants/frontMatter";

export default function AlgoliaPostHit({ hit }: { hit: any }) {
  return (
    <Link href={`/posts/${hit[SLUG]}`}>
      <article>
        <img src={hit[FEATURED_IMAGE]} alt={hit[TITLE]} />
        <h1>{hit[TITLE]}</h1>
      </article>
    </Link>
  );
}
