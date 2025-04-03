import Image from "next/image";
import JitterText from "../animata/text/jitter-text-";
import TextBorderAnimation from "../animata/text/text-border-animation";

export default function Sponsors() {
  const sponsorList = [
    { name: "Google", image: "/images/sponsers/google.png" },
    { name: "Facebook", image: "/images/sponsers/facebook.png" },
    { name: "Amazon", image: "/images/sponsers/amazon.png" },
  ];

  return (
    <div className="relative max-w-3xl mx-auto p-8 rounded-lg overflow-hidden">
      {/* Title with Jitter Effect */}
      <div className="text-center mb-8">
        <JitterText
          text="Sponsored By"
          className="text-xl font-bold text-white"
        />
        <hr className="mt-2 border-gray-500" />
      </div>

      {/* Sponsors Grid - 2 in First Row, 1 in Second Row */}
      <div className="grid grid-cols-2 gap-12 md:grid-cols-2">
        {sponsorList.map((sponsor, index) => (
          <div
            key={sponsor.name}
            className={`flex flex-col justify-center items-center transition-all duration-300 hover:scale-105 ${
              index === 2 ? "col-span-2 flex justify-center" : ""
            }`}
          >
            {/* Sponsor Image with White Border */}

            <Image
              src={sponsor.image}
              alt={sponsor.name}
              className="w-full max-w-[6rem] object-contain rounded-lg transition-all duration-300 hover:brightness-125 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]"
            />

            {/* Sponsor Name */}
            <div className="mt-4">
              <TextBorderAnimation
                text={sponsor.name}
                className="text-white text-sm md:text-md drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
