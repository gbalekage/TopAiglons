import Footer from "@/components/global/footer";
import Header from "@/components/global/header";
import AboutSectionCompanyValues from "@/components/home/about";
import Blog from "@/components/home/blog";
import CallToAction from "@/components/home/cta";
import Faq from "@/components/home/faq";
import Features from "@/components/home/Features";
import Hero from "@/components/home/hero";
import PricingSectionCards from "@/components/home/pricing";
import Process from "@/components/home/Process";
import Reviews from "@/components/home/reviews";
import CardGroup from "@/components/home/stats";
import React from "react";

type Props = {};

const HomePage = (props: Props) => {
  return (
  <>
      <Hero />
      <AboutSectionCompanyValues />
      <CardGroup />
      <Features />
      <PricingSectionCards />
      <Process />
      <Reviews />
      <Blog />
      <Faq />
      <CallToAction />
    </>
  );
};

export default HomePage;
