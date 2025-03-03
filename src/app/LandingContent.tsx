import Events from "@/components/sections/Events/Events";
import Hero from "@/components/sections/Hero/Hero";
export default function LandingContent() {
  return (
    <div className="w-full">
      {/* <Header /> */}
      <Hero id="home" />
      <Events id="events" />
    </div>
  );
}
