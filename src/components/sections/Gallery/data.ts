export type Event = {
  title: string;
  year: string | number;
  desc: string;
  img: string;
  content?: React.ReactNode;
  subEvents: { name: string; desc: string; img: string[] }[];
};

export const events: Event[] = [
  {
    title: "Synapse",
    year: 2024,
    desc: "Synapse is the flagship tech event of the MIBCS Club, featuring Bid for Code, Blind Coding, Think Tank, Scavenger Hunt, and Brain Wave —a fusion of coding, problem-solving, and tech challenges to ignite innovation.",
    img: "/images/gallery/synapse.jpg",
    subEvents: [
      {
        name: "Bid for Code",
        desc: "A unique auction-style coding challenge where participants bid on coding problems and solve them within constraints.",
        img: [
          "/images/gallery/bfc1.jpg",
          "/images/gallery/bfc2.jpg",
          "/images/gallery/bfc3.jpg",
          "/images/gallery/bfc4.jpg",
          "/images/gallery/bfc5.jpg",
        ],
      },
      {
        name: "Scavenger Hunt",
        desc: "Scavenger Hunt is an exciting treasure hunt where participants decode clues, solve puzzles, and navigate challenges to uncover the final prize.",
        img: [
          "/images/gallery/q1.jpg",
          "/images/gallery/q2.jpg",
          "/images/gallery/q3.jpg",
          "/images/gallery/q4.jpg",
        ],
      },
      {
        name: "Blind Coding",
        desc: "A test of pure logic and syntax recall, where participants code without seeing their screen.",
        img: [
          "/images/gallery/bc1.jpg",
          "/images/gallery/bc2.jpg",
          "/images/gallery/bc3.jpg",
          "/images/gallery/bc4.jpg",
        ],
      },
      {
        name: "Think Tank",
        desc: "A problem-solving event that challenges participants to devise innovative tech solutions.",
        img: [
          "/images/gallery/bw1.jpg",
          "/images/gallery/bw2.jpg",
          "/images/gallery/bw3.jpg",
          "/images/gallery/bw4.jpg",
        ],
      },
    ],
  },
  {
    title: "Career Compass",
    year: 2025,
    desc: "Career Compass is an expert talk session featuring placed alumni and the TPO recruiting officer, offering insights, guidance, and real-world experiences to help students navigate their career paths.",
    img: "/images/gallery/c1.jpg",
    subEvents: [
      {
        name: "",
        desc: "",
        img: [
          "/images/gallery/c1.jpg",
          "/images/gallery/c2.jpg",
          "/images/gallery/c3.jpg",
          "/images/gallery/c4.jpg",
        ],
      },
    ],
  },
  {
    title: "Hactober Fest",
    year: 2025,
    desc: "Hacktober Fest is a hands-on event that provides practical experience with Git and GitHub, helping participants contribute to open-source projects and enhance their version control skills.",
    img: "/images/gallery/h1.jpg",
    subEvents: [
      {
        name: "",
        desc: "",
        img: [
          "/images/gallery/h1.jpg",
          "/images/gallery/h2.jpg",
          "/images/gallery/h3.jpg",
          "/images/gallery/h4.jpg",
        ],
      },
    ],
  },
  {
    title: "SIH Beyond the win!",
    year: 2025,
    desc: "SIH: Beyond the Win! is an expert talk session featuring SIH winners, where they share their journey, challenges, and strategies, inspiring participants to excel in Smart India Hackathon and beyond.",
    img: "/images/gallery/sih1.jpg",
    subEvents: [
      {
        name: "",
        desc: "",
        img: [
          "/images/gallery/sih1.jpg",
          "/images/gallery/sih4.jpg",
          "/images/gallery/sih3.jpg",
          "/images/gallery/sih4.jpg",
          "/images/gallery/sih5.jpg",
        ],
      },
    ],
  },
];
