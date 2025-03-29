import Benefits from "@/components/sections/Benefits/Benefits";
import Events from "@/components/sections/Events/Events";
import FAQ from "@/components/sections/FAQ/FAQ";
import Gallery from "@/components/sections/Gallery/gallery";
import MarvelCarousel from "@/components/sections/Gallery/marvel-carousel";
import Hero from "@/components/sections/Hero/Hero";
import { TracingBeam } from "@/components/ui/tracing-beam";
export default function LandingContent() {
  return (
    <div className="w-full">
      {/* <Header /> */}
      <Hero id="home" />
      <Events id="events" />
      <Benefits />
      <MarvelCarousel />
      <FAQ id="faq" />
    </div>
  );
}
