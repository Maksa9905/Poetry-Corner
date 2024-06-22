import { useGridInitialization } from "../../Hooks/useGridInitialization";
import { Link } from "react-router-dom";
import { recentNewsGrid } from "./RecentNews.config";
import RecentNewsItem from "./RecentNewsItem";

export default function News({ news }) {
  const newsGrid = useGridInitialization(recentNewsGrid);

  return (
    <section className="py-[25px]">
      <h3 className="font-[500]">
        <Link to="/news" className="hover:text-red">
          Новости
        </Link>
      </h3>

      <div
        style={{
          gridTemplateColumns: `repeat(${newsGrid.columns}, 1fr)`,
          gridTemplateRows: `repeat(${newsGrid.rows}, auto)`,
        }}
        className={`grid grid-flow-col gap-x-[10px] gap-y-[20px] py-[10px]`}
      >
        {[...news].map((post, index) => {
          if (index < newsGrid.columns * newsGrid.rows) {
            return <RecentNewsItem key={post.id} post={post}></RecentNewsItem>;
          }
        })}
      </div>
      <Link className="hover:text-red" to="/news">
        Другие новости...
      </Link>
    </section>
  );
}
