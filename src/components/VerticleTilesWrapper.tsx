"use client";

import { Suspense, useEffect, useState } from "react";
import VerticalTiles from "./animata/preloader/vertical-tiles";
import Loader from "./Loader"; // Import the loader

export default function VerticalTilesWrapper({
  children,
}: {
  isAnimating?: boolean;
  setIsAnimating?: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  const [tileWidth, setTileWidth] = useState(32); // Default for desktop

  useEffect(() => {
    const updateTileWidth = () => {
      setTileWidth(window.innerWidth < 768 ? 16 : 32); // Mobile: 16px, Desktop: 32px
    };

    updateTileWidth(); // Set initial width
    window.addEventListener("resize", updateTileWidth);
    return () => window.removeEventListener("resize", updateTileWidth);
  }, []);

  return (
    <VerticalTiles
      animationDelay={1}
      animationDuration={0.5}
      minTileWidth={tileWidth} // Dynamic tile width
      stagger={0.05}
      tileClassName="bg-gradient-to-r from-zinc-100 to-zinc-300"
    >
      {/* Show Loader until LandingContent loads */}
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </VerticalTiles>
  );
}
