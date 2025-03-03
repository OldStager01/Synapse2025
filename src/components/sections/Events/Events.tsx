import SectionHeading from "@/components/SectionHeading";
import EventCard from "@/components/ui/event-card";
import events from "./eventsData";

export default function Events({ id }: { id: string }) {
  return (
    <div id={id} className="text-white">
      <div className="text-center">
        <SectionHeading>Events</SectionHeading>
      </div>
      <div className="mt-10 flex flex-wrap justify-evenly gap-12 px-8 md:px-0">
        {events.map((event, index) => (
          <div
            key={index}
            className="w-full max-w-sm sm:w-1/2 md:w-1/3 flex justify-center mt-10 overflow-visible"
          >
            <EventCard
              title={event.title}
              date={event.date}
              description={event.description}
              imageUrl={event.imageUrl}
              stoneColor={event.stoneColor}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
