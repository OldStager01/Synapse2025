import BackgroundVideo from "@/components/sections/Hero/BackgroundVideo";
import TerminalAnimation from "./Terminal";
import Link from "next/link";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import Sponsors from "@/components/sponsers/Sponsers";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
export default function Home({ id }: { id: string }) {
  return (
    <section
      id={id}
      className="relative w-[100vw] flex flex-col items-center text-white"
    >
      <div className="relative w-full h-[100vh] flex flex-col items-center justify-center">
        <BackgroundVideo />
        {/* Hero Content */}
        {/* <div className="relative top-48">
          <img
            className="relative max-w-[80vw] md:max-w-[40vw]"
            src="/images/LOGO.webp"
            alt="Logo"
          />
        </div> */}
        <Link href={"#events"}>
          <div className="absolute bottom-[20%] md:bottom-[10%] left-1/2 -translate-x-1/2">
            <RainbowButton className="text-lg md:text-2xl font-bold px-3 py-2 rounded-md">
              Register Now!
            </RainbowButton>
          </div>
        </Link>
      </div>

      {/* Register Button */}
      <div className="mt-2 md:mt-12 flex flex-col items-center w-full">
        {/* Sponsors & Terminal */}
        {/* <div className="w-full flex justify-between items-center px-10 mt-10">
          <div className="hidden md:block w-[20%]">
            <Sponsors />
          </div>
          <div className="hidden md:flex w-[20%]">
            <TerminalAnimation className="scale-90 bg-black text-white" />
          </div>
        </div> */}
        <ContainerScroll
          className="max-w-2xl"
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-yellow-400">
                Unleash the power <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  <span className="text-white">KKWIEER</span>{" "}
                  <span className="text-red-500">ASSEMBLE</span>
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/images/assemble.jpg`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
        {/* Mobile Sponsors & Terminal */}
        {/* <div className="md:hidden flex flex-col items-center mt-10">
          <Sponsors />
          <TerminalAnimation className="scale-90 bg-black text-white mt-5" />
        </div> */}
      </div>
    </section>
  );
}
