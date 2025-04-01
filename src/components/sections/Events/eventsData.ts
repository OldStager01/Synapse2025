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
      "Code under pressure without seeing your work. A challenge to test your logic and ability to solve problems under time pressure.",
    imageUrl:
      "https://media.gettyimages.com/id/669775712/photo/teacher-giving-an-it-class-at-school-to-a-group-of-students.jpg?s=612x612&w=gi&k=20&c=uEyU0WYvbAVEVP7PTQs6nMKuS2AU4DQYsj_C6t9UO4I=",
    stoneColor: "#ED1D24", // Reality Stone (red)
  },
  {
    title: "Bid4Code",
    date: "March 11, 2025",
    description:
      "Place bids on coding challenges. Speed, strategy, and precision are key in this thrilling battle of wits and skills.",
    imageUrl:
      "https://media.gettyimages.com/id/669775712/photo/teacher-giving-an-it-class-at-school-to-a-group-of-students.jpg?s=612x612&w=gi&k=20&c=uEyU0WYvbAVEVP7PTQs6nMKuS2AU4DQYsj_C6t9UO4I=",
    stoneColor: "#13C2C2", // Space Stone (blue)
  },
  {
    title: "Scavenger Hunt",
    date: "March 12, 2025",
    description:
      "Race through technical clues and challenges in this exciting treasure hunt. The faster you solve, the closer you are to victory.",
    imageUrl:
      "https://media.gettyimages.com/id/669775712/photo/teacher-giving-an-it-class-at-school-to-a-group-of-students.jpg?s=612x612&w=gi&k=20&c=uEyU0WYvbAVEVP7PTQs6nMKuS2AU4DQYsj_C6t9UO4I=",
    stoneColor: "#E6C566", // Mind Stone (gold)
  },
  {
    title: "Think Tank (Presentation)",
    date: "March 13, 2025",
    description:
      "Use your strategic thinking and creativity to develop an innovative solution in this presentation challenge. Think outside the box!",
    imageUrl:
      "https://media.gettyimages.com/id/669775712/photo/teacher-giving-an-it-class-at-school-to-a-group-of-students.jpg?s=612x612&w=gi&k=20&c=uEyU0WYvbAVEVP7PTQs6nMKuS2AU4DQYsj_C6t9UO4I=",
    stoneColor: "#A08A3C", // Soul Stone (dark gold)
  },
  {
    title: "Techy Buzz",
    date: "March 14, 2025",
    description:
      "Test your knowledge and creativity with challenging questions that push the boundaries of your intellect and problem-solving skills.",
    imageUrl:
      "https://media.gettyimages.com/id/669775712/photo/teacher-giving-an-it-class-at-school-to-a-group-of-students.jpg?s=612x612&w=gi&k=20&c=uEyU0WYvbAVEVP7PTQs6nMKuS2AU4DQYsj_C6t9UO4I=",
    stoneColor: "#5E17EB", // Power Stone (purple)
  },
];

export default events;
