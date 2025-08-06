import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about"); // Default to 'about'
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll locking for mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isMenuOpen]);

  // IntersectionObserver to detect visible section
  useEffect(() => {
    // Only run IntersectionObserver on the home page
    if (location.pathname !== "/") return;

    const sections = ["about", "skills", "projects", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe each section
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [location.pathname]);

  // Determine active link based on route or section
  const getActiveLink = () => {
    if (location.pathname === "/projects") return "projects";
    return activeSection;
  };

  const navLinks = [
    { name: "About Me", id: "about", href: "/#about" },
    { name: "Skills", id: "skills", href: "/#skills" },
    { name: "Projects", id: "projects", href: "/projects" },
    { name: "Contact Me", id: "contact", href: "/#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20 py-2 md:px-20">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div>
          <p className="text-4xl px-5 md:text-5xl text-primary font-extrabold">
            {"< / >"}
          </p>
        </div>
        <ul className="sm:flex items-center justify-center hidden py-4 gap-4 sm:text-sm md:gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`font-medium cursor-pointer p-2 rounded-lg transition-colors ${
                getActiveLink() === link.id
                  ? "bg-primary text-white"
                  : "hover:text-primary"
              }`}
            >
              <a
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith("/#")) {
                    e.preventDefault();
                    navigate("/");
                    setTimeout(() => {
                      const element = document.getElementById(link.id);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 0);
                  }
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {!isMenuOpen && (
          <div className="flex items-center justify-end px-4 py-2 md:hidden">
            <svg
              onClick={toggleMenu}
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 30 30"
              className="cursor-pointer"
            >
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
            </svg>
          </div>
        )}
        {isMenuOpen && (
          <div className="absolute inset-0 h-screen z-[100] bg-gradient-to-r from-lighter-primary to-primary backdrop-blur-md opacity-97">
            <div className="flex items-center justify-end px-4 py-2 md:hidden">
              <svg
                onClick={toggleMenu}
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 50 50"
                className="cursor-pointer"
              >
                <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-center h-full gap-15 text-lg">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`text-2xl cursor-pointer transition-colors ${
                    getActiveLink() === link.id
                      ? "text-white bg-primary p-2 rounded-lg"
                      : "text-white hover:text-gray-200"
                  }`}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      toggleMenu();
                      if (link.href.startsWith("/#")) {
                        e.preventDefault();
                        navigate("/");
                        setTimeout(() => {
                          const element = document.getElementById(link.id);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          }
                        }, 0);
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
