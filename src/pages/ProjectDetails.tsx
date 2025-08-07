import { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import TechnologyBox from "../components/TechnologyBox";
import { type CarouselApi } from "@/components/ui/carousel";

import CissaMockup from "../assets/cissa.png";
import PathwayMockup from "../assets/Pathway-mockup.png";

const ProjectDetails = () => {
  const technologies = ["react-native", "expo", "google maps"];
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleSelect = (index: number) => {
    api?.scrollTo(index);
    // let current = api?.selectedScrollSnap();
    // current = index;
  };

  return (
    <div className="max-w-6xl mx-auto p-3 py-5 md:py-10">
      <div className="grid md:grid-cols-4 md:gap-5">
        <div className="col-span-3 rounded-lg overflow-hidden relative">
          <Carousel
            className="max-w-full"
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            setApi={setApi}
          >
            <CarouselContent>
              <CarouselItem
                onClick={() => {
                  setCurrentImageIndex(1);
                  setIsLightboxOpen(true);
                }}
              >
                <img
                  src={CissaMockup}
                  alt="project image"
                  // className="rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                {" "}
                <img
                  src={PathwayMockup}
                  alt="project image"
                  // className="rounded-xl"
                />
              </CarouselItem>
              <CarouselItem>
                {" "}
                <img
                  src={CissaMockup}
                  alt="project image"
                  // className="rounded-xl"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-2" />
            <CarouselNext className="absolute right-2" />

            {/* Dots Navigation */}
            <div className="flex justify-center space-x-2 py-4">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    current - 1 === index ? "bg-primary" : "bg-gray-300"
                  }`}
                  onClick={() => handleSelect(index)}
                />
              ))}
            </div>
          </Carousel>
        </div>
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
      <Lightbox
        index={currentImageIndex}
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        slides={[
          { src: CissaMockup },
          { src: PathwayMockup },
          { src: CissaMockup },
        ]}
      />
    </div>
  );
};

export default ProjectDetails;
