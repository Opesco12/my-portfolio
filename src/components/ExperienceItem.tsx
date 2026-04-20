import { Calendar } from "iconsax-reactjs";

interface Props {
  timeline: string;
  title: string;
  company?: string;
  link?: string;
}

const ExperienceItem: React.FC<Props> = ({
  timeline,
  title,
  link = "#",
  company,
}) => (
  <div className="flex gap-15 my-10 ">
    <div className="flex gap-1 items-center text-primary">
      <Calendar
        size={20}
        className="text-primary"
      />
      <p className="text-base">{timeline}</p>
    </div>

    <div className=" text-lg gap-1 items-center">
      <p>{title}</p>
      {company && (
        <p className="text-primary underline text-base">
          <a
            href={link}
            target="_blank"
          >
            {company}
          </a>
        </p>
      )}
    </div>
  </div>
);

export default ExperienceItem;
