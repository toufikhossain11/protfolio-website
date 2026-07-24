"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { projects } from "@/lib/config";
import { SectionHeading } from "@/components/section-heading";
import { BrandIcon } from "@/components/brand-icon";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="selected-work"
          title="Projects I&rsquo;m proud of"
          description="A few full-stack builds that show how I approach product thinking, UI craft, and backend architecture."
        />

        <div className="space-y-20">
          {projects.map((project, index) => {
            const reversed = index % 2 === 1;
            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={cn(
                  "grid items-center gap-8 lg:grid-cols-2 lg:gap-12",
                  reversed && "lg:[&>*:first-child]:order-2"
                )}
              >
                <div className="group relative aspect-video overflow-hidden rounded-2xl border border-border bg-surface-2">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs text-accent-deep dark:text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-5 space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-transform hover:scale-105"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent-deep dark:hover:text-accent"
                    >
                      <BrandIcon slug="github" className="h-4 w-4 dark:invert" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
