import { posts } from "../../../data/posts";
import Select from "react-select";
import { useState } from "react";
import { selectTheme, selectStyles } from "./PostPage.config";
import { sortTypes } from "./PostPage.config";
import SortedPosts from "./SortedPosts";

export default function PostsPage() {
  const [sortType, setSortType] = useState("popular");

  const onChangeHandler = (newValue) => {
    setSortType(newValue.value);
  };

  const getValue = () => {
    return sortType ? sortTypes.find((t) => t.value === sortType) : "";
  };

  return (
    <main className="container pt-[15px] px-[10px] pb-[25px]">
      <h3 className="font-[500] text-monochrome_02">Публикации</h3>
      <Select
        onChange={onChangeHandler}
        value={getValue()}
        options={sortTypes}
        placeholder="Сортировать по:"
        theme={selectTheme}
        styles={selectStyles}
        className="w-[200px]"
      ></Select>
      <SortedPosts posts={posts} sortType={sortType}></SortedPosts>
    </main>
  );
}
