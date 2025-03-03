// app/page.tsx (if using App Router)
import BackgroundVideo from "@/components/sections/Hero/BackgroundVideo";
// import { Background } from "./Background";
import TerminalAnimation from "./Terminal";
import Link from "next/link";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import Sponsors from "@/components/sponsers/Sponsers";

export default function Home({ id }: { id: string }) {
  return (
    <main id={id}>
      <BackgroundVideo>
        <div className="absolute top-[20rem] md:top-[26rem] left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <div className="absolute inset-5 md:inset-10 bg-white blur-[30px] md:blur-[20px] opacity-80 md:opacity-30 rounded-full"></div>
          <img
            className="relative max-w-[80vw] md:max-w-[40vw] "
            src="/images/LOGO.webp"
            alt="Logo"
          />
        </div>
        <Link href={"#events"}>
          <RainbowButton className="text-lg md:text-2xl font-bold px-3 py-2 rounded-md absolute bottom-[18rem] md:bottom-[6rem] left-1/2 -translate-x-1/2 z-[99]">
            Register Now!
          </RainbowButton>
        </Link>
        <div className="hidden md:block w-[20%] absolute bottom-2 left-[5rem] ">
          <Sponsors />
        </div>
        <div className="hidden md:block w-[20%] absolute bottom-10 right-[5rem] ">
          <TerminalAnimation className="scale-90 bg-black text-white" />
        </div>
      </BackgroundVideo>
      <div className="md:hidden relative transform -translate-y-[15rem] w-full flex flex-col items-center">
        <div className="md:hidden max-w-xs w-[100%] flex justify-center mx-auto">
          <Sponsors />
        </div>
        <TerminalAnimation className="scale-90 bg-black text-white" />
      </div>
    </main>
  );
}
