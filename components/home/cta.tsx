"use client";

import React from "react";
import * as Variants from "@/lib/motion";
import { motion } from "motion/react";
import { ctaData } from "@/constants";
import { Button } from "../ui/button";
import Image from "next/image";
import { ctaBanner } from "@/assets";

const CallToAction = () => {
  return (
    <section className="section">
      <div className="container">
        <motion.div className="bg-primary rounded-xl border-t border-primary-foreground/30 overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr,0.7fr] lg:items-center">
          <div className="p-8 md:p-16 xl:p-20">
            <motion.h2 className="">{ctaData.text}</motion.h2>

            <motion.div className="">
              <Button className="">Start Now</Button>
              <Button variant={"outline"} className="">
                Pricings and plans
              </Button>
            </motion.div>
          </div>

          <motion.figure className="">
            <Image src={ctaBanner} alt="CTA-BANNER" className="" />
          </motion.figure>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
