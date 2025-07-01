"use client";

import React from "react";
import { motion } from "motion/react";

type Props = {
  classes?: string;
  children: React.ReactNode;
};

import * as Variants from "@/lib/motion";
import { BorderBeam } from "../magicui/border-beam";

const FeaturesCard = ({ classes, children }: Props) => {
  return (
    <motion.div
      variants={Variants.staggerContainer}
      initial="start"
      whileInView="end"
      className={`relative overflow-hidden p-[1px] ring ring-inset ring-zinc-800/50 rounded-[14px] ${classes}`}
    >
      <div className="relative isolate bg-card backdrop-blur-md rounded-xl overflow-hidden">
        {children}
      </div>

      <BorderBeam
        duration={6}
        size={400}
        className="from-transparent via-red-500/40 to-transparent"
      />
      <BorderBeam
        duration={6}
        delay={3}
        size={400}
        borderWidth={2}
        className="from-transparent via-blue-500/40 to-transparent"
      />
    </motion.div>
  );
};

export default FeaturesCard;
