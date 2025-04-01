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
      className="relative w-full flex flex-col items-center text-white"
    >
      <div className="relative w-full flex flex-col items-center h-[80vh] justify-center">
        <BackgroundVideo />
        {/* Hero Content */}
        <div className="relative top-24">
          {/* <div className="absolute inset-5 md:inset-10 bg-white blur-[30px] md:blur-[20px] opacity-20 md:opacity-15 rounded-full"></div> */}
          <img
            className="relative max-w-[80vw] md:max-w-[40vw]"
            src="/images/LOGO.webp"
            alt="Logo"
          />
        </div>
      </div>

      {/* Register Button */}
      <div className="mt-10 md:mt-16 flex flex-col items-center w-full">
        <Link href={"#events"}>
          <RainbowButton className="text-lg md:text-2xl font-bold px-3 py-2 rounded-md">
            Register Now!
          </RainbowButton>
        </Link>

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
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Unleash the power <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  KKWIEER ASSEMBLE
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrEaZ0cEe12P9R3qzANnB3LTzQj2zEGtOePQ&s`}
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
