import { navLinks, siteConfig, socialLinks } from "@/lib/config";
import { BrandIcon } from "@/components/brand-icon";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-2/60">
      <div className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <a href="#home" className="font-display text-lg font-semibold text-foreground">
            <span className="text-accent">&lt;</span>
            {siteConfig.initials}
            <span className="text-accent">/&gt;</span>
          </a>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-accent-deep dark:hover:text-accent"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent"
              >
                <BrandIcon
                  slug={social.icon}
                  className="h-4 w-4 opacity-70 transition-opacity hover:opacity-100 dark:invert-[0.15]"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js
            &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
