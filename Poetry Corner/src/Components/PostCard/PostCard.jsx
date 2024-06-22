import { Link } from "react-router-dom";
import { Rating } from "@mui/material";
import { timeManager } from "../../Helpers/timeManger";

export default function PostCard({ post, className }) {
  return (
    <div className={className ?? ""}>
      <h4 className="text-[20px] font-[500]">
        <Link className="hover:text-red" to={`/posts/${post.id}`}>
          {`"${post.title}"`}{" "}
        </Link>{" "}
        -{" "}
        <Link className="hover:text-red text-monochrome_03">
          {" "}
          {post.author.penName}
        </Link>
      </h4>
      <Rating name="read-only" size="small" value={post.rating} readOnly />
      <p className="line-clamp-3">
        {`"`}
        {post.description ?? post.text}
        {`"`}
      </p>
      <p className="text-neutral_02">{timeManager(post.date)}</p>
    </div>
  );
}
