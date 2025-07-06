import FeatureSectionSimple from "@/components/domains/Features";
import DomainHero from "@/components/domains/hero";
import FeaturedJobSlider from "@/components/domains/popular";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <DomainHero />
      <FeaturedJobSlider />
      <FeatureSectionSimple />
    </>
  );
};

export default Page;
