import PostCard from "../../../Components/PostCard/PostCard";
import { compareFunctions } from "../../../Helpers/compareFunctions";
import { SearchQueryContext } from "../../../Context/searchQueryContext";
import { useContext } from "react";

export default function SupposedPosts({ posts }) {
  const [searchQuery, setSearchQuery] = useContext(SearchQueryContext);
  const sortedPosts = [...posts].sort(compareFunctions["popular"]);
  const filteredPosts = sortedPosts.filter((post) =>
    post.text.toUpperCase().includes(searchQuery.toUpperCase())
  );

  return (
    <div>
      {filteredPosts.map((post) => {
        return (
          <PostCard className="py-[10px]" key={post.id} post={post}></PostCard>
        );
      })}
    </div>
  );
}
