export type eventType = {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  stoneColor?: string;
};
const events: eventType[] = [
  {
    title: "Blind Coding",
    date: "March 10, 2025",
    description:
      "Test your coding skills—without seeing your code! A challenge for true developers.",
    imageUrl:
      "https://media.gettyimages.com/id/669775712/photo/teacher-giving-an-it-class-at-school-to-a-group-of-students.jpg?s=612x612&w=gi&k=20&c=uEyU0WYvbAVEVP7PTQs6nMKuS2AU4DQYsj_C6t9UO4I=",
    stoneColor: "#ED1D24", // Reality Stone (red)
  },
  {
    title: "Bid4Code",
    date: "March 11, 2025",
    description:
      "An auction-style coding contest where you bid on problem statements before solving them.",
    imageUrl:
      "https://media.gettyimages.com/id/669775712/photo/teacher-giving-an-it-class-at-school-to-a-group-of-students.jpg?s=612x612&w=gi&k=20&c=uEyU0WYvbAVEVP7PTQs6nMKuS2AU4DQYsj_C6t9UO4I=",
    stoneColor: "#13C2C2", // Space Stone (blue)
  },
  {
    title: "Tech Treasure Hunt",
    date: "March 12, 2025",
    description:
      "Solve technical clues and race to the finish in this thrilling treasure hunt.",
    imageUrl:
      "https://media.gettyimages.com/id/669775712/photo/teacher-giving-an-it-class-at-school-to-a-group-of-students.jpg?s=612x612&w=gi&k=20&c=uEyU0WYvbAVEVP7PTQs6nMKuS2AU4DQYsj_C6t9UO4I=",
    stoneColor: "#E6C566", // Mind Stone (gold)
  },
  {
    title: "Think Tank (Presentation)",
    date: "March 13, 2025",
    description:
      "Present innovative ideas and compete for the best tech pitch award.",
    imageUrl:
      "https://media.gettyimages.com/id/669775712/photo/teacher-giving-an-it-class-at-school-to-a-group-of-students.jpg?s=612x612&w=gi&k=20&c=uEyU0WYvbAVEVP7PTQs6nMKuS2AU4DQYsj_C6t9UO4I=",
    stoneColor: "#A08A3C", // Soul Stone (dark gold)
  },
  {
    title: "Tech Quiz",
    date: "March 14, 2025",
    description: "A rapid-fire quiz covering the latest and greatest in tech.",
    imageUrl:
      "https://media.gettyimages.com/id/669775712/photo/teacher-giving-an-it-class-at-school-to-a-group-of-students.jpg?s=612x612&w=gi&k=20&c=uEyU0WYvbAVEVP7PTQs6nMKuS2AU4DQYsj_C6t9UO4I=",
    stoneColor: "#5E17EB", // Power Stone (purple)
  },
];

export default events;
