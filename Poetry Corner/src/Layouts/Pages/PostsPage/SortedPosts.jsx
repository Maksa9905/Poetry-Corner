import { compareFunctions } from "../../../Helpers/compareFunctions";
import PostCard from "../../../Components/PostCard/PostCard";
import PostNotFound from "./PostNotFound";
import { useContext } from "react";
import { SearchQueryContext } from "../../../Context/searchQueryContext";

export default function SortedPosts({ posts, sortType }) {
  const [_searchQuery, setSearchQuery] = useContext(SearchQueryContext);
  const searchQuery = _searchQuery ?? "";

  const sortedPosts = [...posts].sort(
    sortType !== null ? compareFunctions[sortType] : compareFunctions["popular"]
  );

  const filteredPosts = sortedPosts.filter((post) => {
    return (
      post.title.toUpperCase().includes(searchQuery.toUpperCase()) ||
      post.author.penName.toUpperCase().includes(searchQuery.toUpperCase()) ||
      post.author.nickname
        .toUpperCase()
        .includes(searchQuery.toLocaleUpperCase())
    );
  });

  if (filteredPosts.find((post) => post !== undefined)) {
    return (
      <div className="pt-[15px]">
        {searchQuery && (
          <h4>
            Результаты по запросу{" "}
            <span className="font-[600]">{`"${searchQuery}"`}</span>:
          </h4>
        )}
        {filteredPosts.map((post) => {
          return (
            <PostCard
              className="py-[10px]"
              key={post.id}
              post={post}
            ></PostCard>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="py-[25px]">
        {<PostNotFound searchQuery={searchQuery} posts={posts}></PostNotFound>}
      </div>
    );
  }
}
