import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="px-4 py-8 md:px-40 md:py-12"
    >
      <motion.div
        className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm md:p-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-base font-semibold uppercase tracking-[0.2em] text-primary">
              About Me
            </p>
          </div>

          <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
            Hi, I&apos;m Emmanuel,
            <br />A Software Developer.
          </h2>

          <div className="mt-6 max-w-4xl space-y-5">
            <p className="text-lg leading-8 text-gray-700 md:text-2xl md:leading-10">
              I build beautiful, efficient user interfaces that help products
              feel clear, modern, and easy to use.
            </p>
            <p className="text-lg leading-8 text-gray-700 md:text-2xl md:leading-10">
              Programming is my creative outlet. I work across JavaScript,
              TypeScript, Python, React, and React Native to turn ideas into
              polished digital experiences.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 md:mt-10">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="h-12 w-12 cursor-pointer rounded-full bg-light-primary flex items-center justify-center"
            >
              <a
                href="https://github.com/Opesco12"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 30 30"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="h-12 w-12 rounded-full bg-light-primary flex items-center justify-center"
            >
              <a
                href="https://x.com/Opesco123"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 30 30"
                >
                  <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
                </svg>
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="h-12 w-12 rounded-full bg-light-primary flex items-center justify-center"
            >
              <a
                href="mailto:oyelekemmanuel@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="25"
                  height="25"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#4caf50"
                    d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                  ></path>
                  <path
                    fill="#1e88e5"
                    d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                  ></path>
                  <polygon
                    fill="#e53935"
                    points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                  ></polygon>
                  <path
                    fill="#c62828"
                    d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                  ></path>
                  <path
                    fill="#fbc02d"
                    d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                  ></path>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
