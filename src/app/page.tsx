import Footer from "@/components/sections/Footer/page";
import Header from "@/components/sections/Header/Header";
import VerticalTilesWrapper from "@/components/VerticleTilesWrapper";
import dynamic from "next/dynamic";

const LandingContent = dynamic(() => import("./LandingContent"), { ssr: true });
export default function Home() {
  return (
    <div className="w-full">
      {/* <VerticalTilesWrapper> */}
      <Header />
      <LandingContent />
      <Footer />
      {/* </VerticalTilesWrapper> */}
    </div>
  );
}
