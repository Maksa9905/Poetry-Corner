export default function Quote({ author }) {
  if (author.quote) {
    return (
      <div>
        <h4 className="mt-[8px] text-monochrome_02">Любимая цитата:</h4>
        <h2 className="font-handwritten text-center mt-[10px] text-[30px]">{`«${author.quote}»`}</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h4 className="mt-[8px] text-monochrome_02">Любимая цитата:</h4>
        <p className="text-monochrome_03 text-[20px] mt-[16px]">
          Автор пока не оставил свою любимую цитату
        </p>
      </div>
    );
  }
}
