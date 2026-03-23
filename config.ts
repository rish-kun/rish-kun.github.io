export const config = {
  name: "Rishit",
  fullName: "Rishit Verma",
  title: "CS Sophomore @ BITS Pilani",
  tagline: "Exploring agent orchestration and MLOps.",
  heroDescription: "Backend and DevOps at DVM. Building for Oasis & Apogee.",
  currentlyDescription:
    "Exploring agentic frameworks and LLM fine-tuning at university. Open to internships.",
  email: "mail.rishit.verma@gmail.com",
  resumePath: "/resume.pdf",
  avatar: {
    src: "/avatar.jpeg",
    alt: "Rishit Verma",
  },
  location: {
    current: "BITS Pilani, Rajasthan",
    hometown: "Tokyo, Japan",
  },
  bio: {
    short: "CS Sophomore · BITS Pilani · Backend · DevOps · ML",
    long: [
      "I'm a second-year CS student at BITS Pilani, currently based on campus in Rajasthan. I grew up in Tokyo, Japan, where my family still lives.",
      "At BITS, I work with DVM (Department of Visual Media) on backend development for the Oasis and Apogee festival platforms using Django, with a focus on security and infrastructure. I also contribute to the Wall Street Club's News Analyser — a Django-based financial news sentiment analysis platform.",
      "My interests span backend systems, DevOps, and applied ML. I'm particularly drawn to distributed systems and making ML pipelines production-worthy.",
      "Outside of tech: fitness (running, gym), cooking, travel planning, music discovery, and hunting down deals on tech gadgets and clothes.",
    ],
  },
  skills: [
    "Python",
    "Django",
    "Go",
    "Docker",
    "Kubernetes",
    "Linux",
    "PostgreSQL",
    "PyTorch",
    "LangChain",
    "CI/CD",
  ],
  heroSkills: ["Backend", "DevOps", "AI"],
  social: {
    github: {
      label: "GitHub",
      href: "https://github.com/rish-kun",
      icon: "github",
    },
    linkedin: {
      label: "LinkedIn",
      href: "https://linkedin.com/in/rish-kun",
      icon: "linkedin",
    },
    twitter: {
      label: "X / Twitter",
      href: "https://x.com",
      icon: "twitter",
    },
  },
  projects: [
    {
      id: 1,
      title: "Project One",
      shortDesc:
        "A short description of what this project does and its impact.",
      longDesc:
        "A longer write-up goes here — what problem it solves, how it works under the hood, and what you learned. This can cover architecture decisions, scale, and interesting challenges you ran into.",
      tags: ["Python", "Docker"],
      github: "https://github.com/rish-kun",
      demo: null,
      year: "2025",
    },
    {
      id: 2,
      title: "Project Two",
      shortDesc:
        "A short description of what this project does and its impact.",
      longDesc:
        "This project tackles distributed workload orchestration at scale. Built with Go and deployed on Kubernetes, it handles service discovery, rolling deployments, and automated rollback on failure.",
      tags: ["Go", "Kubernetes"],
      github: "https://github.com/rish-kun",
      demo: null,
      year: "2025",
    },
    {
      id: 3,
      title: "Project Three",
      shortDesc:
        "A short description of what this project does and its impact.",
      longDesc:
        "Fine-tuned a language model on domain-specific data using PyTorch and LoRA adapters. Explored quantisation for inference efficiency and built an agentic pipeline on top of the base model.",
      tags: ["ML", "PyTorch"],
      github: "https://github.com/rish-kun",
      demo: null,
      year: "2024",
    },
  ],
};
