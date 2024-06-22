import { Link } from "react-router-dom";

export default function RecentNewsItem({ post }) {
  return (
    <div key={post.id}>
      <h4 className="line-clamp-2 leading-[28px] hover:text-red">
        <Link to="/news" state={{ searchNewId: post.id }}>
          {post.title}
        </Link>
      </h4>
      <p className="line-clamp-2 mt-[7px]">{post.paragraph}</p>
    </div>
  );
}
