"use client";

import React from "react";
import * as Variants from "@/lib/motion";
import { motion } from "motion/react";
import { faqData } from "@/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const Faq = () => {
  return (
    <section className="section bg-muted">
      <div className="container">
        <div className="section__head">
          <motion.p
            variants={Variants.fadeInUp}
            initial="start"
            whileInView="end"
            className="section__subtitle"
          >
            {faqData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={Variants.fadeInUp}
            initial="start"
            whileInView="end"
            className="section__title"
          >
            {faqData.sectionTitle}
          </motion.h2>

          <motion.p
            variants={Variants.fadeInUp}
            initial="start"
            whileInView="end"
            className="section__text"
          >
            {faqData.sectionText}
          </motion.p>
        </div>

        <motion.div
          variants={Variants.fadeInUp}
          initial="start"
          whileInView="end"
          className="max-w-2xl mx-auto p-4"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqData.items.slice(0, 5).map(({ question, res }, index) => (
              <AccordionItem value={`faq-${index}`} key={index}>
                <AccordionTrigger className="cursor-pointer">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {res}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Faq;
