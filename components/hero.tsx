import React from "react";
import { MapPin, Smile } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between w-full px-4 sm:px-8 md:px-0 mb-4 lg:mb-6 relative"
      >
        <Image
          src={"/pr_logo.png"}
          className="w-18 sm:w-12 md:w-24 md:-ml-4 invert-0 dark:invert"
          height={499}
          width={499}
          alt="PR Logo"
        />

        <p className="ise text-3xl sm:text-4xl md:text-5xl text-foreground">
          Prasad Reddy, 23
        </p>

        <Image
          src={"/arrow_cursive.png"}
          alt="Arrow Image"
          height={400}
          width={300}
          className="absolute top-12 lg:top-14 scale-80 md:scale-100 right-4 lg:-right-10 w-12 -rotate-12 invert-0 dark:invert"
        />
      </motion.div>

      <div className="flex flex-col-reverse md:flex-row items-start gap-12 px-6 sm:px-8 md:px-0 w-full mb-6">
        {/* Left content */}
        <motion.div
          className="flex-1"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          <section>
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45 }}
              className="text-3xl sm:text-4xl font-medium leading-tight tracking-wide ise"
            >
              Product-driven <br />
              Full Stack Engineer.
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45 }}
              className="mt-4 text-sm sm:text-base text-foreground/70 isa flex items-center gap-1.5 flex-wrap"
            >
              <span>Work</span>
              <Link
                target="_blank"
                href={"https://congkong.net"}
                className="text-foreground font-medium transition duration-300 cursor-pointer group"
              >
                @Revival Labs
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-foreground"></span>
              </Link>
              <span>,</span>

              <span className="inline-flex items-center gap-0.5">
                <MapPin
                  strokeWidth={1}
                  className="text-foreground size-3.75 md:size-4"
                />
                <span>Seoul, South Korea</span>
              </span>
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45 }}
              className="mt-2 text-base lg:text-lg text-foreground/70 tracking-wide"
            >
              Currently building{" "}
              <Link
                target="_blank"
                href="https://ezra-ai.net"
                className="text-foreground"
              >
                Ezra AI
              </Link>{" "}
              Built 10+ Projects The ones i am most proud of{" "}
              <Link
                target="_blank"
                href="https://linkfolio.space"
                className="text-foreground cursor-pointer"
              >
                Linkfolio
              </Link>
              ,{" "}
              <Link
                target="_blank"
                href="https://digiresume.vercel.app"
                className="text-foreground cursor-pointer"
              >
                DigiResume
              </Link>{" "}
              and some open source contributions{" "}
              <span className="inline-flex items-center gap-1">
                i guess{" "}
                <Smile
                  strokeWidth={1.5}
                  className="text-foreground size-3.75 md:size-4"
                />
              </span>
            </motion.p>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45 }}
              className="mt-3 text-base lg:text-lg text-foreground/80 leading-relaxed"
            >
              I build thoughtful,{" "}
              <span className="text-foreground">Scalable</span>s software with
              attention to detail,
              <span className="text-foreground"> usability</span>, and long-term
              maintainability. I care about clean architecture,{" "}
              <span className="text-foreground">strong UX</span>, and shipping
              things that actually make sense in the real world.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-2 isa relative text-foreground/80"
            >
              <p>Open to work: Full-Time, Freelance</p>

              <Image
                src="/arrow_cursive.png"
                alt="arrow"
                className="w-8 -rotate-100 absolute left-62 -top-2 -translate-y-1/2 hidden md:block invert-0 dark:invert"
                height={200}
                width={200}
              />

              <Link
                className=" text-foreground transition duration-300 cursor-pointer group"
                target="_blank"
                href="mailto:prasadreddymar6@gmail.com"
              >
                @Lets Talk
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-px bg-foreground"></span>
              </Link>
            </motion.div>
          </section>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-fit overflow-hidden rounded-md"
        >
          <Image
            src="https://i.ibb.co/N2j2JqCm/my-image-11zon.png"
            alt="My Image"
            width={400}
            height={400}
            className="grayscale"
          />

          <div className="absolute inset-0 bg-[url('/noise.png')] pointer-events-none z-9" />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
