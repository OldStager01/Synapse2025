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
    year: 2025,
    desc: "Synapse is the flagship tech event of the MIBCS Club, featuring Bid for Code, Blind Coding, Think Tank, Scavenger Hunt, and Brain Wave —a fusion of coding, problem-solving, and tech challenges to ignite innovation.",
    img: "/images/gallery/synapse.jpeg",
    subEvents: [
      {
        name: "Bid for Code",
        desc: "A unique auction-style coding challenge where participants bid on coding problems and solve them within constraints.",
        img: [
          "/images/gallery/brainWave.JPG",
          "/images/gallery/brainWave.JPG",
          "/images/gallery/brainWave.JPG",
          "/images/gallery/brainWave.JPG",
        ],
      },
      {
        name: "Scavenger Hunt",
        desc: "Scavenger Hunt is an exciting treasure hunt where participants decode clues, solve puzzles, and navigate challenges to uncover the final prize.",
        img: [
          "/images/gallery/bc1.JPG",
          "/images/gallery/bc2.JPG",
          "/images/gallery/q4.JPG",
          "/images/gallery/q1.JPG",
        ],
      },
      {
        name: "Blind Coding",
        desc: "A test of pure logic and syntax recall, where participants code without seeing their screen.",
        img: [
          "/images/gallery/bc1.JPG",
          "/images/gallery/bc2.JPG",
          "/images/gallery/bc3.JPG",
          "/images/gallery/bc4.JPG",
        ],
      },
      {
        name: "Think Tank",
        desc: "A problem-solving event that challenges participants to devise innovative tech solutions.",
        img: [
          "/images/gallery/q1.JPG",
          "/images/gallery/q2.JPG",
          "/images/gallery/q3.JPG",
          "/images/gallery/q4.JPG",
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
          "/images/gallery/c2.JPG",
          "/images/gallery/c3.JPG",
          "/images/gallery/c4.JPG",
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
          "/images/gallery/h3.JPG",
          "/images/gallery/h4.JPG",
          "/images/gallery/h3.JPG",
        ],
      },
    ],
  },
  {
    title: "SIH Beyond the win!",
    year: 2025,
    desc: "SIH: Beyond the Win! is an expert talk session featuring SIH winners, where they share their journey, challenges, and strategies, inspiring participants to excel in Smart India Hackathon and beyond.",
    img: "/images/gallery/sih1.HEIC",
    subEvents: [
      {
        name: "",
        desc: "",
        img: [
          "/images/gallery/sih1.HEIC",
          "/images/gallery/sih4.HEIC",
          "/images/gallery/sih3.HEIC",
          "/images/gallery/sih4.HEIC",
        ],
      },
    ],
  },
];
