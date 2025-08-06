import { useNavigate } from "react-router-dom";

import CissaMockup from "../assets/cissa.png";

const ProjectBox = () => {
  const navigate = useNavigate();
  return (
    <div className="border border-gray-300 p-3 md:p-5 rounded-xl">
      <div className="bg-gray-200 rounded-lg overflow-hidden">
        <img
          src={CissaMockup}
          alt="UTLAM"
        />
      </div>
      <div className="mt-5">
        <p className="font-medium">Pathway Asset Management Web App</p>
        <p className="text-sm">
          A standard web application built for Pathway Asset Management.
        </p>
        <button
          className="bg-gray-200 px-3 text-sm py-4 rounded-lg mt-5 font-medium flex gap-3 cursor-pointer hover:bg-gray-300"
          onClick={() => navigate("/projects/cissa")}
        >
          View Project{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-right-icon lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectBox;
