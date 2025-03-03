import EventCard from "@/components/ui/event-card";

export default function Test() {
  return (
    <div className="bg-black min-h-screen">
      <EventCard
        title="INFINITY GALA"
        date="December 15, 2025"
        description="An exclusive gathering celebrating the heroes who saved the universe. Formal attire required."
        imageUrl="/placeholder.svg?height=300&width=500"
        stoneColor="#5e17eb" // Power Stone (purple)
      />
    </div>
  );
}
