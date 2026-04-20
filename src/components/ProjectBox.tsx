import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { motion } from "framer-motion";

import type { Project } from "@/types/project";

type ProjectBoxProps = {
  project: Project;
};

const ProjectBox: React.FC<ProjectBoxProps> = ({ project }) => {
  const navigate = useNavigate();

  const { title, subtitle, images } = project;

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ y: -4 }}
      className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md md:p-5"
    >
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
        <img
          src={images[0]}
          alt={title}
          className="w-full object-cover aspect-video"
        />
      </div>
      <div className="mt-5 flex flex-1 flex-col justify-between">
        <div>
          <p className="text-lg font-semibold text-slate-900">{title}</p>
          <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
        </div>
        <button
          className="mt-5 flex cursor-pointer self-start items-center gap-2 rounded-lg border border-slate-300 bg-slate-100 px-4 py-3 text-sm font-medium text-slate-800 transition-colors hover:bg-slate-200"
          onClick={() => navigate(`/projects/${_.kebabCase(title)}`)}
        >
          View Project
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
    </motion.div>
  );
};

export default ProjectBox;
