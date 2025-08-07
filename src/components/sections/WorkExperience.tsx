import ExperienceItem from "../ExperienceItem";

const WorkExperience = () => {
  const experiences = [
    {
      timeline: "2023-present",
      title: "Freelance Frontend Developer",
    },
    {
      timeline: "2024-present",
      title: "Frontend Developer",
      company: "Plethora",
      link: "https://www.plethora.ng/",
    },
  ];

  return (
    <div className="md:py-5 px-5 md:max-w-6xl mx-auto">
      <h2
        className="text-lg font-medium  mb-5 md:text-2xl"
        id="projects"
      >
        Work Experience
      </h2>

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
    </div>
  );
};

export default WorkExperience;
