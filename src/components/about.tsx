"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { aboutHighlights, siteConfig } from "@/lib/config";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="about-me"
          title="Turning ideas into reliable products"
        />

        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm"
          >
            <div className="absolute -inset-3 -z-10 rounded-3xl border border-border" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border bg-surface-2">
              <Image
                src="/images/about.svg"
                alt={`${siteConfig.name} working`}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-base leading-relaxed text-muted">
              I&rsquo;m a MERN Stack Developer who recently completed an intensive
              6-month full-stack program, sharpening my skills across the entire
              JavaScript ecosystem — from semantic HTML to production-ready
              Next.js applications. I care about writing code that is clean,
              scalable, and genuinely pleasant to work with.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              My goal is to grow into a versatile full-stack engineer who
              partners closely with design and product to ship experiences
              people enjoy using. I&rsquo;m especially drawn to solving
              tricky UI problems and building thoughtful, well-tested APIs —
              and I actively use modern AI tools to work faster without
              sacrificing quality.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-1">
              {aboutHighlights.map((item) => (
                <li
                  key={item.title}
                  className="flex gap-3 rounded-xl border border-border bg-surface p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-deep dark:text-accent" />
                  <div>
                    <p className="font-medium text-foreground">{item.title}</p>
                    <p className="mt-1 text-sm text-muted">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
