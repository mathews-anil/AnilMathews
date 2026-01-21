import React from "react";
import HomeHero from "./components/sections/home/HomeHero";
import Partners from "./components/sections/home/Partners";
import Vision from "./components/sections/home/Vision";
import StartSwitch from "./components/sections/home/StartSwitch";
import Media from "./components/sections/home/Media";
import Footer from "./components/layout/Footer";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

export const metadata = {
  title: "Anil Mathews | Entrepreneur & Author",
  description:
    "Entrepreneur and author Anil Mathews founded Near Intelligence and led it to a Nasdaq listing. He now leads Alphabyte Ventures, building companies across data, software, and applied AI.",
  alternates: {
    canonical: "https://www.anilmathews.com/",
  },
  openGraph: {
    type: "website",
    url: "https://www.anilmathews.com/",
    title: "Anil Mathews | Entrepreneur & Author",
    description:
      "Entrepreneur and author Anil Mathews founded Near Intelligence and led it to a Nasdaq listing. He now leads Alphabyte Ventures, building companies across data, software, and applied AI.",
    images: ["https://www.anilmathews.com/images/og-home-1200x630.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anil Mathews | Entrepreneur & Author",
    description:
      "Entrepreneur and author Anil Mathews founded Near Intelligence and led it to a Nasdaq listing. He now leads Alphabyte Ventures, building companies across data, software, and applied AI.",
    images: ["https://www.anilmathews.com/images/og-home-1200x630.jpeg"],
  },
};

const page = () => {
  return (
    <div className="bg-[#F7F4F1]">
      <HomeHero />
      <Partners />
      <Vision />
      <StartSwitch />
      <Media />
      <Footer />

      <div className="flex-col flex gap-4 fixed bottom-[20px] right-[50px] z-20">
        <Link
          href="https://www.linkedin.com/in/anilmathews"
          className="w-[48px] h-[48px] rounded-full border border-[#88888840] bg-[#111418]/1 hover:bg-white/10 flex justify-center items-center"
        >
          <FaLinkedinIn className="text-[24px] text-[#E8DCCB]" />
        </Link>
      </div>
    </div>
  );
};

export default page;
