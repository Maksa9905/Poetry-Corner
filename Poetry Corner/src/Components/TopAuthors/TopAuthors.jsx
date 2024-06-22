import { authors } from "../../data/posts";
import { Link } from "react-router-dom";

export default function TopAuthors() {
  return (
    <div className="pb-[20px]">
      <h3 className="font-[500]">
        <Link to={"/authors"} className="hover:text-red">
          Популярные авторы
        </Link>
      </h3>
      <div className="flex gap-[10px] py-[10px] resize-x max-h-[230px] overflow-hidden flex-wrap items-center">
        {authors.map((author, index) => {
          return (
            <Link key={author.id} to={`/authors/${author.id}`}>
              <div className="h-[100px] aspect-square">
                <img
                  src={author.iconUrl}
                  className="h-[100px] w-[100px] object-cover"
                  alt=""
                />
              </div>
            </Link>
          );
        })}
      </div>
      <Link to={`/authors`} className="hover:text-red">
        Посмотреть всех...
      </Link>
    </div>
  );
}
