import ProjectBox from "../components/ProjectBox";

import { myProjects } from "@/projects";

const Projects = () => {
  return (
    <section className="px-4 py-8 md:px-40 md:py-12">
      <div className="mx-auto max-w-6xl">
        <p className="text-base font-semibold uppercase tracking-[0.2em] text-primary">
          Selected Works
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
          A closer look at products I have built, from concept to production.
        </p>

        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2 md:gap-8">
          {myProjects.map((project, index) => (
            <ProjectBox
              key={index}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
