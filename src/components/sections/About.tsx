import { motion } from "framer-motion";

import emmanuelPortrait from "@/assets/emmanuel-portrait.png";

type AnimatedWordProps = {
  text: string;
  startIndex: number;
  className?: string;
};

const AnimatedWord = ({
  text,
  startIndex,
  className = "",
}: AnimatedWordProps) => (
  <span
    aria-hidden="true"
    className={`inline-block whitespace-nowrap ${className}`}
  >
    {[...text].map((letter, index) => (
      <motion.span
        key={`${letter}-${index}`}
        className="inline-block"
        style={{ fontFamily: "inherit" }}
        initial={{ opacity: 0, y: "0.25em" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.35,
          delay: 0.2 + (startIndex + index) * 0.055,
          ease: "easeOut",
        }}
      >
        {letter}
      </motion.span>
    ))}
  </span>
);

const About = () => {
  return (
    <>
      <section className="relative flex min-h-[calc(100svh-76px)] items-center justify-center overflow-hidden bg-[#f6f2e9] px-5 py-24 text-center sm:px-8 md:py-28">
        <motion.div
          className="mx-auto flex w-full max-w-6xl flex-col items-center"
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1
            aria-label="Hello, I'm Emmanuel!"
            className="font-display text-[clamp(3.25rem,8vw,7.75rem)] font-medium leading-[0.9] tracking-[-0.045em] text-[#171717] lg:whitespace-nowrap"
          >
            <AnimatedWord
              text="Hello,"
              startIndex={0}
              className="font-light italic"
            />{" "}
            <AnimatedWord
              text="I'm"
              startIndex={7}
              className="font-light italic text-primary"
            />{" "}
            <AnimatedWord
              text="Emmanuel!"
              startIndex={11}
              className="font-display text-[1.2em] text-primary"
            />
          </h1>

          <p className="mt-8 max-w-3xl text-lg italic leading-relaxed text-[#242424] sm:text-xl md:mt-10 md:text-[1.7rem] md:leading-[1.45]">
            I build web and mobile Applications.
          </p>

          <div
            className="mt-8 flex items-center justify-center gap-4 md:mt-10"
            aria-label="Social links"
          >
            <motion.a
              href="https://github.com/Opesco12"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my GitHub profile"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-lighter-primary text-[#171717] transition-colors hover:bg-primary hover:text-white"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-current"
              >
                <path d="M12 2C6.477 2 2 6.589 2 12.253c0 4.53 2.865 8.374 6.839 9.73.5.094.682-.222.682-.493 0-.243-.009-.888-.014-1.743-2.782.619-3.369-1.375-3.369-1.375-.455-1.185-1.11-1.5-1.11-1.5-.908-.636.069-.623.069-.623 1.003.072 1.531 1.056 1.531 1.056.892 1.567 2.341 1.115 2.91.852.091-.663.349-1.115.635-1.371-2.221-.259-4.555-1.14-4.555-5.067 0-1.119.39-2.034 1.029-2.751-.103-.259-.446-1.302.098-2.713 0 0 .84-.276 2.75 1.051A9.37 9.37 0 0 1 12 6.96a9.37 9.37 0 0 1 2.504.346c1.909-1.327 2.748-1.051 2.748-1.051.545 1.411.202 2.454.099 2.713.64.717 1.028 1.632 1.028 2.751 0 3.937-2.338 4.805-4.566 5.059.359.317.679.944.679 1.903 0 1.374-.013 2.482-.013 2.819 0 .274.18.592.688.492C19.138 20.626 22 16.785 22 12.253 22 6.589 17.523 2 12 2Z" />
              </svg>
            </motion.a>

            <motion.a
              href="https://x.com/Opesco123"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit my X profile"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-lighter-primary text-[#171717] transition-colors hover:bg-primary hover:text-white"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-[18px] w-[18px] fill-current"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
              </svg>
            </motion.a>

            <motion.a
              href="mailto:oyelekemmanuel@gmail.com"
              aria-label="Send me an email"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-lighter-primary text-[#171717] transition-colors hover:bg-primary hover:text-white"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-none stroke-current"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </motion.a>
          </div>

          <a
            href="#contact"
            className="group mt-20 inline-flex flex-col items-center font-display text-2xl italic text-primary md:mt-28 md:text-[2rem]"
          >
            Hire me
            <svg
              aria-hidden="true"
              viewBox="0 0 150 18"
              className="mt-1 h-4 w-36 overflow-visible transition-transform duration-300 group-hover:scale-x-105"
              fill="none"
            >
              <path
                d="M2 8.5C39 1.5 91 1 148 5.5M7 15.5C51 5.5 102 8 146 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </a>
        </motion.div>
      </section>

      <section
        id="about"
        className="bg-white px-5 py-16 sm:px-8 md:py-24"
      >
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16"
        >
          <div className="overflow-hidden rounded-[2rem] bg-[#e3e3e3]">
            <img
              src={emmanuelPortrait}
              alt="Portrait of Emmanuel Oyeleke"
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About me
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-[#171717] sm:text-5xl">
              A little more about me.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f5a54]">
              I&apos;m a software developer who enjoys turning ideas into
              thoughtful, easy-to-use digital experiences. When I&apos;m not
              coding, you&apos;ll probably find me at a chessboard or playing
              the keyboard.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
