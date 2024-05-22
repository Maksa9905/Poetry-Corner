export default function VideoSection() {
  return (
    <iframe
      className="w-[100%] aspect-video"
      src="https://www.youtube.com/embed/yYjoTbayfpw?si=ZGBoME8qsuPX7bwN"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  );
}
