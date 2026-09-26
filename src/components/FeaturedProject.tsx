import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import _ from "lodash";

import type { Project } from "@/types/project";

type FeaturedProjectProps = {
  project: Project;
  category: string;
  summary: string;
  index: number;
};

const FeaturedProject = ({
  project,
  category,
  summary,
  index,
}: FeaturedProjectProps) => {
  const imageOnRight = index % 2 === 1;

  return (
    <motion.article
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={`group grid overflow-hidden rounded-[2rem] border border-primary/10 bg-[#f6f2e9] shadow-sm ${
        imageOnRight
          ? "md:grid-cols-[0.9fr_1.1fr]"
          : "md:grid-cols-[1.1fr_0.9fr]"
      }`}
    >
      <div
        className={`flex min-h-64 items-center bg-[#ead8cc] p-4 sm:p-6 md:min-h-[430px] md:p-8 ${
          imageOnRight ? "md:order-2" : ""
        }`}
      >
        <div className="h-full w-full overflow-hidden rounded-2xl bg-white shadow-[0_18px_50px_rgba(75,46,29,0.15)]">
          <img
            src={project.images[0]}
            alt={`Preview of ${project.title}`}
            loading="lazy"
            className="h-full min-h-56 w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03] md:min-h-[365px]"
          />
        </div>
      </div>

      <div
        className={`flex flex-col justify-center p-7 sm:p-9 md:p-12 ${
          imageOnRight ? "md:order-1" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            {category}
          </p>
          <span className="font-display text-lg italic text-primary/55">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mt-5 font-display text-3xl font-medium leading-tight text-[#171717] sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-5 text-base leading-7 text-[#625c55]">{summary}</p>

        <ul
          className="mt-6 flex flex-wrap gap-2"
          aria-label="Technologies used"
        >
          {project.technologies.slice(0, 4).map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-primary/15 bg-white/70 px-3 py-1.5 text-xs font-medium capitalize text-[#5f5a54]"
            >
              {technology}
            </li>
          ))}
        </ul>

        <Link
          to={`/projects/${_.kebabCase(project.title)}`}
          className="mt-8 inline-flex w-fit items-center gap-2 border-b border-primary pb-1 text-sm font-semibold text-primary transition-opacity hover:opacity-70"
        >
          View case study
          <ArrowUpRight
            size={17}
            strokeWidth={1.8}
            aria-hidden="true"
          />
        </Link>
      </div>
    </motion.article>
  );
};

export default FeaturedProject;
