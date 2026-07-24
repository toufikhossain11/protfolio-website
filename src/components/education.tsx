"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/config";
import { SectionHeading } from "@/components/section-heading";

export function Education() {
  return (
    <section id="education" className="bg-surface-2/60 py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="education"
          title="Academic background"
          description="Placeholder entries below — swap these for your real qualifications."
        />

        <div className="relative border-l border-border pl-8 sm:pl-10">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-[2.6rem] flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-accent-deep dark:text-accent sm:-left-[3.15rem]">
                <GraduationCap className="h-4 w-4" />
              </span>
              <p className="font-mono text-xs text-muted">{item.period}</p>
              <h3 className="mt-1 font-display text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent-deep dark:text-accent">
                {item.place}
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
