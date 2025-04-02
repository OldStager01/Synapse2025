"use client";

import Preloader from "@/components/Preloader/Preloader";
export default function Loader() {
  // return <Preloader onComplete={() => {}} />;
  return (
    <div className="flex justify-center items-center text-white h-screen">
      Loading...
    </div>
  );
}
