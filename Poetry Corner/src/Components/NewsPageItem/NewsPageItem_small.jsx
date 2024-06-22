import { timeManager } from "../../Helpers/timeManger";

export default function NewsPageItem_small({ item }) {
  return (
    <div className="py-[15px]">
      <p className="text-monochrome_03">{timeManager(item.date)}</p>
      <h4>{item.title}</h4>
      <div className="py-[5px]">
        {item.paragraph.match(/[^\r\n]+/g).map((paragraphItem, index) => {
          return (
            <p key={index} className="pb-[20px] last:pb-[0]">
              {paragraphItem}
            </p>
          );
        })}
      </div>
    </div>
  );
}
