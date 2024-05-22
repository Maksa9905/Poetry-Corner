import useGridInitialization from "../../CustomHooks";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

export default function RecentPosts({ posts }) {
  const RecentPostsGrid = useGridInitialization({
    default: {
      columns: 3,
      rows: 2,
    },
    screen640: {
      columns: 1,
      rows: 2,
    },
    screen768: {
      columns: 2,
      rows: 1,
    },
    screen1024: {
      columns: 2,
      rows: 2,
    },
    screen1440: {
      columns: 3,
      rows: 2,
    },
    screen1920: {
      columns: 3,
      rows: 2,
    },
  });

  return (
    <section className="py-[25px]">
      <h3 className="font-[500]">
        <a className="hover:text-red" href="#">
          Недавние публикации
        </a>
      </h3>
      <div
        style={{
          gridTemplateColumns: `repeat(${RecentPostsGrid.columns}, 1fr)`,
          gridTemplateRows: `repeat(${RecentPostsGrid.rows}, auto)`,
        }}
        className="grid grid-flow-col gap-x-[10px] gap-y-[20px] py-[10px]"
      >
        {posts.map((post, index) => {
          if (index < RecentPostsGrid.columns * RecentPostsGrid.rows)
            return (
              <div key={post.id}>
                <h4 className="text-[20px] font-[500]">
                  <Link to={`/posts/${post.id}`}>
                    <a
                      className="hover:text-red"
                      href="#"
                    >{`"${post.title}"`}</a>{" "}
                    -{" "}
                    <a href="#">
                      <span className="hover:text-red text-monochrome_03">
                        {post.author}
                      </span>
                    </a>
                  </Link>
                </h4>
                <Rating
                  name="read-only"
                  size="small"
                  value={post.rating}
                  readOnly
                />
                <p className="line-clamp-3">
                  {`"`}
                  {post.description ?? post.text}
                  {`"`}
                </p>
                <p className="text-neutral_02">
                  {(() => {
                    const now = new Date();
                    const year =
                      post.date.getFullYear() === now.getFullYear()
                        ? ""
                        : `.${post.date.getFullYear()}`;
                    const date = post.date.toLocaleString().slice(0, 5);
                    const fullDate = date + year;

                    const hours =
                      post.date.getHours().toString().length === 1
                        ? "0" + post.date.getHours()
                        : post.date.getHours();
                    const minutes =
                      post.date.getMinutes().toString().length === 1
                        ? "0" + post.date.getMinutes()
                        : post.date.getMinutes();
                    const fullTime = `${hours}:${minutes}`;

                    if (fullDate === now.toLocaleString().slice(0, 5)) {
                      return `Сегодня в ${fullTime}`;
                    } else {
                      return `${fullDate} в ${fullTime}`;
                    }
                  })()}
                </p>
              </div>
            );
        })}
      </div>
      <a className="hover:text-red" href="#">
        Другие публикации...
      </a>
    </section>
  );
}
