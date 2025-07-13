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
    name: "E-Commerce Platform",
    image: "https://smartbite.vrandagarg.in/banner.png", // Using placeholder image
    icon: "🛒",
    description:
      "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Stripe",
    ],
    liveDemoUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/username/ecommerce-platform",
  },
  {
    id: "2",
    name: "Task Management App",
    image: "https://smartbite.vrandagarg.in/banner.png", // Using placeholder image
    icon: "📋",
    description:
      "A collaborative task management application with real-time updates, team collaboration, and project tracking features.",
    techStack: ["React", "TypeScript", "Firebase", "Material-UI", "Socket.io"],
    liveDemoUrl: "https://taskmanager-demo.vercel.app",
    githubUrl: "https://github.com/username/task-manager",
  },
  {
    id: "3",
    name: "Weather Dashboard",
    image: "https://smartbite.vrandagarg.in/banner.png", // Using placeholder image
    icon: "🌤️",
    description:
      "A responsive weather dashboard with location-based forecasts, interactive maps, and weather alerts.",
    techStack: ["Vue.js", "JavaScript", "OpenWeather API", "Chart.js", "CSS3"],
    liveDemoUrl: "https://weather-dashboard-demo.vercel.app",
    githubUrl: "https://github.com/username/weather-dashboard",
  },
  {
    id: "4",
    name: "Social Media App",
    image: "https://smartbite.vrandagarg.in/banner.png", // Using placeholder image
    icon: "📱",
    description:
      "A social media platform with user profiles, posts, comments, likes, and real-time messaging functionality.",
    techStack: [
      "React Native",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Redis",
    ],
    liveDemoUrl: "https://social-app-demo.vercel.app",
    githubUrl: "https://github.com/username/social-media-app",
  },
  {
    id: "5",
    name: "Portfolio Website",
    image: "https://smartbite.vrandagarg.in/banner.png", // Using placeholder image
    icon: "💼",
    description:
      "A modern portfolio website showcasing projects, skills, and experience with smooth animations and responsive design.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],
    liveDemoUrl: "https://portfolio-demo.vercel.app",
    githubUrl: "https://github.com/username/portfolio",
  },
  {
    id: "6",
    name: "Blog Platform",
    image: "https://smartbite.vrandagarg.in/banner.png", // Using placeholder image
    icon: "📝",
    description:
      "A full-featured blog platform with markdown support, SEO optimization, and content management system.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Sanity CMS",
      "Tailwind CSS",
      "Vercel",
    ],
    liveDemoUrl: "https://blog-platform-demo.vercel.app",
    githubUrl: "https://github.com/username/blog-platform",
  },
];
