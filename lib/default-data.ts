import type { PortfolioData } from "@/types/portfolio";

export const defaultPortfolioData: PortfolioData = {
  profile: {
    name: "Phan Nguyễn Anh Khoa",
    shortName: "Anh Khoa",
    role: "Full-stack Developer",
    email: "khoaanh662004@gmail.com",
    location: "Da Nang, Vietnam",
    availability: "Available",
    headline: "I build modern web products that are clear, fast and reliable.",
    introduction:
      "A Full-stack Developer focused on maintainable interfaces, secure APIs and practical business workflows.",
    aboutTitle: "Thoughtful engineering built around real users.",
    aboutParagraphs: [
      "I enjoy working across the stack—from creating intuitive interfaces to designing secure APIs and dependable database structures.",
      "My approach is to understand the workflow, reduce unnecessary complexity and build software that remains easy to extend.",
    ],
    focus: "Next.js · Spring Boot",
    socials: {
      github: "https://github.com/akhoa6204",
      linkedin: "https://www.linkedin.com/in/anh-khoa-407b6a32a/",
    },
    avatarUrl:
      "https://res.cloudinary.com/dfyzypspd/image/upload/v1784307334/37C3D040-D521-4E71-8B7C-BDF65CEF278F_xdeabp.jpg",
  },
  projects: [
    {
      id: "booking-hotel",
      title: "Hotel Booking Management System",
      subtitle: "Full-stack hospitality platform",
      description:
        "A hotel operations system covering bookings, authentication, payments, room workflows, promotions and role-based management.",
      href: "https://github.com/akhoa6204/booking-hotel",
      tags: [
        "Next.js",
        "Node.js",
        "TypeScript",
        "Prisma",
        "MySQL",
        "JWT",
        "RBAC",
      ],
      accent: "indigo",
      order: 1,
      visible: true,
    },
    {
      id: "e-commerce-system",
      title: "E-commerce System",
      subtitle: "Electronic sales management application",
      description:
        "A web commerce application focused on product discovery, shopping flows and practical business operations.",
      href: "https://github.com/akhoa6204/e-commerce-system",
      tags: ["JavaScript", "Python", "HTML", "CSS"],
      accent: "cyan",
      order: 2,
      visible: true,
    },
  ],
  skills: [
    {
      id: "frontend",
      title: "Frontend",
      detail:
        "React, Next.js, TypeScript, Material UI, Redux Toolkit, TanStack Query",
      icon: "code",
      order: 1,
    },
    {
      id: "backend",
      title: "Backend",
      detail:
        "Node.js, Express, NestJS, Java, Spring Boot, REST APIs, JWT, RBAC",
      icon: "server",
      order: 2,
    },
    {
      id: "database",
      title: "Database",
      detail: "MySQL, Prisma ORM and relational data modelling",
      icon: "database",
      order: 3,
    },
    {
      id: "tools",
      title: "Tools",
      detail: "Git, GitHub, Docker, Swagger, Postman and Figma",
      icon: "layers",
      order: 4,
    },
  ],
  technologies: [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "Sass",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
      name: "Spring Boot",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    },
  ],
  career: {
    heading: "Career journey, education and credentials.",
    description:
      "A concise overview of my professional experience, academic background and certifications.",

    experience: [
      {
        id: "xinkgroup",
        period: "2024",
        duration: "8 months",
        organization: "XinkGroup JSC",
        title: "Software Engineer Intern",
        details: ["React", "Next.js", "Node.js", "Odoo"],
        order: 1,
        visible: true,
      },
    ],

    education: [
      {
        id: "due",
        period: "2021 — 2025",
        organization: "University of Economics — The University of Danang",
        title: "Bachelor of Management Information Systems",
        details: ["GPA 3.23 / 4.0"],
        order: 1,
        visible: true,
      },
    ],

    certificates: [
      {
        id: "toeic",
        period: "2023",
        organization: "IIG Vietnam",
        title: "TOEIC Listening & Reading",
        details: ["Score 590"],
        order: 1,
        visible: true,
      },
    ],
  },
};
