"use client";

import { heroData } from "@/constants";
import React, { useRef } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { heroBanner } from "@/assets";
import Link from "next/link";
import {
  motion,
  Variants,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const heroVariant: Variants = {
  start: {},
  end: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const heroChildVarinat: Variants = {
  start: {
    y: 30,
    opacity: 0,
    filter: "blur(5px)",
  },
  end: {
    y: 0,
    opacity: 1,
    filter: "blur(0)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  const heroBannerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroBannerRef,
    offset: ["start 1080px", "50% start"],
  });

  const scrollYTransform = useTransform(scrollYProgress, [0, 1], [0.85, 1.15]);

  const scale = useSpring(scrollYTransform, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="py-32 md:py-36">
      <motion.div
        variants={heroVariant}
        initial="start"
        animate="end"
        className="container text-center"
      >
        <div className="max-w-screen-md mx-auto">
          <motion.p
            variants={heroChildVarinat}
            className="text-sm uppercase tracking-wider bg-secondary/50 text-secondary-foreground max-w-max mx-auto px-3 py-1 rounded-full border-t border-blue-500/10 backdrop-blur-3xl mb-6 md:mb-10"
          >
            {heroData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={heroChildVarinat}
            className="text-4xl font-semibold !leading-tight mb-4 md:text-5xl md:mb-5 lg:text-6xl"
          >
            {heroData.sectionTitle}
            <span className="relative isolate ms-4">
              {heroData.decoTitle}{" "}
              <span className="absolute -z-10 top-2 -left-6 -right-4 bottom-0.5 bg-foreground/5 rounded-full px-8 ms-3 border-t border-foreground/20 shadow-[inset_0px_0px_30px_0px] shadow-foreground/20 md:top-3 md:bottom-1 lg:top-4 lg:bottom-2"></span>
            </span>
          </motion.h2>

          <motion.p
            variants={heroChildVarinat}
            className="text-muted-foreground text-xs md:text-sm"
          >
            {heroData.sectionText}
          </motion.p>

          <motion.div
            variants={heroChildVarinat}
            className="flex justify-center gap-2 mt-6 md:mt-10"
          >
            <Button size={"sm"}>
              <Link href={"/dashboard"}>Start Now</Link>
            </Button>
            <Button variant={"outline"}>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>

        <div className="relative mt-12 max-w-screen-xl mx-auto isolate rounded-xl md:mt-16">
          <motion.figure
            initial={{
              y: 120,
              opacity: 0,
              filter: "blur(5px)",
            }}
            animate={{
              y: 0,
              opacity: 1,
              filter: "blur(0)",
            }}
            transition={{
              duration: 1.5,
              delay: 0.5,
              ease: "backInOut",
            }}
            ref={heroBannerRef}
            style={{ scale }}
            className="bg-background/60 border border-slate-800 backdrop-blur-3xl rounded-xl shadow-2xl overflow-hidden"
          >
            <Image
              src={heroBanner}
              alt="Hero Banner"
              width={1468}
              height={816}
              priority
            />
          </motion.figure>

          <motion.div
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: "backInOut",
            }}
            className="absolute bg-blue-500/20 inset-5 blur-[50px] -z-10"
          ></motion.div>
          <motion.div
            initial={{
              scale: 0.4,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 2,
              delay: 1.5,
              ease: "backOut",
            }}
            className="absolute inset-0 bg-blue-500/20 blur-[200px] scale-y-75 scale-x-125 rounded-full -z-10"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
