"use client";

import React from "react";
import { motion } from "motion/react";
import * as Variants from "@/lib/motion";
import { blogData } from "@/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Blog = () => {
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
            {blogData.sectionSubtitle}
          </motion.p>

          <motion.h2
            variants={Variants.fadeInUp}
            initial="start"
            whileInView="end"
            className="section__title"
          >
            {blogData.sectionTitle}
          </motion.h2>

          <motion.p
            variants={Variants.fadeInUp}
            initial="start"
            whileInView="end"
            className="section__text"
          >
            {blogData.sectionText}
          </motion.p>
        </div>

        <motion.div
          variants={Variants.staggerContainer}
          initial="start"
          whileInView="end"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {blogData.blogs.map(
            (
              {
                imgSrc,
                title,
                badge,
                description,
                author: { avatarSrc, authorName, publishDate },
              },
              index
            ) => (
              <motion.div variants={Variants.fadeInUp} className="" key={index}>
                <Card className="group">
                  <CardHeader className="">
                    <figure className="rounded-lg overflow-hidden">
                      <Image
                        src={imgSrc}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </figure>
                  </CardHeader>

                  <CardContent>
                    <Badge className="mb-3 bg-blue-500">{badge}</Badge>
                    <CardTitle className="leading-normal">
                      <Link
                        className="hover:text-blue-500 transition-colors"
                        href={"#"}
                      >
                        {title.length > 30 ? `${title.slice(0, 30)}...` : title}
                      </Link>
                    </CardTitle>
                    <CardDescription>
                      <p className="text-muted-foreground font-mono mt-2">
                        {description.length > 80
                          ? `${description.slice(0, 80)}...`
                          : description}
                      </p>
                    </CardDescription>
                  </CardContent>

                  <CardFooter className="gap-3">
                    <Avatar>
                      <AvatarImage
                        src={
                          typeof avatarSrc === "string"
                            ? avatarSrc
                            : avatarSrc.src
                        }
                      />
                      <AvatarFallback>{authorName}</AvatarFallback>
                    </Avatar>

                    <div>
                      <p className="text-sm">{authorName}</p>
                      <div className="flex items-center gap-1.5">
                        <time
                          dateTime={publishDate}
                          className="text-muted-foreground text-xs"
                        >
                          {publishDate}
                        </time>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
