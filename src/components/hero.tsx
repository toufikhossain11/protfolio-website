"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import { expertise, heroStats, siteConfig } from "@/lib/config";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1200;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return (
    <span className="font-display text-3xl font-semibold text-foreground sm:text-4xl">
      {count}
      {suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-32 sm:pt-40"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="pointer-events-none absolute -top-40 right-0 -z-10 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-muted">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            Available for new opportunities
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Hi, I&rsquo;m {siteConfig.name.split(" ")[0]}
            <br />
            <span className="text-gradient-accent">{siteConfig.title}</span>
            <span className="animate-caret text-accent">_</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {siteConfig.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {expertise.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-xs text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={siteConfig.resumeUrl}
              download
              className="group flex items-center gap-2 rounded-full bg-accent-deep px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_var(--color-accent)] transition-transform hover:scale-105"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              View Resume
            </a>
            <a
              href="#projects"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent-deep dark:hover:text-accent"
            >
              See My Work
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="mt-1 text-xs text-muted">{stat.label}</p>
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent/30 to-transparent blur-2xl" />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-border bg-surface-2">
            <Image
              src="/images/profile.svg"
              alt={siteConfig.name}
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 flex items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-3 font-mono text-xs shadow-lg">
            <span className="h-2 w-2 rounded-full bg-accent" />
            open-to-work.tsx
          </div>
        </motion.div>
      </div>
    </section>
  );
}
