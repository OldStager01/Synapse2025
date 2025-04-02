export default function BackgroundVideo() {
  return (
    // <div className="absolute top-0 left-3 w-screen mt-10 h-[60vh] overflow-hidden">
    <div className="absolute top-0 w-screen h-[100vh] overflow-hidden">
      <video
        className="absolute top-0 w-full h-full"
        autoPlay
        muted
        loop
        playsInline
        width="100vw"
        height="100vh"
        // poster="/fallback-image.jpg"
      >
        <source src="/videos/SynapseHero.webm" type="video/webm" />
        {/* <source src="/videos/SynapseHero.mp4" type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
