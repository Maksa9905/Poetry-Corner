import { Rating } from "@mui/material";
import { compareFunctions } from "../../Helpers/compareFunctions";
import { Link } from "react-router-dom";

export default function AuthorCard({ author }) {
  return (
    <div
      key={author.id}
      className="h-[113px] grid sm:grid-cols-[100px_auto_120px] grid-cols-[60px_auto_120px] gap-x-[15px] grid-rows-[35px_auto] px-[10px] py-[15px]"
    >
      <div className="row-start-1 row-end-3 aspect-square sm:w-[100px] w-[60px]">
        <Link to={`/authors/${author.id}`}>
          <img src={author.iconUrl} alt="" />
        </Link>
      </div>
      <h4 className="">
        <Link to={`/authors/${author.id}`} className="hover:text-red">
          {author.nickname}{" "}
        </Link>
        <span className="text-monochrome_03 sm:inline-block hidden">
          {`- `} {author.penName}
        </span>
      </h4>{" "}
      <Rating
        name="read-only"
        size="small"
        value={author.rating}
        readOnly
      ></Rating>
      <div className="col-start-2 col-end-4">
        <span className="sm:inline-block hidden">Известные публикации:</span>{" "}
        {[...author.posts.sort(compareFunctions["popular"])].map(
          (post, index) => {
            if (index < 3)
              return (
                <Link
                  to={`/posts/${post.id}`}
                  className="hover:text-red"
                  key={post.id}
                >{`«${post.title}» `}</Link>
              );
          }
        )}
      </div>
    </div>
  );
}
