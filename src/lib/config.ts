// ─────────────────────────────────────────────────────────────────────────
// SITE CONFIG — edit everything about the portfolio's content from here.
// ─────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Toufik Hossain",
  initials: "Toufik",
  title: "MERN Stack Developer",
  tagline: "I build fast, accessible, full-stack web products.",
  description:
    "MERN Stack Developer specializing in Next.js, React, Node.js and TypeScript. I design and ship clean, performant, production-ready web applications end to end.",
  url: "https://your-domain.com",
  email: "toufikhossain546@gmail.com",
  phone: "+088 01914975286",
  address: "Remote · Available Worldwide",
  location: "Khulna, Bangladesh",
  resumeUrl: "/Toufik _Hossain_Resume.pdf",
  ogImage: "/images/og.png",
  keywords: [
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Full Stack Developer",
    "TypeScript",
    "Node.js Developer",
    "Portfolio",
  ],
};

export const socialLinks = [
  { name: "GitHub", href: "https://github.com/toufikhossain11", icon: "github" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/toufik-hossain-779b62201/", icon: "linkedin" },
  { name: "WhatsApp", href: "https://wa.me/01914975286", icon: "whatsapp" },
  { name: "Discord", href: "https://discord.com/users/toufikhossain0619", icon: "discord" },
] as const;

export const navLinks = [
  { name: "Profile", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
] as const;

export const heroStats = [
  { label: "Projects Completed", value: 12, suffix: "+" },
  { label: "Technologies Learned", value: 15, suffix: "+" },
  { label: "Happy Clients", value: 8, suffix: "+" },
  { label: "Years of Learning", value: 1, suffix: "+" },
];

export const expertise = [
  "Next.js",
  "React.js",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "MongoDB",
];

export const aboutHighlights = [
  {
    title: "Full-Stack Delivery",
    description:
      "Comfortable across the whole MERN stack — from schema design to pixel-perfect, responsive UI.",
  },
  {
    title: "Problem Solver",
    description:
      "I enjoy breaking down ambiguous problems into clean, maintainable, well-tested solutions.",
  },
  {
    title: "Always Learning",
    description:
      "Currently exploring AI-assisted development workflows to ship faster without cutting corners.",
  },
];

export type Skill = { name: string; icon: string };

export const skills: { category: string; items: Skill[] }[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
      { name: "Tailwind CSS", icon: "tailwindcss" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express.js", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Better Auth", icon: "auth0" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "VS Code", icon: "visualstudiocode" },
      { name: "Postman", icon: "postman" },
      { name: "Figma", icon: "figma" },
    ],
  },
  {
    category: "AI Tools",
    items: [
      { name: "Claude", icon: "anthropic" },
      { name: "ChatGPT", icon: "openai" },
      { name: "GitHub Copilot", icon: "githubcopilot" },
      { name: "Cursor", icon: "cursor" },
    ],
  },
];

export type Project = {
  name: string;
  description: string;
  image: string;
  tech: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    name: "TravelGo — Travel Booking Platform",
    description:
      "A full-featured travel platform with travel catalog, details, services, and an admin dashboard for inventory and order management.",
    image: "/images/projects/project-1.png",
    tech: ["Next.js", "TypeScript","Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Better Auth"],
    features: [
      "Secure authentication & role-based access",
      "Stripe-ready checkout flow",
      "Real-time inventory updates",
      "Admin analytics dashboard",
    ],
    liveUrl: "https://travelgo-client-teal.vercel.app/",
    githubUrl: "https://github.com/toufikhossain11/travelgo-client",
  },
  {
    name: "DocapPoint — Doctor Appointment Booking System",
    description:
      "A doctor appointment booking system with real-time availability, multi-user support, and email notifications for appointments and deadlines.",
    image: "/images/projects/project-2.png",
    tech: ["React.js","JavaScript", "Node.js", "Express.js", "MongoDB", "Firebase"],
    features: [
      "Drag-and-drop Kanban boards",
      "Real-time multi-user sync",
      "Email deadline reminders",
      "Team workspace permissions",
    ],
    liveUrl: "https://assignment-09-docappoint-f97v.vercel.app/",
    githubUrl: "https://github.com/toufikhossain11/assignment-09-docappoint",
  },
  {
    name: "HavenFlow — A Property Rental Platform",
    description:
      "A property rental platform with a modern, responsive UI, MDX-powered content, and full SEO metadata for each listing.",
    image: "/images/projects/project-3.png",
    tech: ["Next.js", "TypeScript", 'Node.js', "MongoDB", "Tailwind CSS"],
    features: [
      "MDX-powered writing experience",
      "Syntax-highlighted code blocks",
      "Full SEO metadata per post",
      "Reading time & tag filtering",
    ],
    liveUrl: "https://property-rental-client-sand.vercel.app/home",
    githubUrl: "https://github.com/toufikhossain11/assignment-10-havenFlow-client",
  },
];

export type EducationItem = {
  period: string;
  title: string;
  place: string;
  description: string;
};

export const education: EducationItem[] = [
  {
    period: "2025 — 2026",
    title: "Full Stack Web Development Course",
    place: "Programming Hero",
    description:
      "6-month intensive program covering the MERN stack, TypeScript, authentication, and modern deployment workflows.",
  },
  {
    period: "2022 — 2023",
    title: "Master's Degree (Political Science)",
    place: "National University",
    description: "Placeholder entry — replace with your actual details.",
  },
  {
    period: "2018 — 2022",
    title: "Bachelor's Degree (Political Science)",
    place: "National University",
    description:
      "Placeholder entry — replace with your actual degree, major, and achievements.",
  },
  
];
