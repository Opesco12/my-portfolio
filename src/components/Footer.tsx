import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const year = new Date().getFullYear();

  const navigationLinks = [
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-primary/10 bg-[#f6f2e9] px-5 sm:px-8 md:px-16 lg:px-40">
      <div className="relative mx-auto max-w-7xl pb-0 pt-10 md:pt-20">
        <div className="relative z-10 grid gap-10 border-b border-primary/10 py-5 md:grid-cols-[1.5fr_0.7fr_1fr] md:gap-12 md:py-10">
          <div>
            <a
              href="/#about"
              className="inline-flex items-center text-primary gap-3 font-display text-2xl font-semibold "
            >
              Emmanuel Oyeleke
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[#5f5a54]">
              I build thoughtful web and mobile experiences that are clear,
              dependable, and enjoyable to use.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <motion.a
                href="https://github.com/Opesco12"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                whileHover={{ y: -2 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 text-[#4f4943] transition-colors hover:border-primary hover:bg-primary hover:text-white"
              >
                <Github
                  size={16}
                  strokeWidth={1.8}
                />
              </motion.a>
              <motion.a
                href="https://x.com/Opesco123"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                whileHover={{ y: -2 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 text-[#4f4943] transition-colors hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 fill-current"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/emmanuel-oyeleke-330469320/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                whileHover={{ y: -2 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 text-[#4f4943] transition-colors hover:border-primary hover:bg-primary hover:text-white"
              >
                <Linkedin
                  size={16}
                  strokeWidth={1.8}
                />
              </motion.a>
              <motion.a
                href="mailto:oyelekemmanuel@gmail.com"
                aria-label="Email"
                whileHover={{ y: -2 }}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/15 text-[#4f4943] transition-colors hover:border-primary hover:bg-primary hover:text-white"
              >
                <Mail
                  size={16}
                  strokeWidth={1.8}
                />
              </motion.a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#292621]">
              Explore
            </p>
            <nav
              aria-label="Footer navigation"
              className="mt-5 flex flex-col items-start gap-3"
            >
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#625c55] transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#292621]">
              Get in touch
            </p>
            <p className="mt-5 max-w-xs text-sm leading-6 text-[#625c55]">
              Have a role, project, or collaboration in mind? I&apos;d love to
              hear about it.
            </p>
            <a
              href="mailto:oyelekemmanuel@gmail.com"
              className="mt-5 inline-flex border-b border-primary pb-1 text-sm font-medium text-primary transition-opacity hover:opacity-70"
            >
              oyelekemmanuel@gmail.com
            </a>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-2 pt-6 text-xs text-[#756e66] sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Emmanuel Oyeleke. All rights reserved.</p>
          <p>Built by me.</p>
        </div>

        <p
          aria-hidden="true"
          className="pointer-events-none mt-12 hidden select-none bg-gradient-to-b from-primary/[0.4] via-primary/[0.1] to-transparent bg-clip-text text-center font-display text-[clamp(7rem,18vw,17rem)] font-medium leading-[0.8] tracking-[-0.07em] text-transparent md:block"
        >
          Emmanuel
        </p>
      </div>
    </footer>
  );
};

export default Footer;
