"use client";
import { useEffect, useState } from "react";

export default function BackgroundVideo() {
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [videoSource, setVideoSource] = useState<string | undefined>(
    "/videos/SynapseDesktop.webm"
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    setWidth(window.innerWidth); // Set initial width on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width !== undefined) {
      setVideoSource(
        width < 768
          ? "/videos/SynapseMobile.webm"
          : width < 1024
          ? "/videos/SynapseTab.webm"
          : "/videos/SynapseDesktop.webm"
      );
    }
  }, [width]); // Re-run effect when `width` changes

  if (width === undefined) {
    return null; // Avoid hydration issues
  }

  return (
    <div className="absolute top-0 w-screen h-screen overflow-hidden">
      <video
        key={videoSource} // Force re-render when video source changes
        className="absolute top-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/fallback-image.jpg"
      >
        <source src={videoSource} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
