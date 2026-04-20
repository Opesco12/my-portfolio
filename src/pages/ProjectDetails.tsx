import { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { useNavigate, useParams } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import _ from "lodash";
import { motion } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import TechnologyBox from "../components/TechnologyBox";

import { myProjects } from "@/projects";
import type { Project } from "@/types/project";

import { type CarouselApi } from "@/components/ui/carousel";

const ProjectDetails = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [project, setProject] = useState<Project | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (!params.project) {
      navigate("/", { replace: true });
      return;
    }

    const project = myProjects?.find(
      (project) => _.kebabCase(project.title) === params.project,
    );
    if (project) {
      setProject(project);
    } else {
      navigate("/projects", { replace: true });
    }
  }, [navigate, params.project]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleSelect = (index: number) => {
    api?.scrollTo(index);
  };

  const dotsArray = (n: number) => {
    const result = [];
    for (let i = 0; i < n; i++) {
      result.push(i);
    }
    return result;
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.1, duration: 0.5 }}
      viewport={{ once: true, amount: 0.4 }}
      className="mx-auto px-4 md:px-40 py-8 md:py-12"
    >
      <div className="mb-6">
        <h1 className="mt-2 text-3xl font-semibold text-slate-900 md:text-4xl">
          {project?.title}
        </h1>
        <p className="mt-2 text-sm text-slate-600 md:text-base">
          {project?.subtitle}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-4">
        <div className="relative col-span-3 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
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
              {project?.images.slice(1).map((image, index) => (
                <CarouselItem
                  key={image}
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setIsLightboxOpen(true);
                  }}
                >
                  <img
                    src={image}
                    alt="project image"
                    className="mx-auto min-h-100 w-full object-contain"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2" />
            <CarouselNext className="absolute right-2" />

            {/* Dots Navigation */}
            <div className="flex justify-center space-x-2 py-4">
              {api?.scrollSnapList() &&
                dotsArray(api?.scrollSnapList()?.length).map((index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      current === index ? "bg-primary" : "bg-gray-300"
                    }`}
                    onClick={() => handleSelect(index)}
                  />
                ))}
            </div>
          </Carousel>
        </div>
        {project?.mobileApp && (
          <div className="hidden h-fit rounded-2xl border border-slate-200 bg-white p-4 md:block">
            {project?.expoUrl && (
              <>
                <QRCode
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={project?.expoUrl}
                  viewBox={`0 0 256 256`}
                />
                <p className="text-center py-2 text-sm md:text-lg">
                  Scan to open in expo go
                </p>
              </>
            )}

            <a
              href={project?.url}
              target="_blank"
              rel="noreferrer"
              className="my-2 flex w-full items-center justify-center gap-2 rounded-lg bg-black py-4 text-white transition-colors hover:bg-black/85"
            >
              View Live
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-right-icon lucide-chevron-right"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        )}
      </div>

      <div className="my-6 rounded-2xl border border-slate-200 bg-white p-5 md:p-7">
        <p className="font-semibold text-slate-900">Description</p>
        <p className="mt-2 text-justify text-sm text-slate-700 md:text-base">
          {project?.description}
        </p>

        <p className="mt-5 font-semibold text-slate-900">Technologies</p>
        <div className="my-3 flex flex-wrap gap-2">
          {project?.technologies.map((tech, index) => (
            <TechnologyBox
              technology={tech}
              key={index}
            />
          ))}
        </div>

        <div className="mt-6">
          {project?.mobileApp && project?.expoUrl && (
            <div className="my-5 rounded-xl border border-slate-200 bg-slate-50 p-4 md:hidden">
              <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={project.expoUrl}
                viewBox={`0 0 256 256`}
              />
              <p className="py-2 text-center text-sm">
                Scan to open in expo go
              </p>
            </div>
          )}

          {project?.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-black px-4 py-3 text-white transition-colors hover:bg-black/85 md:w-fit"
            >
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
            </a>
          )}
        </div>
      </div>
      {project?.images && (
        <Lightbox
          index={currentImageIndex}
          open={isLightboxOpen}
          close={() => setIsLightboxOpen(false)}
          slides={project?.images.map((image) => {
            return {
              src: image,
            };
          })}
        />
      )}
    </motion.div>
  );
};

export default ProjectDetails;
