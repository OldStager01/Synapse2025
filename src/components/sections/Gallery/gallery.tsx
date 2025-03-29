"use client";

import Marvel3DGallery from "./3d-gallery";

// Sample data for the gallery
const galleryItems = [
  {
    id: "1",
    title: "Freshman Orientation",
    description:
      "New heroes assembled for the first time, ready to begin their legendary journey.",
    type: "image" as const,
    src: undefined,
    date: "Sept 2022",
  },
  {
    id: "2",
    title: "Tech Expo",
    description:
      "Our brightest minds showcased innovations that would make even Tony Stark proud.",
    type: "image" as const,
    src: undefined,
    date: "Nov 2022",
  },
  {
    id: "3",
    title: "Annual Sports Meet",
    description:
      "Super-powered performances that defied expectations and broke records.",
    type: "image" as const,
    src: undefined,
    date: "Jan 2023",
  },
  {
    id: "4",
    title: "Cultural Festival",
    description:
      "A multiverse of talents converged to create an unforgettable spectacle.",
    type: "image" as const,
    src: undefined,
    date: "Mar 2023",
  },
  {
    id: "5",
    title: "Graduation Ceremony",
    description:
      "Our heroes received their infinity stones of knowledge, ready to change the world.",
    type: "image" as const,
    src: undefined,
    date: "May 2023",
  },
];

export default function Gallery() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          <span className="relative">
            <span className="relative z-10">Marvel 3D Gallery</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-600"></span>
          </span>
        </h1>
        <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
          Experience our events in an immersive 3D environment inspired by
          Marvel's cinematic universe
        </p>

        <Marvel3DGallery items={galleryItems} />
      </div>
    </main>
  );
}
