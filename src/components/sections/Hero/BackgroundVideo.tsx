"use client";
import Loader from "@/components/Loader";
import { useEffect, useState } from "react";

export default function BackgroundVideo() {
  const [width, setWidth] = useState<number | undefined>(undefined);
  const [videoSource, setVideoSource] = useState<string | undefined>(
    "/videos/SynapseDesktop.webm"
  );
  const [isLoading, setIsLoading] = useState(true);

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
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <Loader />
        </div>
      )}
      <video
        key={videoSource} // Force re-render when video source changes
        className={`absolute top-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        autoPlay
        muted
        loop
        playsInline
        poster="/fallback-image.jpg"
        onLoadedMetadata={() => setIsLoading(true)} // Start loading when metadata is available
        onLoadedData={() => setIsLoading(false)} // Hide loader when full video is loaded
      >
        <source src={videoSource} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
