// import ScrollingTestimonials from "@/components/animata/container/scrolling-testimonials";

import Marquee from "@/components/animata/container/marquee";
import {
  president,
  vicePresident,
  seniorCommittee,
  juniorCommittee,
} from "./data";
import MemberCard from "./MemberCard";

export default function TeamMarquee({ id }: { id: string }) {
  return (
    <div id={id} className="w-[100vw] mt-28">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 uppercase relative inline-block">
          <span className="relative z-10 text-yellow-400">TEAM</span>
          <span className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-red-500 via-amber-500 to-blue-500 opacity-70 blur-sm"></span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Meet the Avengers of MIBCS, a team of passionate innovators and
          dedicated heroes, working together to bring excellence to every event
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:gap-16">
        <div className="my-5">
          <MemberCard
            member={president}
            spotlight={true}
            glowColor="from-marvel-red to-red-400"
            nameColor="text-marvel-red"
          />
        </div>
        <div className="my-5">
          <MemberCard
            member={vicePresident}
            spotlight={true}
            glowColor="from-marvel-blue to-blue-400"
            nameColor="text-marvel-blue"
          />
        </div>
      </div>
      <div className="mt-20 relative">
        <h3 className="text-2xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-center text-transparent bg-gradient-to-r from-marvel-red to-yellow-300">
            Senior Committee
          </span>
          {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-marvel-blue"></div> */}
        </h3>
        <div className="relative">
          <Marquee className="[--duration:20s]" pauseOnHover applyMask={false}>
            {seniorCommittee.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </Marquee>
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-black/70 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-black/70 to-transparent z-10 pointer-events-none" />
        </div>
      </div>
      <div className="mt-8 relative">
        <h3 className="text-2xl font-bold mb-8 text-center">
          <span className="bg-clip-text text-center text-transparent bg-gradient-to-r from-marvel-red to-yellow-300">
            Core Committee
          </span>
          {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-400"></div> */}
        </h3>
        <div className="relative">
          <Marquee
            reverse
            className="[--duration:35s]"
            pauseOnHover
            applyMask={false}
          >
            {juniorCommittee.map((member) => (
              <MemberCard key={member.name} member={member} />
            ))}
          </Marquee>
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-black/70 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-black/70 to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
