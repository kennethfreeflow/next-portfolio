import CoverImage from "../CoverImage";
import PostTitle from "../PostTitle";

export default function PostHeader({ title, coverImage, date }: any) {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      {/* <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} height={620} width={1240} />
      </div> */}
    </>
  );
}
