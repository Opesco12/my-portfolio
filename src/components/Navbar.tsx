const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20">
      <ul className="flex items-center justify-center gap-10 py-4 ">
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
    </nav>
  );
};

export default Navbar;
