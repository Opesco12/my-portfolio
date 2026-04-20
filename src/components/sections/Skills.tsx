import { motion } from "framer-motion";

import SkillsCarousel from "../SkillsCarousel";

const Skills = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className=" mx-auto px-4 md:px-40  md:my-10 "
      id="skills"
    >
      <h2 className="font-medium text-lg md:text-2xl">
        Skills, Technologies & Tools
      </h2>
      <SkillsCarousel />
    </motion.div>
  );
};

export default Skills;
