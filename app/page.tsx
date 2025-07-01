import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import Blog from "@/components/home/blog";
import CallToAction from "@/components/home/cta";
import Faq from "@/components/home/faq";
import Features from "@/components/home/Features";
import Hero from "@/components/home/hero";
import Process from "@/components/home/Process";
import Reviews from "@/components/home/reviews";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Process />
      <Reviews />
      <Blog />
      <Faq />
      <CallToAction />
      <Footer />
    </>
  );
};

export default HomePage;
