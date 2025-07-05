"use client";

import React from "react";

type Props = {};
import { motion } from "motion/react";
import { featureData } from "@/constants";
import FeaturesCard from "./FeaturesCard";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import * as Variants from "@/lib/motion";

const Features = (props: Props) => {
  return (
    <section className="section">
      <div className="container">
        <div className="section__head">
          <motion.p
            variants={Variants.fadeInUp}
            initial="start"
            whileInView="end"
            className="section__subtitle"
          >
            {featureData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={Variants.fadeInUp}
            initial="start"
            whileInView="end"
            className="section__title"
          >
            {featureData.sectionTitle}
          </motion.h2>

          <motion.p
            variants={Variants.fadeInUp}
            initial="start"
            whileInView="end"
            className="section__text"
          >
            {featureData.sectionText}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-6">
          {featureData.features.map(
            ({ icon, iconBoxColor, title, desc, imgSrc, link }, index) => (
              <FeaturesCard
                key={index}
                classes={
                  index < 2
                    ? "md:col-span-2 lg:col-span-1 xl:col-span-3"
                    : "xl:col-span-2"
                }
              >
                <>
                  <div className="p-8">
                    <motion.div
                      variants={Variants.fadeInUp}
                      className={`w-10 h-10 grid place-items-center rounded-md flex-shrink-0 ${iconBoxColor}`}
                    >
                      {icon}
                    </motion.div>

                    <motion.h3
                      variants={Variants.fadeInUp}
                      className="text-foreground text-xl font-medium mt-4 mb-3"
                    >
                      {title}
                    </motion.h3>
                    <motion.p
                      variants={Variants.fadeInUp}
                      className="text-muted-foreground line-clamp-2"
                    >
                      {desc}
                    </motion.p>

                    <motion.div variants={Variants.fadeInUp}>
                      <a
                        href={link}
                        className="mt-3 flex items-center gap-1 hover:underline cursor-pointer"
                      >
                        <span> Lear More</span>
                        <ArrowRight className="size-4 mt-1" />
                      </a>
                    </motion.div>
                  </div>

                  {imgSrc && (
                    <motion.figure
                      variants={Variants.fadeInUp}
                      className="p-6 pt-0"
                    >
                      <Image src={imgSrc} alt={title} priority />
                    </motion.figure>
                  )}
                </>
              </FeaturesCard>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
