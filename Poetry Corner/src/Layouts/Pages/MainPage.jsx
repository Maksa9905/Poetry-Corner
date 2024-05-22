import { useEffect, useState } from "react";
import { news } from "../../data/news";
import { posts } from "../../data/posts";
import { ads } from "../../data/ads";
import News from "../../Components/News/News";
import RecentPosts from "../../Components/RecentPosts.jsx/RecentPosts";
import AdsWidget from "../../Components/AdsWidget/AdsWidget";
import useGridInitialization from "../../CustomHooks";
import VideoSection from "../../Components/VideoSection/VideoSection";

export default function MainPage() {
  return (
    <main className="container py-[15px] px-[10px]">
      <h2 className="py-[10px]">Добро пожаловать в уголок поэзии!</h2>
      <p className="py-[10px]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi at
        recusandae dolores maxime modi, vel est iusto quam eius consequatur
        atque ipsum eaque! Vero deserunt asperiores non tenetur? Sapiente,
        quisquam!
      </p>
      <p className="py-[10px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores
        ullam officia accusamus ipsa. Molestias sed reprehenderit nesciunt
        similique laboriosam porro, a est, illo repellendus quidem explicabo
        mollitia. Odit maxime soluta fuga. Voluptates porro nihil voluptatum hic
        inventore perspiciatis in. Sequi nisi ipsum quidem similique recusandae.
        Culpa fugit et, maiores beatae ad tempore repudiandae dicta?
        Consequuntur!
      </p>
      <News news={news}></News>
      <VideoSection></VideoSection>
      <AdsWidget ads={ads}></AdsWidget>
      <RecentPosts posts={posts}></RecentPosts>
      {/* <Slider></Slider> */}
    </main>
  );
}
