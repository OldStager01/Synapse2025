import TeamCarousel from "@/components/ui/team-carousel";
import LeadershipCards from "@/components/ui/leadership-cards";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-red-900 text-white py-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-500">
            OUR TEAM
          </h1>
          <p className="text-xl text-gray-300">The heroes behind the event</p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-red-400">
            Leadership
          </h2>
          <LeadershipCards />
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-red-400">
            Senior Committee
          </h2>
          <Suspense
            fallback={
              <div className="h-80 flex items-center justify-center">
                Loading...
              </div>
            }
          >
            <TeamCarousel
              members={seniorCommittee}
              carouselId="senior-carousel"
            />
          </Suspense>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-red-400">
            Junior Committee
          </h2>
          <Suspense
            fallback={
              <div className="h-80 flex items-center justify-center">
                Loading...
              </div>
            }
          >
            <TeamCarousel
              members={juniorCommittee}
              carouselId="junior-carousel"
            />
          </Suspense>
        </section>
      </div>
    </main>
  );
}

const seniorCommittee = [
  {
    name: "Tony Stark",
    position: "Technical Lead",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Natasha Romanoff",
    position: "Operations Manager",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Steve Rogers",
    position: "Event Coordinator",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Bruce Banner",
    position: "Research Head",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Thor Odinson",
    position: "Logistics Manager",
    image: "/placeholder.svg?height=400&width=300",
  },
];

const juniorCommittee = [
  {
    name: "Peter Parker",
    position: "Technical Assistant",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Wanda Maximoff",
    position: "Creative Designer",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Sam Wilson",
    position: "PR Coordinator",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Bucky Barnes",
    position: "Security Head",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Scott Lang",
    position: "Entertainment Lead",
    image: "/placeholder.svg?height=400&width=300",
  },
];
