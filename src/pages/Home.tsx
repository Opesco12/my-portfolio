import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Skills from "../components/sections/Skills";
import ProjectBox from "../components/ProjectBox";
import WorkExperience from "../components/sections/WorkExperience";
import About from "@/components/sections/About";

import { myProjects } from "@/projects";

const Home = () => {
  const navigate = useNavigate();

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    console.log("Contact form submission:", payload);
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen">
      <About />

      <Skills />

      <WorkExperience />

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true, amount: 0.4 }}
        id="projects"
        className="min-h-100 py-5 px-4 md:px-40"
      >
        <p className="text-base font-semibold uppercase tracking-[0.2em] text-primary">
          Projects I've worked on
        </p>

        <div className="grid my-7 gap-5 md:gap-10 md:my-10 md:grid-cols-2">
          {myProjects.map((project, index) => (
            <ProjectBox
              key={index}
              project={project}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <button
            className="flex gap-1 items-center bg-gray-200 text-sm px-3 py-4 rounded-lg mt-5 font-medium m-auto cursor-pointer hover:bg-gray-300"
            onClick={() => navigate("/projects")}
          >
            View All
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

      <motion.section
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true, amount: 0.35 }}
        id="contact"
        className="px-4 py-10 md:px-40"
      >
        <div className="rounded-2xl border border-slate-200  p-6 shadow-sm md:p-10">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-primary">
            Contact
          </p>
          <h3 className="mt-3 text-3xl font-semibold md:text-4xl">
            Let's build something great together.
          </h3>
          <p className="mt-4 max-w-2xl text-lg text-gray-700">
            Have a project, role, or collaboration idea? I am open to discussing
            opportunities and would love to hear from you.
          </p>

          <form
            onSubmit={handleContactSubmit}
            className="mt-8 space-y-4"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Name
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base outline-none transition-colors focus:border-primary"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base outline-none transition-colors focus:border-primary"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Subject
              <input
                type="text"
                name="subject"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base outline-none transition-colors focus:border-primary"
                placeholder="What is this about?"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              Message
              <textarea
                name="message"
                required
                rows={6}
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-base outline-none transition-colors focus:border-primary"
                placeholder="Tell me about your project..."
              />
            </label>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/85"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
