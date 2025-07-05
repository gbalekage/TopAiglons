"use client";

import React from "react";
import { motion } from "motion/react";
import * as Variants from "@/lib/motion";
import { processData } from "@/constants";
import Image from "next/image";
import { processBanner } from "@/assets";

const Process = () => {
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
            {processData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={Variants.fadeInUp}
            initial="start"
            whileInView="end"
            className="section__title"
          >
            {processData.sectionTitle}
          </motion.h2>

          <motion.p
            variants={Variants.fadeInUp}
            initial="start"
            whileInView="end"
            className="section__text"
          >
            {processData.sectionText}
          </motion.p>
        </div>

        <div className="grid gap-14 lg:grid-cols-2 lg:items-center ">
          <div className="grid gap-7 lg:gap-10">
            {processData.list.map(({ icon, text, title }, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-4 md:flex-row lg:gap-7"
                variants={Variants.staggerContainer}
                initial="start"
                whileInView="end"
              >
                <motion.div
                  variants={Variants.fadeIn}
                  className="w-16 h-16 grid place-items-center rounded-full border border-foreground/5 shrink-0"
                >
                  {icon}
                </motion.div>
                <div className="grid gap-2 md:gap-3">
                  <motion.h3
                    variants={Variants.fadeInUp}
                    className="text-xl lg:text-2xl"
                  >
                    {title}
                  </motion.h3>
                  <motion.p
                    variants={Variants.fadeInUp}
                    className="text-muted-foreground"
                  >
                    {text}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-lg:-order-1">
            <motion.figure
              variants={Variants.fadeInLeft}
              initial="start"
              whileInView="end"
              className="border rounded-3xl mx-auto bg-blue-500/20 max-w-[580px] overflow-hidden p-8 !pb-0 lg:p-12 lg:pb-0"
            >
              <Image
                width={500}
                height={528}
                src={processBanner}
                alt="Process Banner"
                className="w-full h-full object-contain object-bottom"
                priority
              />
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
