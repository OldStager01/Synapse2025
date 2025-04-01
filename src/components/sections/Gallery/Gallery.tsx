"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { events, Event } from "./data";
export default function Gallery() {
  const cards = useMemo(
    () =>
      events?.map((event: Event, index) => {
        event.content = EventModal({ event });
        return <Card key={event.img} card={event} index={index} />;
      }),
    []
  );

  return (
    <div className="w-[100vw] h-full py-20">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 uppercase relative inline-block">
          <span className="relative z-10 text-yellow-400">
            GLIMPSE OF MIBCS
          </span>
          <span className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-red-500 via-amber-500 to-blue-500 opacity-70 blur-sm"></span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Join our event and unlock powers that will transform your college
          experience and future career!
        </p>
      </div>
      <Carousel items={cards} />
    </div>
  );
}
const EventModal = ({ event }: { event: any }) => {
  if (!event) return null;

  const items = event.subEvents.map((subEvent: any, index: number) => {
    const imageCarousel = subEvent.img.map((imgSrc: string, i: number) => (
      <div key={i} className="h-[300px] w-[200px] flex justify-center">
        <Image
          src={imgSrc}
          alt={`${subEvent.name} image ${i + 1}`}
          width={600}
          height={400}
          className="rounded-lg object-cover"
        />
      </div>
    ));

    return (
      <div
        key={index}
        className="border border-gray-500 p-6 md:p-10 rounded-3xl mt-6 overflow-hidden"
      >
        <h3 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-200">
          {subEvent.name}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-400 mt-1">
          {subEvent.desc}
        </p>
        <Carousel items={imageCarousel} />
      </div>
    );
  });

  return (
    <div className="flex items-center justify-center bg-opacity-50 z-50">
      {/* Sub-Events Sections */}
      <div className="mt-6 w-full">{items}</div>
    </div>
  );
};

// const data = [
//   {
//     category: "Artificial Intelligence",
//     title: "You can do more with AI.",
//     src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Productivity",
//     title: "Enhance your productivity.",
//     src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Product",
//     title: "Launching the new Apple Vision Pro.",
//     src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },

//   {
//     category: "Product",
//     title: "Maps for your iPhone 15 Pro Max.",
//     src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "iOS",
//     title: "Photography just got better.",
//     src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
//   {
//     category: "Hiring",
//     title: "Hiring for a Staff Software Engineer",
//     src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     content: <DummyContent />,
//   },
// ];
