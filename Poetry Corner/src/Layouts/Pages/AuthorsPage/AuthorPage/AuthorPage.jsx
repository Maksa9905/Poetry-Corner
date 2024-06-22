import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { Rating } from "@mui/material";
import { authors } from "../../../../data/posts";
import RecentPosts from "../../../../Components/RecentPosts/RecentPosts";
import { RecentPostsGrid } from "./AuthorPage.config";
import GeneralInfo from "./GeneralInfo";
import Quote from "./Quote";

export default function AuthorPage() {
  const params = useParams();
  const id = Number(params.id);
  const author = authors.find((author) => author.id === id);
  const [rating, setRating] = useState(author ? author.rating : 0);

  return (
    <main className="container pt-[15px] px-[10px] pb-[25px]">
      <h3 className="font-[500]">
        <Link to="/authors" className="hover:text-red">
          Авторы
        </Link>
        /<span className="text-monochrome_02">{author.nickname}</span>
        <span className="text-monochrome_03 text-[20px]">
          {" "}
          ({author.penName})
        </span>
      </h3>
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
      <div className="grid md:gap-x-[50px] grid-cols-1 md:grid-cols-[auto_1fr] py-[15px]">
        <div className="lg:w-[400px] md:w-[200px] max-w-[400px] aspect-[1] my-[auto] overflow-hidden flex justify-center items-center">
          <img src={author.iconUrl} alt="" />
        </div>
        <div className="grid row-start-2 md:row-start-1 md:col-start-2 grid-cols-1 sm:grid-cols-[auto_auto] gap-x-[30px]">
          <h3 className="text-[60px] text-start sm:col-start-1 sm:col-end-3">
            {author.nickname} -{" "}
            <span className="text-monochrome_03 text-[24px] xl:text-[38px]">
              {author.penName}
            </span>
            <hr className="text-monochrome_03" />
          </h3>
          <Quote author={author}></Quote>
          <GeneralInfo author={author}></GeneralInfo>
          <div className="sm:col-start-1 lg:block hidden sm:col-end-3">
            <RecentPosts
              recentPostsGrid={RecentPostsGrid}
              posts={author.posts}
              direction="horizontal"
              author={author}
            ></RecentPosts>
          </div>
        </div>
        <div className="sm:col-start-1 lg:hidden block sm:col-end-3">
          <RecentPosts
            recentPostsGrid={RecentPostsGrid}
            posts={author.posts}
            direction="horizontal"
            author={author}
          ></RecentPosts>
        </div>
      </div>
    </main>
  );
}
