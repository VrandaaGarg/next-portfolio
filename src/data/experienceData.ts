export interface Experience {
  id?: string;
  name: string;
  company?: string;
  role: string;
  description: string;
  duration: string;
  technologies: string[];
  logo: string;
  left: boolean;
  type: "achievement" | "experience" | "education";
  iconType: "trophy" | "medal" | "code" | "academic";
}

export const experienceData: Experience[] = [
  {
    id: "1",
    name: "Hackerzstreet 3.0",
    role: "Co-Lead",
    company: "IEEE CS MUJ",
    duration: "April 2025",
    description:
      "We built a web app that guides students on personalized learning paths using AI-driven quizzes, flashcards, and adaptive content tailored to their skills, interests, and goals.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Gemini API",
      "Groq API",
      "Appwrite",
    ],
    logo: "https://res.cloudinary.com/dyetf2h9n/image/upload/q_60/v1752582423/hackerzstreet_pvfr38.png",
    left: true,
    type: "achievement",
    iconType: "trophy",
  },
  {
    id: "2",
    name: "Webmaster",
    role: "Frontend Lead",
    company: "Randomize",
    duration: "June 2024 - April 2025",
    description:
      "As Webmaster at Randomize, I lead frontend workshops and manage the club website, keeping our community's online presence seamless and up to date.",
    technologies: ["React", "Tailwind CSS", "Javascript", "Github"],
    logo: "https://vrandagarg.in/randomize.png",
    left: false,
    type: "experience",
    iconType: "code",
  },
  {
    id: "3",
    name: "BrandIT ",
    role: "3rd Position",
    company: "IEEE WIE MUJ",
    duration: "July 2024",
    description:
      "I secured 3rd position in the BrandIT competition organized by IEEE, where I developed a website named EvoVatika showcasing modern web development skills.",
    technologies: ["React", "Tailwind CSS", "Javascript", "HTML", "CSS"],
    logo: "https://res.cloudinary.com/dyetf2h9n/image/upload/q_60/v1752582424/brandit_dqvxcn.png",
    left: true,
    type: "achievement",
    iconType: "medal",
  },
  // {
  //   id: "4",
  //   name: "Certificate of Excellence",
  //   role: "Academic Achievement",
  //   company: "Manipal University Jaipur",
  //   duration: "April 2025",
  //   description:
  //     "I was awarded the Certificate of Excellence for securing 9.6 GPA in my 3rd semester of B.Tech in Computer Science and Engineering.",
  //   technologies: [
  //     "Data Structures",
  //     "Algorithms",
  //     "Database Design",
  //     "Software Engineering",
  //   ],
  //   logo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=100&h=100&fit=crop&crop=center",
  //   left: false,
  //   type: "education",
  //   iconType: "academic",
  // },
];
