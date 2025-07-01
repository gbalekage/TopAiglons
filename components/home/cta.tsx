"use client";
import { ctaData } from "@/constants";
import { Button } from "../ui/button";
import Image from "next/image";
import { ctaBanner } from "@/assets";
import React from "react";
import * as Variants from "@/lib/motion";
import { motion } from "motion/react";

const CallToAction = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,0.7fr] lg:items-center bg-blue-500/20 rounded-xl border-t border-primary-foreground/30 overflow-hidden">
          {/* Texts and buttons */}
          <div className="p-8 md:p-16 xl:p-20">
            <motion.h2
              variants={Variants.fadeInUp}
              initial="start"
              whileInView="end"
              className="text-[26px] leading-tight font-semibold mb-6 capitalize sm:text-[34px] md:text-[40px] lg:text-[46px] lg:mb-10"
            >
              {ctaData.text}
            </motion.h2>

            <motion.div
              variants={Variants.fadeInUp}
              initial="start"
              whileInView="end"
              className="flex items-center gap-3 lg:gap-4"
            >
              <Button className="">Get Started</Button>
              <Button variant={"outline"} className="">
                Pricing and Plans
              </Button>
            </motion.div>
          </div>

          {/* Image */}
          {/* <figure className="">
            <Image src={ctaBanner} alt="" />
          </figure> */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
