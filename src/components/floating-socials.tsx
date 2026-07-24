"use client";

import { motion } from "framer-motion";
import { socialLinks } from "@/lib/config";
import { BrandIcon } from "@/components/brand-icon";

export function FloatingSocials() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed bottom-0 left-4 z-40 hidden flex-col items-center gap-4 pb-6 md:left-6 lg:flex"
    >
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all hover:-translate-y-1 hover:border-accent"
        >
          <BrandIcon
            slug={social.icon}
            className="h-4.5 w-4.5 opacity-70 transition-opacity group-hover:opacity-100 dark:invert-[0.15]"
          />
        </a>
      ))}
      <span className="mt-1 h-16 w-px bg-border" />
    </motion.div>
  );
}
