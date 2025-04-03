export type eventType = {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  stoneColor?: string;
  registerUrl?: string;
};
const events: eventType[] = [
  {
    title: "Blind Coding",
    date: "March 10, 2025",
    description:
      "Code under pressure without seeing your work. A challenge to test your logic and ability to solve problems under time pressure.",
    imageUrl: "/images/events/blindCoding.jpeg",
    stoneColor: "#ED1D24", // Reality Stone (red)
    registerUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSek-MhfmVB9QwLqeB21SNN0UTuj4bGXCJrZY1bLI8SQjj28dg/viewform",
  },
  {
    title: "Bid4Code",
    date: "March 11, 2025",
    description:
      "Place bids on coding challenges. Speed, strategy, and precision are key in this thrilling battle of wits and skills.",
    imageUrl: "/images/events/bidCode.jpeg",
    stoneColor: "#13C2C2", // Space Stone (blue)
    registerUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSc2WBTTjTjDl6aenmdiEqQ8N7FqpjI5Fs1U25hgFQJBynGmsQ/viewform",
  },
  {
    title: "Scavenger Hunt",
    date: "March 12, 2025",
    description:
      "Race through technical clues and challenges in this exciting treasure hunt. The faster you solve, the closer you are to victory.",
    imageUrl: "/images/events/scavengerHunt.jpg",
    stoneColor: "#E6C566", // Mind Stone (gold)
    registerUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLScI1dA0EGbR9sXMacE35-5amQoPjGKAHcaRqtCo6YlHcJwx9A/viewform",
  },
  {
    title: "Think Tank (Presentation)",
    date: "March 13, 2025",
    description:
      "Use your strategic thinking and creativity to develop an innovative solution in this presentation challenge. Think outside the box!",
    imageUrl: "/images/events/thinkTank.jpeg",
    stoneColor: "#A08A3C", // Soul Stone (dark gold)
    registerUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdKmuEn61szVRNMWrtjO97mfYTwY9tr5RYPJF_eO5702O5DlQ/viewform",
  },
  {
    title: "Techy Buzz",
    date: "March 14, 2025",
    description:
      "Test your knowledge and creativity with challenging questions that push the boundaries of your intellect and problem-solving skills.",
    imageUrl: "/images/events/techyBuzz.jpeg",
    stoneColor: "#5E17EB", // Power Stone (purple)
    registerUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSevsOe3A6stJEWbXYIjnBQD77pP94q-_NNfiFpZzYbd44I7Nw/viewform",
  },
];

export default events;
