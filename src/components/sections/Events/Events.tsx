import EventCard from "@/components/ui/event-card";
import events from "./eventsData";

export default function Events({ id }: { id: string }) {
  return (
    <div id={id} className="text-white mt-5">
      <div className="text-center">
        {/* <SectionHeading>Events</SectionHeading> */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 uppercase relative inline-block">
            <span className="relative z-10 text-yellow-400">EVENTS</span>
            <span className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-r from-red-500 via-amber-500 to-blue-500 opacity-70 blur-sm"></span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Step into the MIBCS portal, where every event is a new quest, and
            every hero has the chance to rise to legendary status!
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-wrap justify-evenly gap-10 px-8 md:gap-y-24">
        {events.map((event, index) => (
          <div
            key={index}
            className="w-full max-w-md sm:w-1/2 md:w-1/3 flex justify-center mt-10 overflow-visible"
          >
            <EventCard
              title={event.title}
              date={event.date}
              description={event.description}
              imageUrl={event.imageUrl}
              stoneColor={event.stoneColor}
              registerUrl={event.registerUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
