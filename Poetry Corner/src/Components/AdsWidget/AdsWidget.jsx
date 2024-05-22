import getRandomInt from "./getRandomInt";

export default function AdsWidget({ ads }) {
  const ad = ads[getRandomInt(ads.length)];

  return (
    <section className="">
      <p className="text-monochrome_03">Реклама</p>
      <a href={ad.link}>
        <div className="grid gap-x-[10px] grid-cols-[40px_auto] grid-rows-[auto_auto] hover:bg-neutral_03 bg-neutral_04 duration-100 py-[10px] px-[15px]">
          <div
            className={`bg-${ad.icon} w-[40px] aspect-square my-auto bg-no-repeat bg-cover`}
          ></div>
          <h4 className="font-[500]">~{ad.title}~</h4>
          <p className="mt-[5px] col-start-1 col-end-3">{ad.description}</p>
        </div>
      </a>
    </section>
  );
}
