import SupposedPosts from "./SupposedPosts";

export default function PostNotFound({ posts, searchQuery }) {
  return (
    <div>
      <p>
        По вашему запросу{" "}
        <span className="font-[600]">{`"${searchQuery}"`}</span> ничего не
        найдено
      </p>
      <h4 className="mt-[10px]">Возможно вы искали:</h4>
      <SupposedPosts posts={posts}></SupposedPosts>
    </div>
  );
}
