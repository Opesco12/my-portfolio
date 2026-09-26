import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const sectionIds = ["about", "skills", "services", "projects", "contact"];

const navLinks = [
  { name: "About", id: "about", href: "/#about" },
  { name: "Skills", id: "skills", href: "/#skills" },
  { name: "Services", id: "services", href: "/#services" },
  { name: "Projects", id: "projects", href: "/#projects" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = useCallback(
    (sectionId: string) => {
      setActiveSection(sectionId);

      if (location.pathname !== "/") {
        navigate(`/#${sectionId}`);
        return;
      }

      const element = document.getElementById(sectionId);
      if (!element) return;

      const navbarOffset = 88;
      const top = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top - navbarOffset, behavior: "smooth" });
    },
    [location.pathname, navigate],
  );

  useEffect(() => {
    const updateNavbar = () => setIsScrolled(window.scrollY > 12);

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    return () => window.removeEventListener("scroll", updateNavbar);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") return;

    let animationFrame = 0;

    const updateActiveSection = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const probePosition =
          window.scrollY + Math.min(window.innerHeight * 0.35, 320);
        let currentSection = sectionIds[0];

        sectionIds.forEach((id) => {
          const section = document.getElementById(id);
          if (!section) return;

          const sectionTop =
            section.getBoundingClientRect().top + window.scrollY;
          if (sectionTop <= probePosition) currentSection = id;
        });

        const isAtPageBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 4;

        setActiveSection(isAtPageBottom ? "contact" : currentSection);
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== "/") return;

    const hash = location.hash.replace("#", "");
    if (!sectionIds.includes(hash)) return;

    const animationFrame = requestAnimationFrame(() => scrollToSection(hash));
    return () => cancelAnimationFrame(animationFrame);
  }, [location.hash, location.pathname, scrollToSection]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  const activeLink = location.pathname.startsWith("/projects")
    ? "projects"
    : location.pathname === "/"
      ? activeSection
      : "about";

  const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname !== "/") return;

    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`sticky top-0 z-50 border-b px-5 py-3 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300 sm:px-8 ${
          isScrolled
            ? "border-primary/10 bg-[#f6f2e9]/85 shadow-[0_10px_35px_rgba(75,46,29,0.09)] backdrop-blur-xl"
            : "border-transparent bg-[#f6f2e9]"
        }`}
      >
        <div className="mx-auto grid w-full max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4">
          <Link
            to="/"
            onClick={handleHomeClick}
            aria-label="Go to the top of the homepage"
            className="inline-flex h-11 items-center rounded-xl px-3 font-mono text-xl font-bold tracking-[-0.12em] text-primary transition-colors hover:bg-primary hover:text-white"
          >
            {"< / >"}
          </Link>

          <ul className="mx-auto hidden items-center gap-1 rounded-full p-1 md:flex">
            {navLinks.map((link) => {
              const isActive = activeLink === link.id;

              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    onClick={(event) => {
                      event.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className={`block rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-white shadow-sm"
                        : "text-[#514b45] hover:bg-primary/8 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center justify-end md:flex">
            <a
              href="/#contact"
              onClick={(event) => {
                event.preventDefault();
                scrollToSection("contact");
              }}
              className={`group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-colors ${
                activeLink === "contact"
                  ? "bg-dark-primary"
                  : "bg-primary hover:bg-dark-primary"
              }`}
            >
              Let&apos;s talk
              <ArrowUpRight
                size={17}
                strokeWidth={1.9}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            className="flex h-11 w-11 items-center justify-center justify-self-end rounded-full border border-primary/15 bg-white/60 text-[#292621] transition-colors hover:bg-primary hover:text-white md:hidden"
          >
            <Menu
              size={22}
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.32, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#241710] px-5 py-3 text-white sm:px-8 md:hidden"
          >
            <div className="mx-auto flex h-full max-w-6xl flex-col">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xl font-bold tracking-[-0.12em] text-light-primary">
                  {"< / >"}
                </span>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-[#241710]"
                >
                  <X
                    size={23}
                    aria-hidden="true"
                  />
                </button>
              </div>

              <div className="flex flex-1 flex-col justify-center">
                <p className="mb-7 text-xs font-semibold uppercase tracking-[0.2em] text-light-primary">
                  Navigate
                </p>
                <ul className="space-y-2">
                  {navLinks.map((link, index) => {
                    const isActive = activeLink === link.id;

                    return (
                      <li key={link.id}>
                        <a
                          href={link.href}
                          aria-current={isActive ? "location" : undefined}
                          onClick={(event) => {
                            event.preventDefault();
                            setIsMenuOpen(false);
                            scrollToSection(link.id);
                          }}
                          className={`flex items-center justify-between border-b py-4 font-display text-3xl transition-colors ${
                            isActive
                              ? "border-light-primary text-light-primary"
                              : "border-white/15 text-white hover:text-light-primary"
                          }`}
                        >
                          <span>{link.name}</span>
                          <span className="font-sans text-xs text-white/45">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <a
                  href="/#contact"
                  onClick={(event) => {
                    event.preventDefault();
                    setIsMenuOpen(false);
                    scrollToSection("contact");
                  }}
                  className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white"
                >
                  Let&apos;s talk
                  <ArrowUpRight
                    size={17}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
