import { useEffect, useState } from "react";
import { useRef } from "react";
import NewsPageItem_opened from "./NewsPageItem_opened";
import NewsPageItem_closed from "./NewsPageItem_closed";
import NewsPageItem_small from "./NewsPageItem_small";
import { memo } from "react";

export default memo(function NewsPageItem({ item, searchNewId, scrollToNew }) {
  const scrollRef = useRef();
  const [size, setSize] = useState("isOpened");
  const image = item.imageURL;

  useEffect(() => {
    const isLarge = () => {
      if (item.paragraph.length > 1800) return "isClosed";
      if (item.paragraph.length <= 1800) return "small";
    };
    setSize(isLarge);
  }, []);

  useEffect(() => {
    if (searchNewId === item.id) {
      scrollToNew(scrollRef);
    }
  }, []);

  const isOpenedChanger = {
    isOpened: (
      <NewsPageItem_opened item={item} onClose={() => setSize("isClosed")} />
    ),

    isClosed: (
      <NewsPageItem_closed item={item} onOpen={() => setSize("isOpened")} />
    ),

    small: <NewsPageItem_small item={item} />,
  };

  return (
    <div
      className={`${
        item.id === searchNewId ? "animate-[appear_1.5s_ease-in-out]" : ""
      }`}
      ref={scrollRef}
    >
      {isOpenedChanger[size]}
    </div>
  );
});
