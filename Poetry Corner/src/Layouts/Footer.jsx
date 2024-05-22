export default function Footer() {
  return (
    <footer className="bg-monochrome_02 text-white py-[40px]">
      <div className="container flex justify-around gap-x-[15px] gap-y-[10px] sm:justify-between items-baseline px-[20px] flex-wrap">
        <div className="flex font-normal flex-col">
          <p>Следите за новостями</p>
          <div className="flex flex-row gap-[10px]">
            <a href="https://vk.com/decadencetrullyclose">
              <div className="w-[40px] aspect-square bg-vk_icon bg-no-repeat bg-cover"></div>
            </a>
            <a href="https://t.me/+U0KdXmCf8n5hYzdi">
              <div className="w-[40px] aspect-square bg-tg_icon bg-no-repeat bg-cover"></div>
            </a>
            <a href="#">
              <div className="w-[40px] aspect-square bg-yt_icon bg-no-repeat bg-cover"></div>
            </a>
          </div>
        </div>
        <div className="">
          <p>Контакты</p>
          <div className="flex flex-row gap-[20px] text-neutral_05">
            <p>Maksa9905@yandex.ru</p>
            <p>+79960667512</p>
          </div>
        </div>
        <div className="">
          <p>©️hakolr</p>
        </div>
      </div>
    </footer>
  );
}
