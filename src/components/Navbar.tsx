const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20">
      <ul className="sm:flex items-center justify-center hidden  py-4 gap-4 sm:text-sm md:gap-10 ">
        <li className="font-medium cursor-pointer bg-primary text-white p-2 rounded-lg transition-colors">
          <a href="/#about">About Me</a>
        </li>
        <li className="font-medium cursor-pointer hover:text-primary transition-colors">
          <a href="/#skills">Skills</a>
        </li>
        <li className="font-medium cursor-pointer hover:text-primary transition-colors">
          <a href="/#projects">Project</a>
        </li>
        <li className="font-medium cursor-pointer hover:text-primary transition-colors">
          <a href="/#contact">Contact Me</a>
        </li>
      </ul>
      <div className="flex items-center justify-end px-4 py-2 md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="35"
          height="35"
          viewBox="0 0 30 30"
        >
          <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;
