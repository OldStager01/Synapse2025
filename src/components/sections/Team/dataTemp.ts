export type TeamMember = {
  name: string;
  position: string;
  image: string;
};

export const president: TeamMember = {
  name: "Tony Stark",
  position: "President",
  image: "/placeholder.svg?height=400&width=300",
};

export const vicePresident: TeamMember = {
  name: "Steve Rogers",
  position: "Vice President",
  image: "/placeholder.svg?height=400&width=300",
};

export const seniorCommittee: TeamMember[] = [
  {
    name: "Tanmay Tambat",
    position: "Tech Head",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
  {
    name: "Thor Odinson",
    position: "Senior Committee",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
  {
    name: "Bruce Banner",
    position: "Senior Committee",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
  {
    name: "Clint Barton",
    position: "Senior Committee",
    image:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
  },
];

export const juniorCommittee: TeamMember[] = [
  {
    name: "Wanda Maximoff",
    position: "Junior Committee",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Vision",
    position: "Junior Committee",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Sam Wilson",
    position: "Junior Committee",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Bucky Barnes",
    position: "Junior Committee",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "Peter Parker",
    position: "Junior Committee",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    name: "T'Challa",
    position: "Junior Committee",
    image: "/placeholder.svg?height=400&width=300",
  },
];
