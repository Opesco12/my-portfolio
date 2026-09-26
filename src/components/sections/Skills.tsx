import { motion } from "framer-motion";

import SkillsCarousel from "../SkillsCarousel";

const Skills = () => {
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="py-10 md:py-16"
      id="skills"
    >
      <div className="px-5 sm:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-base font-semibold uppercase tracking-[0.2em] text-primary">
            Skills, Technologies & Tools
          </p>
        </div>
      </div>
      <SkillsCarousel />
    </motion.section>
  );
};

export default Skills;
