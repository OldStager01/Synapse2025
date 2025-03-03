import Events from "@/components/sections/Events/Events";
import FAQ from "@/components/sections/FAQ/FAQ";
import Hero from "@/components/sections/Hero/Hero";
export default function LandingContent() {
  return (
    <div className="w-full">
      {/* <Header /> */}
      <Hero id="home" />
      <Events id="events" />
      <FAQ id="faq" />
    </div>
  );
}
