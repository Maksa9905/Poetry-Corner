import useGridInitialization from "../../CustomHooks";

export default function News({ news }) {
  const newsGrid = useGridInitialization({
    default: {
      columns: 4,
      rows: 2,
    },
    screen640: {
      columns: 1,
      rows: 2,
    },
    screen768: {
      columns: 2,
      rows: 1,
    },
    screen1024: {
      columns: 3,
      rows: 2,
    },
    screen1440: {
      columns: 3,
      rows: 2,
    },
    screen1920: {
      columns: 4,
      rows: 2,
    },
  });

  return (
    <section className="py-[25px]">
      <h3 className="font-[500]">
        <a href="#" className="hover:text-red">
          Новости
        </a>
      </h3>

      <div
        style={{
          gridTemplateColumns: `repeat(${newsGrid.columns}, 1fr)`,
          gridTemplateRows: `repeat(${newsGrid.rows}, auto)`,
        }}
        className={`grid grid-flow-col gap-x-[10px] gap-y-[20px] py-[10px]`}
      >
        {news.map((post, index) => {
          if (index < newsGrid.columns * newsGrid.rows) {
            return (
              <div key={post.id}>
                <h4 className="line-clamp-2 leading-[28px] hover:text-red">
                  <a href="#">{post.title}</a>
                </h4>
                <p className="line-clamp-2 mt-[7px]">{post.paragraph}</p>
              </div>
            );
          }
        })}
      </div>
      <a className="hover:text-red" href="#">
        Другие новости...
      </a>
    </section>
  );
}
