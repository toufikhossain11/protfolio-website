
"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaGithub, FaLinkedin, FaFacebook, FaEnvelope,
  FaMapMarkerAlt, FaPhoneAlt, FaExternalLinkAlt,
} from "react-icons/fa";

const frontendSkills = [
  { name: "HTML5",        level: "92%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3",         level: "88%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript",   level: "80%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React",        level: "75%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js",      level: "72%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Tailwind CSS", level: "90%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
];

const backendSkills = [
  { name: "Node.js",      level: "68%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js",   level: "65%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB",      level: "65%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase",     level: "60%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "REST API",     level: "70%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Git & GitHub", level: "70%", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
];

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Modern full responsive shopping platform with beautiful UI and smooth UX.",
    image: "https://i.ibb.co.com/k23My9nm/Screenshot-2026-05-24-163415.png",
    tags: ["Next.js", "Tailwind", "MongoDB",'Node.js'], live: "https://assignment-08-suncart.vercel.app/", github: "https://github.com/toufikhossain11/assignment-08-suncart",
  },
  {
    title: "Job Tracking Website",
    desc: "Analytics dashboard with charts, tables and futuristic glassmorphism design.",
    image: "https://i.ibb.co.com/nND3GZdD/Screenshot-2026-05-24-164038.png",
    tags: ["React", "Dashboard", "Charts"], live: "https://assinment-07-keen-keper.netlify.app/", github: "https://github.com/toufikhossain11/assignment-07",
  },
  {
    title: "Music Streaming UI",
    desc: "Spotify inspired premium music interface with smooth animations.",
    image: "https://i.ibb.co.com/jvFPq1TS/Screenshot-2026-05-24-164335.png",
    tags: ['Next.js',"UI/UX", "Frontend", "Animation"], live: "https://assinment-06-digitools-platform.netlify.app/", github: "https://github.com/toufikhossain11/assignment-06",
  },
];

function SkillCard({ skill }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      className="p-5 rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-2xl hover:border-cyan-400/30 hover:shadow-[0_0_35px_rgba(34,211,238,.12)] transition-all duration-300"
    >
      <div className="w-12 h-12 mb-4 flex items-center justify-center">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-10 h-10 object-contain"
          style={skill.name === "Next.js" || skill.name === "Express.js" ? { filter: "invert(1)" } : {}}
        />
      </div>
      <h3 className="text-base font-semibold mb-4">{skill.name}</h3>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: skill.level }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full"
        />
      </div>
      <p className="text-cyan-400 mt-3 text-xs font-medium">{skill.level}</p>
    </motion.div>
  );
}

// Freely draggable + auto-rotating ring
function DraggableRing({ size, color, duration, reverse }) {
  const half = size / 2;
  return (
    <motion.div
      drag
      dragMomentum={false}
      whileDrag={{ scale: 1.07, boxShadow: `0 0 25px ${color}` }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ rotate: { duration, repeat: Infinity, ease: "linear" } }}
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "9999px",
        border: `1.5px solid ${color}`,
        top: "50%",
        left: "50%",
        marginTop: -half,
        marginLeft: -half,
        cursor: "grab",
        zIndex: 10,
      }}
      className="active:cursor-grabbing"
    />
  );
}

export default function PortfolioPage() {
  return (
    <main className="text-white overflow-x-hidden relative selection:bg-cyan-400/30">

      {/* ── GRID BACKGROUND CSS ── */}
      <style>{`
        body { background-color: #060d1a; }

        /* Moving grid lines */
        @keyframes gridDrift {
          0%   { background-position: 0px 0px; }
          100% { background-position: 60px 60px; }
        }
        .grid-bg {
          background-image:
            linear-gradient(rgba(34,211,238,0.10) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.10) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridDrift 8s linear infinite;
        }

        /* Dot at each grid intersection */
        .grid-dots {
          background-image: radial-gradient(circle, rgba(34,211,238,0.25) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridDrift 8s linear infinite;
        }

        /* Subtle scanline overlay */
        @keyframes scanMove {
          0%   { background-position: 0 0; }
          100% { background-position: 0 120px; }
        }
        .scanlines {
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0,0,0,0.15) 2px,
            rgba(0,0,0,0.15) 4px
          );
          animation: scanMove 2s linear infinite;
          pointer-events: none;
        }
      `}</style>

      {/* ── BACKGROUND LAYERS ── */}

      {/* 1. Deep navy base */}
      <div className="fixed inset-0 -z-50" style={{ background: "#060d1a" }} />

      {/* 2. Grid lines */}
      <div className="grid-bg fixed inset-0 -z-40" />

      {/* 3. Glowing dots at intersections */}
      <div className="grid-dots fixed inset-0 -z-39" />

      {/* 4. Color blob radial glows */}
      <div className="fixed inset-0 -z-30"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 10% 10%, rgba(168,85,247,0.12) 0%, transparent 60%)," +
            "radial-gradient(ellipse 55% 45% at 90% 85%, rgba(34,211,238,0.10) 0%, transparent 60%)",
        }}
      />

      {/* 5. Scanlines */}
      <div className="scanlines fixed inset-0 -z-20" />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl border-b border-white/10 bg-black/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Toufik.</h3>
          <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            {["about", "skills", "projects", "contact"].map((l) => (
              <a key={l} href={`#${l}`} className="hover:text-cyan-400 transition capitalize">{l}</a>
            ))}
          </div>
          <button className="px-5 py-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 hover:bg-cyan-400 hover:text-black transition-all duration-300 text-sm font-medium">
            Hire Me
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-28 pb-16 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 text-sm mb-7 backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Work
            </div>
            <h1 className="leading-none font-black tracking-tight">
              <span className="block text-4xl md:text-6xl text-white/90">Frontend</span>
              <span className="block text-4xl md:text-6xl bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Developer.
              </span>
            </h1>
            <p className="mt-6 text-slate-400 text-base leading-7 max-w-lg">
              I build futuristic, fast and interactive web experiences using modern frontend technologies.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#projects" className="px-7 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_35px_rgba(34,211,238,.25)]">
                View Projects
              </a>
              <a href="#contact" className="px-7 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-300">
                Let&apos;s Talk
              </a>
            </div>
            <div className="flex gap-3 mt-8">
              {[
                { Icon: FaGithub,   href: "https://github.com/toufikhossain11" },
                { Icon: FaLinkedin, href: "https://www.linkedin.com/in/toufik-hossain-779b62201/" },
                { Icon: FaFacebook, href: "https://www.facebook.com/md.toufik.31337/" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* HERO IMAGE + DRAGGABLE RINGS */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
            style={{ height: 500 }}
          >
            {/* Glow blob */}
            <div className="absolute w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

            {/* Three independently draggable + spinning rings */}
            <DraggableRing size={300} color="rgba(255,255,255,0.10)" duration={14} reverse={false} />
            <DraggableRing size={385} color="rgba(34,211,238,0.38)"  duration={20} reverse={false} />
            <DraggableRing size={465} color="rgba(168,85,247,0.28)"  duration={28} reverse={true}  />

            {/* Profile photo — stays at center */}
            <div className="w-[260px] h-[260px] rounded-full border-2 border-cyan-400/25 bg-white/5 overflow-hidden shadow-[0_0_70px_rgba(34,211,238,.22)] relative z-20">
              <img
                src="https://i.ibb.co.com/CpdgX8cD/Chat-GPT-Image-May-24-2026-02-16-03-PM.png"
                alt="profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Floating tech badges */}
            <div className="absolute top-6 -left-2 md:-left-10 px-4 py-2 rounded-xl border border-white/10 bg-[#07090e]/80 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,.15)] animate-bounce text-sm z-30 pointer-events-none">
              ⚛ React
            </div>
            <div className="absolute bottom-12 -right-2 md:-right-8 px-4 py-2 rounded-xl border border-white/10 bg-[#07090e]/80 backdrop-blur-xl shadow-[0_0_20px_rgba(168,85,247,.15)] animate-pulse text-sm z-30 pointer-events-none">
              ▲ Next.js
            </div>
            <div className="absolute top-1/2 -right-0 md:-right-12 px-4 py-2 rounded-xl border border-white/10 bg-[#07090e]/80 backdrop-blur-xl text-sm z-30 pointer-events-none">
              💨 Tailwind
            </div>

            {/* Hint */}
            <p className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[11px] text-slate-600 z-30 flex items-center gap-1.5 pointer-events-none whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60 animate-pulse" />
              drag the rings freely
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-14 ">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-6">
          {[
            { number: 15, label: "Projects Completed" },
            { number: 8,  label: "Happy Clients" },
            { number: 1,  label: "Year Experience" },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -6 }}
              className="text-center bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-5xl font-black text-cyan-400"><CountUp end={item.number} duration={3} />+</h2>
              <p className="text-gray-400 mt-3 text-xs tracking-widest uppercase">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }} viewport={{ once: true }} className="relative">
            <div className="rounded-[32px] overflow-hidden border border-white/10 bg-white/5">
              <img src="https://i.ibb.co.com/G4CCq470/Chat-GPT-Image-May-24-2026-02-30-19-PM.png"
                alt="about" className="w-full h-[420px] object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-cyan-400 text-black px-5 py-3 rounded-2xl font-bold text-sm shadow-[0_0_35px_rgba(34,211,238,.35)]">
              1+ Years Experience
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs mb-4">About Me</p>
            <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">Creating modern digital experiences.</h2>
            <p className="text-slate-400 leading-8 text-sm">
              <span className="text-cyan-400 font-bold text-lg">Hi, I&apos;m Toufik Hossain</span>{" "}
              — a passionate Frontend Developer focused on building modern, responsive,
              and user-friendly web applications. I enjoy transforming ideas into clean
              and interactive digital experiences using React, Next.js, Tailwind CSS, and JavaScript.
              <br /><br />
              I am currently expanding my skills in full-stack development with Node.js,
              Express.js, and MongoDB while continuously improving my problem-solving workflow.
            </p>
            <div className="flex flex-row gap-4 mt-8">
              {[["2024","Started Web Dev"],["2025","React & Next.js"],["2026","Full Stack"]].map((item, i) => (
                <div key={i} className="flex flex-col items-center justify-center text-center flex-1 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">
                  <div className="text-cyan-400 font-black text-xl">{item[0]}</div>
                  <p className="text-slate-400 text-xs mt-1">{item[1]}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs mb-4">Skills & Tools</p>
            <h2 className="text-3xl md:text-4xl font-black">What I Work With</h2>
          </div>
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-widest mb-5">Frontend</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {frontendSkills.map((skill, i) => <SkillCard key={i} skill={skill} />)}
          </div>
          <p className="text-violet-400 font-semibold text-sm uppercase tracking-widest mb-5">Backend & Tools</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {backendSkills.map((skill, i) => <SkillCard key={i} skill={skill} />)}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs mb-4">Recent Projects</p>
            <h2 className="text-3xl md:text-4xl font-black">Featured Work</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-7">
            {projects.map((project, i) => (
              <motion.div key={i} whileHover={{ y: -10 }}
                className="group rounded-[28px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl hover:border-cyan-400/30 hover:shadow-[0_20px_70px_rgba(96,165,250,.12)] transition-all duration-500">
                <div className="relative h-[220px] overflow-hidden">
                  <img src={project.image} alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                    <a href={project.live} className="px-5 py-2.5 rounded-xl bg-cyan-400 text-black font-semibold flex items-center gap-2 text-sm">
                      Live <FaExternalLinkAlt size={12} />
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer"
                      className="px-5 py-2.5 rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl flex items-center gap-2 text-sm">
                      <FaGithub size={14} /> GitHub
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs">{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-slate-400 leading-7 mt-3 text-sm">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs mb-4">Contact</p>
            <h2 className="text-3xl md:text-4xl font-black">Let&apos;s build something amazing.</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-slate-400 text-sm leading-7 max-w-lg">
                Open for freelance projects, collaborations and exciting frontend opportunities.
              </p>
              <div className="mt-10 space-y-4">
                {[
                  { Icon: FaEnvelope,     text: "yourname@gmail.com" },
                  { Icon: FaPhoneAlt,     text: "+880 1XXX-XXXXXX" },
                  { Icon: FaMapMarkerAlt, text: "Bangladesh" },
                ].map(({ Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl">
                    <div className="w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                      <Icon size={15} />
                    </div>
                    <p className="text-sm text-slate-300">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-5 rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-cyan-400 font-semibold text-sm">Available for freelance</span>
                </div>
                <p className="text-slate-400 text-sm">Usually replies within 24 hours.</p>
              </div>
            </div>
            <div className="p-7 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_60px_rgba(34,211,238,.06)]">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="px-4 py-3.5 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400/40 text-sm transition" />
                <input type="email" placeholder="Email" className="px-4 py-3.5 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400/40 text-sm transition" />
              </div>
              <input type="text" placeholder="Subject" className="w-full mt-4 px-4 py-3.5 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-cyan-400/40 text-sm transition" />
              <textarea placeholder="Tell me about your project..." className="w-full h-[150px] mt-4 px-4 py-3.5 rounded-xl bg-black/30 border border-white/10 outline-none resize-none focus:border-cyan-400/40 text-sm transition" />
              <button className="w-full mt-5 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 text-black font-bold hover:scale-[1.02] transition-all duration-300 shadow-[0_0_35px_rgba(34,211,238,.2)]">
                Send Message ✦
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8 items-center justify-between">
          <div>
            <h3 className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">Toufik.</h3>
            <p className="text-slate-500 mt-2 text-sm">Building futuristic web experiences.</p>
          </div>
          <div className="flex items-center gap-4">
            {[
              { Icon: FaGithub,   href: "https://github.com/toufikhossain11" },
              { Icon: FaLinkedin, href: "https://www.linkedin.com/in/toufik-hossain-779b62201/" },
              { Icon: FaEnvelope, href: "mailto:yourname@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href}
                className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:border-cyan-400/40 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}