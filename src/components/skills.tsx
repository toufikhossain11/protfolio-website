"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/config";
import { SectionHeading } from "@/components/section-heading";

export function Skills() {
  return (
    <section id="skills" className="bg-surface-2/60 py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="skills-and-tools"
          title="What I work with"
          description="A snapshot of the languages, frameworks, and tools I use to design, build, and ship full-stack applications."
        />

        <div className="space-y-12">
          {skills.map((group, groupIndex) => (
            <div key={group.category}>
              <h3 className="mb-5 font-mono text-sm font-medium text-muted">
                {String(groupIndex + 1).padStart(2, "0")} · {group.category}
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {group.items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.35, delay: i * 0.04 }}
                    whileHover={{ y: -4 }}
                    className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-surface px-4 py-5 text-center transition-colors hover:border-accent"
                  >
                    <span className="flex h-10 w-10 items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element -- external logo CDN, no next/image domain needed */}
                      <img
                        src={`https://cdn.simpleicons.org/${skill.icon}`}
                        alt={skill.name}
                        className="h-8 w-8 object-contain opacity-80 transition-opacity group-hover:opacity-100 dark:invert-[0.15]"
                        loading="lazy"
                      />
                    </span>
                    <span className="text-xs font-medium text-foreground">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
