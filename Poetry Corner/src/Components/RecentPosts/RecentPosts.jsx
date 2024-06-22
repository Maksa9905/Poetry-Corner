import { useGridInitialization } from "../../Hooks/useGridInitialization";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SortedRecentPosts from "./SortedRecentPosts";
import { useContext } from "react";
import { SearchQueryContext } from "../../Context/searchQueryContext";

export default function RecentPosts({
  posts,
  recentPostsGrid,
  direction,
  author,
}) {
  const postsGrid = useGridInitialization(recentPostsGrid);
  const navigate = useNavigate();
  const authorNickname = author?.nickname;
  const [searchQuery, setSearchQuery] = useContext(SearchQueryContext);

  return (
    <section className="py-[25px]">
      <h3 className="font-[500]">
        <button
          className="hover:text-red"
          onClick={() => {
            setSearchQuery(authorNickname);
            navigate("/posts");
          }}
        >
          Недавние публикации
        </button>
      </h3>
      <div
        style={{
          gridTemplateColumns: `repeat(${postsGrid.columns}, 1fr)`,
          gridTemplateRows: `repeat(${postsGrid.rows}, auto)`,
        }}
        className={`grid ${
          direction === "vertical" ? "grid-flow-col" : "grid-flow-row"
        } gap-x-[10px] gap-y-[20px] py-[10px]`}
      >
        <SortedRecentPosts posts={posts} postsGrid={postsGrid} />
      </div>
      <Link className="hover:text-red" to="/posts">
        Другие публикации...
      </Link>
    </section>
  );
}
