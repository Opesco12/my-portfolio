import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      // Apply to both html and body elements
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Restore scroll
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
      // Cleanup on unmount
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [isMenuOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20">
      <ul className="sm:flex items-center justify-center hidden py-4 gap-4 sm:text-sm md:gap-10">
        <li className="font-medium cursor-pointer bg-primary text-white p-2 rounded-lg transition-colors">
          <a href="/#about">About Me</a>
        </li>
        <li className="font-medium cursor-pointer hover:text-primary transition-colors">
          <a href="/#skills">Skills</a>
        </li>
        <li className="font-medium cursor-pointer hover:text-primary transition-colors">
          <a href="/#projects">Projects</a>
        </li>
        <li className="font-medium cursor-pointer hover:text-primary transition-colors">
          <a href="/#contact">Contact Me</a>
        </li>
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
            <li className="text-2xl cursor-pointer text-white hover:text-gray-200 transition-colors">
              <a
                href="/#about"
                onClick={toggleMenu}
              >
                About Me
              </a>
            </li>
            <li className=" cursor-pointer text-white text-2xl hover:text-gray-200 transition-colors">
              <a
                href="/#skills"
                onClick={toggleMenu}
              >
                Skills
              </a>
            </li>
            <li className="text-2xl cursor-pointer text-white hover:text-gray-200 transition-colors">
              <a
                href="/#projects"
                onClick={toggleMenu}
              >
                Projects
              </a>
            </li>
            <li className="text-2xl cursor-pointer text-white hover:text-gray-200 transition-colors">
              <a
                href="/#contact"
                onClick={toggleMenu}
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
