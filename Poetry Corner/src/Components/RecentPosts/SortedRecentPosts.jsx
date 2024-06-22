import { compareFunctions } from "../../Helpers/compareFunctions";
import PostCard from "../PostCard/PostCard";

export default function SortedRecentPosts({ postsGrid, posts }) {
  const sortedPosts = posts.sort(compareFunctions["new"]);

  return (
    <>
      {sortedPosts.map((post, index) => {
        if (index < postsGrid.columns * postsGrid.rows) {
          return <PostCard post={post} key={post.id}></PostCard>;
        }
      })}
    </>
  );
}
