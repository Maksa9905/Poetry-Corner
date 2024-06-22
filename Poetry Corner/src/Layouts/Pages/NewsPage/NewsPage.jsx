import Select from "react-select";
import { useState } from "react";
import { news } from "../../../data/news";
import NewsPageItem from "../../../Components/NewsPageItem/NewsPageItem";
import { useLocation } from "react-router-dom";
import { selectStyles, selectTheme, sortTypes } from "./NewsPage.config";
import { compareFunctions } from "../../../Helpers/compareFunctions";

export default function NewsPage() {
  const [sortType, setSortType] = useState("new");
  const locationState = useLocation().state;
  const searchNewId = locationState === null ? null : locationState.searchNewId;

  const onChangeHandler = (newValue) => {
    setSortType(newValue.value);
  };

  const getValue = () => {
    return sortType
      ? sortTypes.find((type) => type.value === sortType.value)
      : "";
  };

  const scrollHandler = (scrollRef) => {
    setTimeout(() => {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <main className="container pt-[15px] px-[10px] pb-[25px]">
      <h3 className="font-[500] text-monochrome_02">Новости</h3>
      <Select
        onChange={onChangeHandler}
        value={getValue()}
        options={sortTypes}
        placeholder="Сортировать по:"
        theme={selectTheme}
        styles={selectStyles}
        className="w-[200px]"
      ></Select>
      <div className="py-[10px]">
        {[...news].sort(compareFunctions[sortType]).map((item, index) => {
          return (
            <NewsPageItem
              scrollToNew={(scrollRef) => scrollHandler(scrollRef)}
              index={index}
              searchNewId={searchNewId}
              key={item.id}
              item={item}
            ></NewsPageItem>
          );
        })}
      </div>
    </main>
  );
}
