export default function BackgroundVideo() {
  return (
    <div className="absolute top-0 w-screen mt-10 h-[80vh] overflow-hidden">
      <video
        className="absolute top-0 w-full h-full object-contain"
        autoPlay
        muted
        loop
        playsInline
        poster="/fallback-image.jpg"
      >
        <source src="/videos/output.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
