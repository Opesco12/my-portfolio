import { LayoutTemplate, MonitorSmartphone, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Application Development",
    description:
      "Responsive, accessible web applications and dashboards built around your product goals and users.",
    icon: MonitorSmartphone,
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications for iOS and Android, built with React Native and Expo.",
    icon: Smartphone,
  },
  {
    title: "Landing Pages & Business Websites",
    description:
      "Fast, polished websites that communicate your offer clearly and work beautifully on every screen.",
    icon: LayoutTemplate,
  },
];

const Services = () => {
  return (
    <motion.section
      id="services"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="bg-[#f6f2e9] px-5 py-16 sm:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-base font-semibold uppercase tracking-[0.2em] text-primary">
          Services I offer
        </p>
        <div className="mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight text-[#171717] md:text-5xl">
            How I can help bring your idea to life.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-3">
          {services.map(({ title, description, icon: Icon }) => (
            <motion.article
              key={title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="group flex min-h-72 flex-col rounded-2xl border border-primary/10 bg-white p-6 shadow-sm md:p-7"
            >
              <div className="flex items-start">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-lighter-primary text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon
                    size={23}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="mt-auto pt-10">
                <h3 className="text-xl font-semibold leading-snug text-[#24211e]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#625c55]">
                  {description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
