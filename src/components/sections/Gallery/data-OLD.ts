export type Event = {
  title: string;
  year: string | number;
  desc: string;
  img: string;
  content?: React.ReactNode;
  subEvents: any[];
};

export const events = [
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
        img: ["/images/gallery/brainWave.JPG", "/images/gallery/brainWave.JPG"],
      },
      {
        name: "Blind Coding",
        desc: "A test of pure logic and syntax recall, where participants code without seeing their screen.",
        img: ["/images/gallery/blindCoding.JPG"],
      },
      {
        name: "Think Tank",
        desc: "A problem-solving event that challenges participants to devise innovative tech solutions.",
        img: ["/images/gallery/thinkTank.JPG", "/images/gallery/brainWave.JPG"],
      },
      {
        name: "Career Compass",
        desc: "Career Compass is an expert talk session featuring placed alumni and the TPO recruiting officer, offering insights, guidance, and real-world experiences to help students navigate their career paths.",
        img: ["/images/gallery/careerCompass.JPG"],
      },
      {
        name: "Hactober Fest",
        desc: "Hacktober Fest is a hands-on event that provides practical experience with Git and GitHub, helping participants contribute to open-source projects and enhance their version control skills.",
        img: ["/images/gallery/hactober.JPG"],
      },
      {
        name: "SIH Beyond the win!",
        desc: "SIH: Beyond the Win! is an expert talk session featuring SIH winners, where they share their journey, challenges, and strategies, inspiring participants to excel in Smart India Hackathon and beyond.",
        img: ["/images/gallery/SIHBeyond.HEIC"],
      },
    ],
  },
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
          "/images/gallery/brainWave.JPG",
          "/images/gallery/brainWave.JPG",
          "/images/gallery/brainWave.JPG",
          "/images/gallery/brainWave.JPG",
        ],
      },
      {
        name: "Scavenger Hunt",
        desc: "Scavenger Hunt is an exciting treasure hunt where participants decode clues, solve puzzles, and navigate challenges to uncover the final prize.",
        img: ["/images/gallery/brainWave.JPG", "/images/gallery/brainWave.JPG"],
      },
      {
        name: "Blind Coding",
        desc: "A test of pure logic and syntax recall, where participants code without seeing their screen.",
        img: ["/images/gallery/blindCoding.JPG"],
      },
      {
        name: "Think Tank",
        desc: "A problem-solving event that challenges participants to devise innovative tech solutions.",
        img: ["/images/gallery/thinkTank.JPG", "/images/gallery/brainWave.JPG"],
      },
      {
        name: "Career Compass",
        desc: "Career Compass is an expert talk session featuring placed alumni and the TPO recruiting officer, offering insights, guidance, and real-world experiences to help students navigate their career paths.",
        img: ["/images/gallery/careerCompass.JPG"],
      },
      {
        name: "Hactober Fest",
        desc: "Hacktober Fest is a hands-on event that provides practical experience with Git and GitHub, helping participants contribute to open-source projects and enhance their version control skills.",
        img: ["/images/gallery/hactober.JPG"],
      },
      {
        name: "SIH Beyond the win!",
        desc: "SIH: Beyond the Win! is an expert talk session featuring SIH winners, where they share their journey, challenges, and strategies, inspiring participants to excel in Smart India Hackathon and beyond.",
        img: ["/images/gallery/SIHBeyond.HEIC"],
      },
    ],
  },
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
        img: ["/images/gallery/brainWave.JPG", "/images/gallery/brainWave.JPG"],
      },
      {
        name: "Blind Coding",
        desc: "A test of pure logic and syntax recall, where participants code without seeing their screen.",
        img: ["/images/gallery/blindCoding.JPG"],
      },
      {
        name: "Think Tank",
        desc: "A problem-solving event that challenges participants to devise innovative tech solutions.",
        img: ["/images/gallery/thinkTank.JPG", "/images/gallery/brainWave.JPG"],
      },
      {
        name: "Career Compass",
        desc: "Career Compass is an expert talk session featuring placed alumni and the TPO recruiting officer, offering insights, guidance, and real-world experiences to help students navigate their career paths.",
        img: ["/images/gallery/careerCompass.JPG"],
      },
      {
        name: "Hactober Fest",
        desc: "Hacktober Fest is a hands-on event that provides practical experience with Git and GitHub, helping participants contribute to open-source projects and enhance their version control skills.",
        img: ["/images/gallery/hactober.JPG"],
      },
      {
        name: "SIH Beyond the win!",
        desc: "SIH: Beyond the Win! is an expert talk session featuring SIH winners, where they share their journey, challenges, and strategies, inspiring participants to excel in Smart India Hackathon and beyond.",
        img: ["/images/gallery/SIHBeyond.HEIC"],
      },
    ],
  },
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
        img: ["/images/gallery/brainWave.JPG", "/images/gallery/brainWave.JPG"],
      },
      {
        name: "Blind Coding",
        desc: "A test of pure logic and syntax recall, where participants code without seeing their screen.",
        img: ["/images/gallery/blindCoding.JPG"],
      },
      {
        name: "Think Tank",
        desc: "A problem-solving event that challenges participants to devise innovative tech solutions.",
        img: ["/images/gallery/thinkTank.JPG", "/images/gallery/brainWave.JPG"],
      },
      {
        name: "Career Compass",
        desc: "Career Compass is an expert talk session featuring placed alumni and the TPO recruiting officer, offering insights, guidance, and real-world experiences to help students navigate their career paths.",
        img: ["/images/gallery/careerCompass.JPG"],
      },
      {
        name: "Hactober Fest",
        desc: "Hacktober Fest is a hands-on event that provides practical experience with Git and GitHub, helping participants contribute to open-source projects and enhance their version control skills.",
        img: ["/images/gallery/hactober.JPG"],
      },
      {
        name: "SIH Beyond the win!",
        desc: "SIH: Beyond the Win! is an expert talk session featuring SIH winners, where they share their journey, challenges, and strategies, inspiring participants to excel in Smart India Hackathon and beyond.",
        img: ["/images/gallery/SIHBeyond.HEIC"],
      },
    ],
  },
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
        img: ["/images/gallery/brainWave.JPG", "/images/gallery/brainWave.JPG"],
      },
      {
        name: "Blind Coding",
        desc: "A test of pure logic and syntax recall, where participants code without seeing their screen.",
        img: ["/images/gallery/blindCoding.JPG"],
      },
      {
        name: "Think Tank",
        desc: "A problem-solving event that challenges participants to devise innovative tech solutions.",
        img: ["/images/gallery/thinkTank.JPG", "/images/gallery/brainWave.JPG"],
      },
      {
        name: "Career Compass",
        desc: "Career Compass is an expert talk session featuring placed alumni and the TPO recruiting officer, offering insights, guidance, and real-world experiences to help students navigate their career paths.",
        img: ["/images/gallery/careerCompass.JPG"],
      },
      {
        name: "Hactober Fest",
        desc: "Hacktober Fest is a hands-on event that provides practical experience with Git and GitHub, helping participants contribute to open-source projects and enhance their version control skills.",
        img: ["/images/gallery/hactober.JPG"],
      },
      {
        name: "SIH Beyond the win!",
        desc: "SIH: Beyond the Win! is an expert talk session featuring SIH winners, where they share their journey, challenges, and strategies, inspiring participants to excel in Smart India Hackathon and beyond.",
        img: ["/images/gallery/SIHBeyond.HEIC"],
      },
    ],
  },
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
        img: ["/images/gallery/brainWave.JPG", "/images/gallery/brainWave.JPG"],
      },
      {
        name: "Blind Coding",
        desc: "A test of pure logic and syntax recall, where participants code without seeing their screen.",
        img: ["/images/gallery/blindCoding.JPG"],
      },
      {
        name: "Think Tank",
        desc: "A problem-solving event that challenges participants to devise innovative tech solutions.",
        img: ["/images/gallery/thinkTank.JPG", "/images/gallery/brainWave.JPG"],
      },
      {
        name: "Career Compass",
        desc: "Career Compass is an expert talk session featuring placed alumni and the TPO recruiting officer, offering insights, guidance, and real-world experiences to help students navigate their career paths.",
        img: ["/images/gallery/careerCompass.JPG"],
      },
      {
        name: "Hactober Fest",
        desc: "Hacktober Fest is a hands-on event that provides practical experience with Git and GitHub, helping participants contribute to open-source projects and enhance their version control skills.",
        img: ["/images/gallery/hactober.JPG"],
      },
      {
        name: "SIH Beyond the win!",
        desc: "SIH: Beyond the Win! is an expert talk session featuring SIH winners, where they share their journey, challenges, and strategies, inspiring participants to excel in Smart India Hackathon and beyond.",
        img: ["/images/gallery/SIHBeyond.HEIC"],
      },
    ],
  },
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
        img: ["/images/gallery/brainWave.JPG", "/images/gallery/brainWave.JPG"],
      },
      {
        name: "Blind Coding",
        desc: "A test of pure logic and syntax recall, where participants code without seeing their screen.",
        img: ["/images/gallery/blindCoding.JPG"],
      },
      {
        name: "Think Tank",
        desc: "A problem-solving event that challenges participants to devise innovative tech solutions.",
        img: ["/images/gallery/thinkTank.JPG", "/images/gallery/brainWave.JPG"],
      },
      {
        name: "Career Compass",
        desc: "Career Compass is an expert talk session featuring placed alumni and the TPO recruiting officer, offering insights, guidance, and real-world experiences to help students navigate their career paths.",
        img: ["/images/gallery/careerCompass.JPG"],
      },
      {
        name: "Hactober Fest",
        desc: "Hacktober Fest is a hands-on event that provides practical experience with Git and GitHub, helping participants contribute to open-source projects and enhance their version control skills.",
        img: ["/images/gallery/hactober.JPG"],
      },
      {
        name: "SIH Beyond the win!",
        desc: "SIH: Beyond the Win! is an expert talk session featuring SIH winners, where they share their journey, challenges, and strategies, inspiring participants to excel in Smart India Hackathon and beyond.",
        img: ["/images/gallery/SIHBeyond.HEIC"],
      },
    ],
  },
];
