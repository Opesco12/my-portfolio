import QRCode from "react-qr-code";

import TechnologyBox from "../components/TechnologyBox";
import CissaMockup from "../assets/cissa.png";

const ProjectDetails = () => {
  const technologies = ["react-native", "expo", "google maps"];
  return (
    <div className="max-w-6xl mx-auto p-3">
      <div className="grid md:grid-cols-4 md:gap-5">
        <img
          src={CissaMockup}
          alt="project image"
          className="rounded-xl col-span-3"
        />
        <div className="hidden md:block">
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={
              "https://expo.dev/preview/update?message=add+unilorin+logo&updateRuntimeVersion=1.0.0&createdAt=2025-08-06T15%3A14%3A06.016Z&slug=CISSA&projectId=78caa94b-cbe4-4587-ae49-e9854764d342&group=b32bceef-b51a-434a-b046-ce68539d6fdf"
            }
            viewBox={`0 0 256 256`}
          />
          <p className="text-center py-2 text-sm md:text-lg">
            Scan to open in expo go
          </p>
          <button className="flex gap-2 items-center justify-center bg-black w-full text-white py-4 my-2 rounded-lg hover:bg-black/85">
            View Live
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
      </div>
      <div className="my-5">
        <h3 className="text-lg font-semibold md:text-2xl">CISSA App</h3>
        <p className="text-sm md:text-lg">
          A digital handbook built as a project work for the faculty of
          communication and information sciences, University of Ilorin.
        </p>
        <div className="bg-gray-50 rounded-xl my-5 p-5">
          <p className="font-semibold">Description</p>
          <p className="text-justify text-sm">
            The app is built using react native leveraging expo managed
            workflow. Its main purpose is to serve as a digital handbook to
            freshmen of the faculty of communication and information sciences in
            university of ilorin, ilorin, Kwara State. The app also features a
            map which students can easily use to navigate around campus.
          </p>
          <p className="font-semibold mt-3">Technologies</p>
          <div className="my-2 flex gap-2 flex-wrap">
            {technologies.map((tech, index) => (
              <TechnologyBox
                technology={tech}
                key={index}
              />
            ))}
          </div>
          <div className="my-5 md:hidden">
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={
                "https://expo.dev/preview/update?message=add+unilorin+logo&updateRuntimeVersion=1.0.0&createdAt=2025-08-06T15%3A14%3A06.016Z&slug=CISSA&projectId=78caa94b-cbe4-4587-ae49-e9854764d342&group=b32bceef-b51a-434a-b046-ce68539d6fdf"
              }
              viewBox={`0 0 256 256`}
            />
            <p className="text-center py-2 text-sm md:text-lg">
              Scan to open in expo go
            </p>
            <button className="flex gap-2 items-center justify-center bg-black w-full text-white py-4 my-2 rounded-lg hover:bg-black/85">
              View Live
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
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
