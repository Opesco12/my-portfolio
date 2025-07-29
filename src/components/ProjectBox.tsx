import pathwayMockup from "../assets/Pathway-mockup.png";

const ProjectBox = () => {
  return (
    <div className="border border-gray-300 p-4 md:p-10 rounded-xl">
      <div className="bg-gray-200 p-2 rounded-lg md:p-5">
        <img
          src={pathwayMockup}
          alt="UTLAM"
        />
      </div>
      <div className="mt-5">
        <p className="font-medium">Pathway Asset Management Web App</p>
        <p className="text-sm">
          A standard web application built for Pathway Asset Management.
        </p>
        <button className="bg-gray-200 px-3 py-4 rounded-lg mt-5 font-medium flex gap-3">
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
