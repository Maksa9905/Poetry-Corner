import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SearchQueryContext } from "../Context/searchQueryContext";
import { useRef } from "react";

export default function Header() {
  const [isNavOpened, setIsNavOpened] = useState(false);
  const [searchQuery, setSearchQuery] = useContext(SearchQueryContext);
  const navigate = useNavigate();
  const location = useLocation();
  const searchInputRef = useRef();

  return (
    <>
      <div className="container sticky p-[10px] flex items-center gap-x-[20px] justify-between">
        <Link className="flex items-center gap-[12px]" to={`/`}>
          <div className="w-[30px] h-[30px] bg-logo "></div>
          <h1 className="font-[400] text-monochrome_01 text-[24px] lg:block hidden">
            Poetry Corner
          </h1>
        </Link>
        <nav className="justify-center text-monochrome_01 sm:flex hidden gap-x-[30px] gap-y-[10px] flex-wrap">
          <Link to="/" className="hover:text-red" href="#">
            Главная
          </Link>
          <Link to="/posts" className="hover:text-red">
            Публикации
          </Link>
          <a className="hover:text-red" href="#">
            Поиск
          </a>
          <a className="hover:text-red" href="#">
            Контакты
          </a>
          <a href="#" className="text-monochrome_02 hover:text-red">
            Вход для модераторов
          </a>
        </nav>

        <form
          onSubmit={(event) => {
            if (location.pathname !== "/posts") {
              navigate("/posts");
            }
            setSearchQuery(searchInputRef.current.value);
            searchInputRef.current.value = "";
            event.preventDefault();
          }}
          className="flex gap-x-[15px]"
        >
          <div className="flex border-b-[1px]">
            <input
              className="px-[10px] pt-[6px] pb-[2px] rounded-[5px] focus:outline-none placeholder:text-monochrome_02 bg-transparent"
              placeholder="Поиск..."
              type="text"
              ref={searchInputRef}
            />
            <button
              type="submit"
              className="w-[32px] aspect-square bg-right_arrow bg-contain"
            ></button>
          </div>
        </form>

        <div className="sm:hidden">
          <button
            onClick={() =>
              setIsNavOpened((prevIsNavOpened) => !prevIsNavOpened)
            }
            className="bg-menu w-[30px] h-[30px]"
          ></button>
        </div>
      </div>
      {isNavOpened && (
        <nav className="flex absolute z-10 w-[100%] gap-x-[20px] bg-neutral_03 gap-y-[10px] justify-between p-[10px] flex-wrap sm:hidden">
          <Link to="/" href="#">
            Главная
          </Link>
          <Link to="/posts" href="#">
            Публикации
          </Link>
          <a href="#">Поиск</a>
          <a href="#">Контакты</a>
          <a href="#" className="text-monochrome_02">
            Вход для модераторов
          </a>
        </nav>
      )}
    </>
  );
}
