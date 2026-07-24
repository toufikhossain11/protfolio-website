// ─────────────────────────────────────────────────────────────────────────
// SITE CONFIG — edit everything about the portfolio's content from here.
// ─────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Your Name",
  initials: "YN",
  title: "MERN Stack Developer",
  tagline: "I build fast, accessible, full-stack web products.",
  description:
    "MERN Stack Developer specializing in Next.js, React, Node.js and TypeScript. I design and ship clean, performant, production-ready web applications end to end.",
  url: "https://your-domain.com",
  email: "you@example.com",
  phone: "+91 00000 00000",
  address: "Remote · Available Worldwide",
  location: "India",
  resumeUrl: "/resume.pdf",
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
  { name: "GitHub", href: "https://github.com/yourusername", icon: "github" },
  { name: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: "linkedin" },
  { name: "WhatsApp", href: "https://wa.me/910000000000", icon: "whatsapp" },
  { name: "Discord", href: "https://discord.com/users/yourusername", icon: "discord" },
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
    name: "ShopWave — E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product catalog, cart, checkout, and an admin dashboard for inventory and order management.",
    image: "/images/projects/project-1.svg",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS", "Better Auth"],
    features: [
      "Secure authentication & role-based access",
      "Stripe-ready checkout flow",
      "Real-time inventory updates",
      "Admin analytics dashboard",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/shopwave",
  },
  {
    name: "TaskFlow — Team Productivity App",
    description:
      "A Kanban-style project management tool with real-time collaboration, drag-and-drop boards, and deadline tracking.",
    image: "/images/projects/project-2.svg",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase"],
    features: [
      "Drag-and-drop Kanban boards",
      "Real-time multi-user sync",
      "Email deadline reminders",
      "Team workspace permissions",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/taskflow",
  },
  {
    name: "DevBlog — Markdown Publishing Platform",
    description:
      "A developer-focused blogging platform with markdown/MDX support, code syntax highlighting, and SEO-optimized article pages.",
    image: "/images/projects/project-3.svg",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind CSS"],
    features: [
      "MDX-powered writing experience",
      "Syntax-highlighted code blocks",
      "Full SEO metadata per post",
      "Reading time & tag filtering",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/devblog",
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
    place: "Your Institute Name",
    description:
      "6-month intensive program covering the MERN stack, TypeScript, authentication, and modern deployment workflows.",
  },
  {
    period: "2021 — 2025",
    title: "Bachelor's Degree (placeholder)",
    place: "Your University Name",
    description:
      "Placeholder entry — replace with your actual degree, major, and achievements.",
  },
  {
    period: "2019 — 2021",
    title: "Higher Secondary Education (placeholder)",
    place: "Your School Name",
    description: "Placeholder entry — replace with your actual details.",
  },
];
