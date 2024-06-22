import { timeManager } from "../../Helpers/timeManger";

export default function NewsPageItem_closed({ containerRef, item, onOpen }) {
  return (
    <div className="pb-[15px]">
      <div className="pt-[15px]">
        <p className="text-monochrome_03">{timeManager(item.date)}</p>
        <h4>{item.title}</h4>
        <div className="py-[5px] h-[350px] overflow-hidden relative">
          {item.paragraph.match(/[^\r\n]+/g).map((paragraphItem, index) => {
            return (
              <p key={index} className="pb-[20px] last:pb-[0]">
                {paragraphItem}
              </p>
            );
          })}
          <div className="bg-[linear-gradient(rgba(225,208,188,0),rgba(225,208,188,1))] w-[100%] h-[100px] absolute bottom-0"></div>
        </div>
      </div>
      <button onClick={onOpen} className="hover:text-red">
        показать полностью...
      </button>
    </div>
  );
}
