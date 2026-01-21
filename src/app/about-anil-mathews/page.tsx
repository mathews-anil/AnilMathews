import React from "react";
import AboutHero from "../components/sections/about/AboutHero";
import Idea from "../components/sections/about/Idea";
import Building from "../components/sections/about/Building";
import Principles from "../components/sections/about/Principles";
import OffTheClock from "../components/sections/about/OffTheClock";
import Media from "../components/sections/home/Media";
import Footer from "../components/layout/Footer";

export const metadata = {
  title: "About Anil Mathews",
  description:
    "Biography, milestones, and operating principles from Anil Mathews, who founded Near Intelligence and led it to a Nasdaq listing, and now leads Alphabyte Ventures.",
  alternates: {
    canonical: "https://www.anilmathews.com/about-anil-mathews",
  },
  openGraph: {
    type: "website",
    url: "https://www.anilmathews.com/about-anil-mathews",
    title: "About Anil Mathews",
    description:
      "Biography, milestones, and operating principles from Anil Mathews, who founded Near Intelligence and led it to a Nasdaq listing, and now leads Alphabyte Ventures.",
    images: ["https://www.anilmathews.com/images/og-home-1200x630.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Anil Mathews",
    description:
      "Biography, milestones, and operating principles from Anil Mathews, who founded Near Intelligence and led it to a Nasdaq listing, and now leads Alphabyte Ventures.",
    images: ["https://www.anilmathews.com/images/og-home-1200x630.jpeg"],
  },
};

const page = () => {
  return (
    <div className="bg-[#F7F4F1]">
      <AboutHero />
      <Idea />
      <Building />
      <Principles />
      <OffTheClock />
      <Media />
      <Footer />
    </div>
  );
};

export default page;
