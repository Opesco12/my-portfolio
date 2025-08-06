import SkillsCarousel from "../SkillsCarousel";

const Skills = () => {
  return (
    <div
      className="py-5 md:py-10 "
      id="skills"
    >
      <h2 className="font-medium text-center text-lg md:text-2xl">
        Skills, Technologies & Tools
      </h2>
      <SkillsCarousel />
    </div>
  );
};

export default Skills;
