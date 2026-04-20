import { motion } from "framer-motion";

import ExperienceItem from "../ExperienceItem";

const WorkExperience = () => {
  const experiences = [
    {
      timeline: "2023-present",
      title: "Freelance Frontend Developer",
    },
    {
      timeline: "2024-present",
      title: "Frontend Developer(Web & Mobile)",
      company: "Plethora.ng",
      link: "https://www.plethora.ng/",
    },
  ];

  return (
    <motion.div
      id="experience"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="md:my-15 py-10 px-4 md:px-40 mx-auto"
    >
      <p className="text-base font-semibold uppercase tracking-[0.2em] text-primary">
        Work Experience
      </p>

      <div>
        {experiences.map(({ timeline, title, company, link }) => (
          <ExperienceItem
            timeline={timeline}
            title={title}
            company={company}
            link={link}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
