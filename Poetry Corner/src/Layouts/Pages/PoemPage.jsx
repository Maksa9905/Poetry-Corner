import { posts } from "../../data/posts";
import { Link, useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { useState } from "react";

export default function PoemPage() {
  const { id } = useParams();
  const [rating, setRating] = useState(posts[id].rating);

  return (
    <main className="container py-[15px] px-[10px]">
      <h3 className="font-[500]">
        <Link to="/">
          <a className="hover:text-red" href="#">
            Публикации
          </a>
          /
        </Link>
        <span className="text-monochrome_02">{posts[id].title}</span>
        <span className="text-monochrome_03 text-[14px]"> (0 просмотров)</span>
      </h3>
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
      <div>
        <h2 className="text-center mt-[25px]">
          {posts[id].title} -{" "}
          <span className="text-monochrome_03">{posts[id].author}</span>
        </h2>
        <p className="text-center mx-auto mt-[20px] whitespace-pre-line">
          {posts[id].text}
        </p>
      </div>
      {posts[id].description && <p>{posts[id].description}</p>}
    </main>
  );
}
