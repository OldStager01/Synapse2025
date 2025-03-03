export default function BackgroundVideo({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-screen mt-5 overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full mt-[10vh] md:mt-0 md:h-[80vh] object-contain"
        autoPlay
        muted
        loop
        playsInline
        poster="/fallback-image.jpg"
      >
        <source src="/videos/output.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="relative h-screen z-10 text-white">{children}</div>
    </div>
  );
}
