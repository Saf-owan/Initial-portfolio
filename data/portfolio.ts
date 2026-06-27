import {
  Award,
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  Github,
  Globe,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Server,
  TerminalSquare,
  Trophy
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
};

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export type Achievement = {
  title: string;
  description: string;
  type: "Competition" | "Certification" | "Research" | "Academic Project";
  icon: LucideIcon;
};

export const personalInfo = {
  name: "Md. Samiuzzaman Safowan",
  title: "Software Engineer | AI Researcher | Full Stack Developer",
  intro:
    "I build practical software systems that connect thoughtful product engineering with AI-driven intelligence. My work spans full stack applications, machine learning research, IoT prototypes, and academic projects designed to solve real problems with clean, reliable technology.",
  photo: "/profile/safowan.jpeg",
  email: "msamiuzzaman2410086@bscse.uiu.ac.bd",
  linkedinLabel: "Muhammad Samiuzzaman Safowan",
  linkedinUrl: "https://www.linkedin.com/in/muhammad-samiuzzaman-safowan-021650328/",
  socials: [
    { label: "GitHub", href: "https://github.com/", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-samiuzzaman-safowan-021650328/", icon: Linkedin },
    { label: "Email", href: "mailto:samiuzzamansafowan1111@gmail.com", icon: Mail }
  ]
};

export const navigation = [
  { label: "Introduction", href: "#introduction" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" }
];

export const projects: Project[] = [
  {
    title: "AI Research Assistant",
    description: "A full stack assistant for collecting research notes, summarizing papers, and organizing model experiment insights.",
    image: "/projects/ai-research-assistant.svg",
    technologies: ["Next.js", "TypeScript", "Python", "OpenAI API"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com"
  },
  {
    title: "Smart IoT Monitoring System",
    description: "An IoT dashboard that visualizes sensor data, device states, and real-time environmental alerts.",
    image: "/projects/iot-monitoring.svg",
    technologies: ["React", "Node.js", "MQTT", "MongoDB"],
    githubUrl: "https://github.com/"
  },
  {
    title: "Academic Project Portal",
    description: "A responsive project management portal for tracking academic milestones, submissions, and team collaboration.",
    image: "/projects/project-portal.svg",
    technologies: ["Next.js", "Tailwind CSS", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com"
  }
];

export const skillCategories: SkillCategory[] = [
  { title: "Programming Languages", icon: Code2, skills: ["TypeScript", "JavaScript", "Python", "C", "C++", "Java"] },
  { title: "Frontend", icon: Layers3, skills: ["React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"] },
  { title: "Backend", icon: Server, skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "API Design"] },
  { title: "Database", icon: Database, skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Prisma"] },
  { title: "AI & Machine Learning", icon: BrainCircuit, skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Research"] },
  { title: "IoT", icon: Cpu, skills: ["Arduino", "ESP32", "Sensors", "MQTT", "Embedded Systems"] },
  { title: "Tools", icon: TerminalSquare, skills: ["Git", "GitHub", "Docker", "VS Code", "Linux", "Postman"] }
];

export const achievements: Achievement[] = [
  { title: "Programming Competitions", description: "Participated in competitive programming and problem-solving contests, strengthening algorithmic thinking and implementation speed.", type: "Competition", icon: Trophy },
  { title: "Technical Certifications", description: "Completed certifications and structured learning in web development, software engineering, and AI fundamentals.", type: "Certification", icon: Award },
  { title: "AI Research Work", description: "Explored applied AI topics including model evaluation, data processing, and intelligent software workflows.", type: "Research", icon: Bot },
  { title: "Major Academic Projects", description: "Built academic software and IoT systems with practical documentation, demonstrations, and user-focused interfaces.", type: "Academic Project", icon: GraduationCap }
];

export const externalLinks = {
  githubIcon: Github,
  liveIcon: Globe
};
