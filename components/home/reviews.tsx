"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { reviewData } from "@/constants";
import * as Variants from "@/lib/motion";
import { motion } from "motion/react";

const firstRow = reviewData.reviewCard.slice(
  0,
  reviewData.reviewCard.length / 2
);
const secondRow = reviewData.reviewCard.slice(reviewData.reviewCard.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const Reviews = () => {
  return (
    <section className="section">
      <div className="section__head">
        <motion.p
          variants={Variants.fadeInUp}
          initial="start"
          whileInView="end"
          className="section__subtitle"
        >
          {reviewData.sectionSubtitle}
        </motion.p>

        <motion.h2
          variants={Variants.fadeInUp}
          initial="start"
          whileInView="end"
          className="section__title"
        >
          {reviewData.sectionTitle}
        </motion.h2>
      </div>

      <motion.div
        variants={Variants.fadeInUp}
        initial="start"
        whileInView="end"
        className="relative flex w-full flex-col items-center justify-center overflow-hidden"
      >
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </motion.div>
    </section>
  );
};

export default Reviews;
