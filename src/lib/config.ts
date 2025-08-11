import {
  type Icon,
  Github,
  Linkedin,
  Mail,
  Code,
  Server,
  Palette,
  Cpu,
} from 'lucide-react';

export type Skill = {
  name: string;
  icon: Icon;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
};

export const config = {
  name: "Jane Doe",
  title: "Creative Developer & AI Enthusiast",
  email: "jane.doe@email.com",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      name: "Email",
      url: "mailto:jane.doe@email.com",
      icon: Mail,
    },
  ],
  bio: "A passionate developer with a love for creating futuristic and intuitive user experiences. I thrive at the intersection of design, technology, and artificial intelligence, constantly exploring new ways to build a better, more connected digital world. My journey in tech is driven by a curiosity for what's possible and a desire to turn complex problems into elegant solutions.",
  skills: [
    { name: "React / Next.js", icon: Code },
    { name: "Node.js", icon: Server },
    { name: "UI/UX Design", icon: Palette },
    { name: "GenAI / LLMs", icon: Cpu },
    { name: "TypeScript", icon: Code },
    { name: "GraphQL", icon: Server },
  ] as Skill[],
  projects: [
    {
      title: "Project Cyberspace",
      description: "An immersive 3D data visualization platform built with React and Three.js, bringing complex datasets to life.",
      image: "https://placehold.co/600x400.png",
      tags: ["React", "Three.js", "Data Visualization", "WebSockets"],
    },
    {
      title: "AI Chatbot Assistant",
      description: "A conversational AI assistant integrated into a customer service portal, powered by Google's Gemini.",
      image: "https://placehold.co/600x400.png",
      tags: ["Next.js", "GenAI", "Tailwind CSS", "Firebase"],
    },
    {
      title: "Holographic UI Kit",
      description: "A component library for building futuristic, holographic-style user interfaces with CSS and JavaScript.",
      image: "https://placehold.co/600x400.png",
      tags: ["CSS", "JavaScript", "UI/UX"],
    },
  ] as Project[],
};
