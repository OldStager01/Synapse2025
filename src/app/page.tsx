import Preloader from "@/components/Preloader/Preloader";
import Footer from "@/components/sections/Footer/page";
import Header from "@/components/sections/Header/Header";
import VerticalTilesWrapper from "@/components/VerticleTilesWrapper";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const LandingContent = dynamic(() => import("./LandingContent"), { ssr: true });
export default function Home() {
  return (
    <div className="w-full">
      {/* <VerticalTilesWrapper> */}
      <Header />
      {/* <Suspense fallback={<Preloader onComplete={() => {}} />}> */}
      <LandingContent />
      {/* </Suspense> */}
      <Footer />
      {/* </VerticalTilesWrapper> */}
    </div>
  );
}
