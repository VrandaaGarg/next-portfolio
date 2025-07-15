export interface Project {
  id: string;
  name: string;
  image: string;
  icon: React.ReactNode;
  description: string;
  techStack: string[];
  liveDemoUrl?: string;
  githubUrl: string;
}

export const projectsData: Project[] = [
  {
    id: "1",
    name: "AV Chat",
    image:
      "https://res.cloudinary.com/dyetf2h9n/image/upload/q_60/v1752582425/avchat_wixr8v.png", // Using placeholder image
    icon: "🤖",
    description:
      "Next-Generation AI Chat Platform-Experience intelligent conversations with 20+ advanced AI models. Fast, secure, and designed for the future of communication.",
    techStack: [
      "Tailwind CSS",
      "Next.js",
      "TypeScript",
      "Open Router",
      "Appwrite",
      "Zustand",
      "Runware",
    ],
    liveDemoUrl: "https://avchat.xyz",
    githubUrl: "https://github.com/cyberboyayush/AVChat",
  },
  {
    id: "2",
    name: "ResuMate",
    image:
      "https://res.cloudinary.com/dyetf2h9n/image/upload/q_60/v1752582425/resumate_n3e4wo.png", // Using placeholder image
    icon: "📄",
    description:
      "ResuMate is an AI-powered platform for building professional, ATS-friendly resumes with live editing, smart formatting, and real-time feedback.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "OpenAI API",
      "Firebase",
    ],
    liveDemoUrl: "https://smartbite.vrandagarg.in/",
    githubUrl: "https://github.com/VrandaaGarg/ResuMate",
  },
  {
    id: "3",
    name: "SmartBite",
    image: "https://smartbite.vrandagarg.in/banner.png", // Using placeholder image
    icon: "🍔",
    description:
      "SmartBite is a full-stack food ordering app for single restaurants, offering seamless menu browsing, order management, and customer tracking—all",
    techStack: ["React JS", "JavaScript", "Appwrite", "Email JS"],
    liveDemoUrl: "https://weather-dashboard-demo.vercel.app",
    githubUrl: "https://github.com/VrandaaGarg/smartbite",
  },
  {
    id: "4",
    name: "Arcadia",
    image:
      "https://res.cloudinary.com/dyetf2h9n/image/upload/q_60/v1752582425/arcadia_cq0ncn.png", // Using placeholder image
    icon: "🎮",
    description:
      "A social media platform with user profiles, posts, comments, likes, and real-time messaging functionality.",
    techStack: ["React JS", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    liveDemoUrl: "https://arcadia.vrandagarg.me/",
    githubUrl: "https://github.com/VrandaaGarg/Arcadia",
  },
  {
    id: "5",
    name: "SkillCompass",
    image:
      "https://res.cloudinary.com/dyetf2h9n/image/upload/q_60/v1752582426/skillcompass_ci3gur.png", // Using placeholder image
    icon: "🧭",
    description:
      "SkillCompass is an AI-powered learning platform that personalizes your learning journey with interactive modules, adaptive quizzes, and real-time feedback.",
    techStack: [
      "React JS",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "Appwrite",
      "Gemini API",
    ],
    liveDemoUrl: "https://skillcompass.glucon-d.xyz/",
    githubUrl: "https://github.com/Glucon-D/SkillCompass",
  },
  {
    id: "6",
    name: "FinWise",
    image:
      "https://res.cloudinary.com/dyetf2h9n/image/upload/q_60/v1752582425/finwise_obzcir.png", // Using placeholder image
    icon: "💰",
    description:
      "FinWise is an AI-powered investment platform that helps beginners understand and plan their investments based on risk, capital, age, and financial goals.",
    techStack: [
      "React JS",
      "JavaScript",
      "Appwrite",
      "Tailwind CSS",
      "Framer Motion",
      "Gemini API",
    ],
    liveDemoUrl: "https://finwise.ayush-sharma.in/",
    githubUrl: "https://github.com/Glucon-D/FinWise",
  },
  {
    id: "7",
    name: "Portfolio",
    image:
      "https://res.cloudinary.com/dyetf2h9n/image/upload/q_60/v1752582425/portfolio_qamgzu.png", // Using placeholder image
    icon: "🩷",
    description:
      "This portfolio showcases my skills, projects, and experiences. It features a modern design with smooth animations, responsive layout, and interactive elements.",
    techStack: [
      "Next JS",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide Icons",
    ],
    liveDemoUrl: "https://finwise.ayush-sharma.in/",
    githubUrl: "https://github.com/Glucon-D/FinWise",
  },
];
