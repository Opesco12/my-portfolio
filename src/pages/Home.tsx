import type { FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Skills from "../components/sections/Skills";
import Services from "../components/sections/Services";
import About from "@/components/sections/About";
import FeaturedProject from "@/components/FeaturedProject";

import { myProjects } from "@/projects";

const featuredProjects = [
  {
    project: myProjects[1],
    category: "Fintech · Web & Mobile",
    summary:
      "A secure investment platform that gives users a clear, dependable way to access and manage their portfolios across web and mobile.",
  },
  {
    project: myProjects[0],
    category: "Fintech · Investment Dashboard",
    summary:
      "A Sharia-compliant investment experience designed to make ethical savings, investments, and charitable giving easier to manage.",
  },
  {
    project: myProjects[2],
    category: "Education · Mobile App",
    summary:
      "A digital handbook that helps University of Ilorin freshmen find essential faculty information and navigate their campus.",
  },
];

const Home = () => {
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

      <Services />

      <section
        id="projects"
        className="px-4 py-16 md:px-16 md:py-24 lg:px-40"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ y: 35, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <p className="text-base font-semibold uppercase tracking-[0.2em] text-primary">
                Selected work
              </p>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium leading-tight text-[#171717] md:text-5xl">
                Products I&apos;ve helped bring to life.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#625c55]">
              A closer look at digital experiences I&apos;ve built across web
              and mobile.
            </p>
          </motion.div>

          <div className="mt-10 space-y-7 md:mt-14 md:space-y-10">
            {featuredProjects.map(({ project, category, summary }, index) => (
              <FeaturedProject
                key={project.title}
                project={project}
                category={category}
                summary={summary}
                index={index}
              />
            ))}
          </div>

          <div className="mt-10 flex justify-center md:mt-14">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-dark-primary"
            >
              View all projects
              <ArrowRight
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

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
