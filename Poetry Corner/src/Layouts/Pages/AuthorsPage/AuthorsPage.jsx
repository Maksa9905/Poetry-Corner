import { SearchQueryContext } from "../../../Context/searchQueryContext";
import { sortTypes } from "./AuthorsPage.config";
import { selectStyles } from "./AuthorsPage.config";
import { selectTheme } from "./AuthorsPage.config";
import { useContext, useState } from "react";
import Select from "react-select";
import SortedAuthors from "./SortedAuthors";
import { authors } from "../../../data/posts";

export default function AuthorsPage() {
  const [sortType, setSortType] = useState("popular");

  const onChangeHandler = (newValue) => {
    setSortType(newValue.value);
  };

  const getValue = () => {
    return sortType ? sortTypes.find((t) => t.value === sortType) : "";
  };

  return (
    <main className="container pt-[15px] px-[10px] pb-[25px]">
      <h3 className="font-[500] text-monochrome_02">Авторы</h3>
      <Select
        onChange={onChangeHandler}
        value={getValue()}
        options={sortTypes}
        placeholder="Сортировать по:"
        theme={selectTheme}
        styles={selectStyles}
        className="w-[200px]"
      ></Select>
      <SortedAuthors authors={authors} sortType={sortType}></SortedAuthors>
    </main>
  );
}
