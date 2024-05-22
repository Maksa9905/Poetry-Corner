import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavOpened, setIsNavOpened] = useState(false);

  return (
    <>
      <div className="container sticky p-[10px] flex items-center gap-x-[20px] justify-between">
        <Link to={`/`}>
          <a href="#" className="flex items-center gap-[12px]">
            <div className="w-[30px] h-[30px] bg-logo "></div>
            <h1 className="font-[400] text-monochrome_01 text-[24px] lg:block hidden">
              Poetry Corner
            </h1>
          </a>
        </Link>
        <nav className="justify-center text-monochrome_01 sm:flex hidden gap-x-[30px] gap-y-[10px] flex-wrap">
          <a className="hover:text-red" href="#">
            Главная
          </a>
          <a className="hover:text-red" href="#">
            Популярное
          </a>
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
        <div className="border-b-[1px]">
          <input
            className="px-[10px] pt-[6px] pb-[2px] rounded-[5px] focus:outline-none placeholder:text-monochrome_02 bg-transparent"
            placeholder="Поиск..."
            type="text"
          />
        </div>
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
        <nav className="flex absolute w-[100%] gap-x-[20px] bg-neutral_03 gap-y-[10px] justify-between p-[10px] flex-wrap sm:hidden">
          <a href="#">Главная</a>
          <a href="#">Популярное</a>
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
