import React from "react";
import AboutHero from "../components/sections/about/AboutHero";
import Idea from "../components/sections/about/Idea";
import Building from "../components/sections/about/Building";
import Principles from "../components/sections/about/Principles";
import OffTheClock from "../components/sections/about/OffTheClock";
import Media from "../components/sections/home/Media";
import Footer from "../components/layout/Footer";

export const metadata = {
  title: "About Anil Mathews | Entrepreneur and Author",
  description:
    "Background, milestones, and operating beliefs from Anil Mathews, founder who led Near Intelligence to a Nasdaq listing and now builds focused software at Alphabyte Ventures.",
  alternates: {
    canonical: "https://www.anilmathews.com/about-anil-mathews",
  },
  openGraph: {
    type: "website",
    url: "https://www.anilmathews.com/about-anil-mathews",
    title: "About Anil Mathews | Entrepreneur and Author",
    description:
      "Background, milestones, and operating beliefs from Anil Mathews, founder who led Near Intelligence to a Nasdaq listing and now builds focused software at Alphabyte Ventures.",
    images: ["/images/og-home-1200x630.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Anil Mathews | Entrepreneur and Author",
    description:
      "Background, milestones, and operating beliefs from Anil Mathews, founder who led Near Intelligence to a Nasdaq listing and now builds focused software at Alphabyte Ventures.",
    images: ["/images/og-home-1200x630.jpeg"],
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
