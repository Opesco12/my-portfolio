import SkillsCarousel from "../SkillsCarousel";

const Skills = () => {
  return (
    <div
      className="max-w-6xl mx-auto p-5  md:py-10 "
      id="skills"
    >
      <h2 className="font-medium text-lg md:text-2xl">
        Skills, Technologies & Tools
      </h2>
      <SkillsCarousel />
    </div>
  );
};

export default Skills;
