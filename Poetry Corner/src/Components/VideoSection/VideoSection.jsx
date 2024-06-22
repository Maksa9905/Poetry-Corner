export default function VideoSection() {
  return (
    <iframe
      className="w-[100%] aspect-video"
      src="https://www.youtube.com/embed/yYjoTbayfpw?si=ZGBoME8qsuPX7bwN"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}
