import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import QRCode from "react-qr-code";
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
  type CarouselApi,
} from "@/components/ui/carousel";
import { myProjects } from "@/projects";

const getProjectCategory = (technologies: string[], isMobile?: boolean) => {
  const normalizedTechnologies = technologies.map((technology) =>
    technology.toLowerCase(),
  );
  const hasWeb = normalizedTechnologies.includes("react");
  const hasMobile =
    isMobile ||
    normalizedTechnologies.includes("react native") ||
    normalizedTechnologies.includes("react-native");

  if (hasWeb && hasMobile) return "Web & Mobile Application";
  if (hasMobile) return "Mobile Application";
  return "Web Application";
};

const ProjectDetails = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [currentImage, setCurrentImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const project = useMemo(
    () =>
      myProjects.find(
        (projectItem) =>
          _.kebabCase(projectItem.title) === params.project,
      ),
    [params.project],
  );

  const projectIndex = project ? myProjects.indexOf(project) : -1;
  const nextProject =
    projectIndex >= 0
      ? myProjects[(projectIndex + 1) % myProjects.length]
      : undefined;

  useEffect(() => {
    if (!params.project) {
      navigate("/", { replace: true });
    } else if (!project) {
      navigate("/projects", { replace: true });
    }
  }, [navigate, params.project, project]);

  useEffect(() => {
    if (!api) return;

    const updateCurrentImage = () => setCurrentImage(api.selectedScrollSnap());
    updateCurrentImage();
    api.on("select", updateCurrentImage);
    api.on("reInit", updateCurrentImage);

    return () => {
      api.off("select", updateCurrentImage);
      api.off("reInit", updateCurrentImage);
    };
  }, [api]);

  if (!project) return null;

  const caseStudy = project.caseStudy;
  const category =
    caseStudy?.category ??
    getProjectCategory(project.technologies, project.mobileApp);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="w-full px-5 py-10 sm:px-8 md:py-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#625c55] transition-colors hover:text-primary"
        >
          <ArrowLeft
            size={17}
            strokeWidth={1.8}
            aria-hidden="true"
          />
          Back to all projects
        </Link>

        <header className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {category}
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-medium leading-[0.98] tracking-[-0.035em] text-[#171717] sm:text-6xl md:text-7xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#625c55]">
              {project.subtitle}
            </p>
          </div>

          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-dark-primary"
            >
              View live project
              <ArrowUpRight
                size={18}
                strokeWidth={1.8}
                aria-hidden="true"
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          )}
        </header>

        <section
          aria-label="Project gallery"
          className="mt-12 overflow-hidden rounded-[2rem] border border-primary/10 bg-[#ead8cc] p-3 sm:p-5 md:mt-16 md:p-8"
        >
          <Carousel
            setApi={setApi}
            opts={{ loop: project.images.length > 1 }}
            className="w-full"
          >
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={image}>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentImage(index);
                      setIsLightboxOpen(true);
                    }}
                    aria-label={`Open ${project.title} screenshot ${index + 1}`}
                    className="block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-white shadow-[0_20px_55px_rgba(75,46,29,0.16)]"
                  >
                    <img
                      src={image}
                      alt={`${project.title} interface screenshot ${index + 1}`}
                      className="aspect-[16/9] w-full object-contain"
                    />
                  </button>
                </CarouselItem>
              ))}
            </CarouselContent>

            {project.images.length > 1 && (
              <>
                <CarouselPrevious className="left-3 border-primary/10 bg-white/90 md:left-5" />
                <CarouselNext className="right-3 border-primary/10 bg-white/90 md:right-5" />
              </>
            )}

            {project.images.length > 1 && (
              <div className="flex justify-center gap-2 pt-5">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show screenshot ${index + 1}`}
                    aria-current={currentImage === index ? "true" : undefined}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentImage === index
                        ? "w-7 bg-primary"
                        : "w-2 bg-primary/25 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>
            )}
          </Carousel>
        </section>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-20">
          <div className="space-y-14">
            <section>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Overview
              </p>
              <p className="mt-5 text-xl leading-9 text-[#403b36] md:text-2xl md:leading-10">
                {caseStudy?.overview ?? project.description}
              </p>
            </section>

            {caseStudy && (
              <>
                <section>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                    Key features
                  </p>
                  <ul className="mt-6 grid gap-x-8 sm:grid-cols-2">
                    {caseStudy.features.map((feature) => (
                      <li
                        key={feature}
                        className="border-t border-primary/20 py-5 text-lg font-medium leading-7 text-[#403b36]"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-[2rem] bg-primary p-7 text-white md:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-lighter-primary">
                    Outcome
                  </p>
                  <p className="mt-5 font-display text-3xl font-medium leading-snug md:text-4xl">
                    {caseStudy.outcome}
                  </p>
                </section>
              </>
            )}
          </div>

          <aside className="h-fit rounded-2xl border border-primary/10 bg-white p-6 shadow-sm lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Project details
            </p>

            <dl className="mt-6 space-y-6">
              {caseStudy?.role && (
                <div>
                  <dt className="text-xs uppercase tracking-[0.16em] text-[#8b8279]">
                    Project scope
                  </dt>
                  <dd className="mt-1.5 font-medium leading-6 text-[#292621]">
                    {caseStudy.role}
                  </dd>
                </div>
              )}

              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-[#8b8279]">
                  Technologies
                </dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-[#f6f2e9] px-3 py-1.5 text-xs font-medium capitalize text-[#5f5a54]"
                    >
                      {technology}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            {project.mobileApp && project.expoUrl && (
              <div className="mt-7 border-t border-primary/10 pt-7">
                <QRCode
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={project.expoUrl}
                  viewBox="0 0 256 256"
                />
                <p className="mt-3 text-center text-sm text-[#625c55]">
                  Scan to open in Expo Go
                </p>
              </div>
            )}

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-dark-primary"
              >
                View live project
                <ArrowUpRight
                  size={17}
                  aria-hidden="true"
                />
              </a>
            )}
          </aside>
        </div>

        {nextProject && (
          <section className="mt-20 border-t border-primary/10 pt-10 md:mt-28 md:pt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Next project
            </p>
            <Link
              to={`/projects/${_.kebabCase(nextProject.title)}`}
              className="group mt-5 flex items-end justify-between gap-6"
            >
              <span className="max-w-4xl font-display text-4xl font-medium leading-tight text-[#171717] transition-colors group-hover:text-primary sm:text-5xl md:text-6xl">
                {nextProject.title}
              </span>
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:h-14 md:w-14">
                <ArrowUpRight
                  size={22}
                  aria-hidden="true"
                />
              </span>
            </Link>
          </section>
        )}
      </div>

      <Lightbox
        index={currentImage}
        open={isLightboxOpen}
        close={() => setIsLightboxOpen(false)}
        slides={project.images.map((image) => ({ src: image }))}
      />
    </motion.main>
  );
};

export default ProjectDetails;
