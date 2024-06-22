import { posts } from "../../../data/posts";
import { Link, useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import ending from "../../../assets/post_ending.png";
import NotFound from "../NotFound";

export default function PostPage() {
  const params = useParams();
  const id = Number(params.id);
  const post = posts.find((post) => post.id === id);

  const [rating, setRating] = useState(post ? post.rating : 0);
  if (posts[id] === undefined) {
    return <NotFound></NotFound>;
  } else
    return (
      <main className="container pt-[15px] px-[10px] pb-[25px]">
        <h3 className="font-[500]">
          <Link to="/posts" className="hover:text-red" href="#">
            Публикации
          </Link>
          /<span className="text-monochrome_02">{post.title}</span>
          <span className="text-monochrome_03 text-[14px]">
            {" "}
            ({post.views} просмотров)
          </span>
        </h3>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <div className="flex flex-col items-center gap-[25px]">
          <h2 className="text-center">
            {post.title} -{" "}
            <span className="text-monochrome_03">{post.author.penName}</span>
          </h2>
          <p className="text-center mx-auto mt-[20px] whitespace-pre-line">
            {post.text}
          </p>{" "}
          <img className="w-[250px] mt-[15px]" src={ending} alt="" />
        </div>
        <div className="mb-[50px]">
          {" "}
          {post.description && <p>{post.description}</p>}
        </div>
      </main>
    );
}
