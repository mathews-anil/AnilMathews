"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const logos = [
  {
    img: "/images/home/partner1.png",
    link: "https://www.bloomberg.com/news/videos/2023-03-24/near-intelligence-smathews-on-spac-deal-video",
  },
  {
    img: "/images/home/partner2.png",
    link: "https://techcrunch.com/2022/05/19/data-intelligence-startup-near-with-1-6b-anonymized-user-ids-lists-on-nasdaq-via-spac-at-a-1b-market-cap-raises-100m/",
  },
  {
    img: "/images/home/partner3.png",
    link: "https://www.facebook.com/tdameritradenetwork/videos/near-nir-ceo-anir-mathews-with-a-company-overview/239237531816869/?_rdr",
  },
  {
    img: "/images/home/partner4.png",
    link: "https://www.forbes.com/councils/forbestechcouncil/people/anilmathews/",
  },
  {
    img: "/images/home/partner5.png",
    link: "https://www.nasdaq.com/videos/near-intelligence-rings-the-nasdaq-stock-market-opening-bell",
  },
  {
    img: "/images/home/partner6.png",
    link: "https://www.entrepreneur.com/en-in/technology/the-big-daddy-of-data/353257",
  },
  {
    img: "/images/home/partner7.png",
    link: "",
  },
];

// Ek baar zyada repeat kar do (3 copies) taake jump na aaye
const repeatedLogos = [...logos, ...logos, ...logos];

const Partners = () => {
  return (
    <div className="w-full xl:w-[1076px] mx-auto flex flex-col gap-4 md:gap-8 justify-center items-center py-[70px] md:py-[120px]">
      <p
        className="font-inter text-sm md:text-base uppercase text-[#1A1A1A] "
        style={{ letterSpacing: "-0.16px" }}
      >
        As seen on
      </p>
      <div className="relative w-full mx-auto lg:mx-0 z-10">
        <div
          className="absolute w-[100%] inset-0 z-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, #F7F4F1 0%, rgba(247,244,241,0) 15%, rgba(247,244,241,0) 85%, #F7F4F1 100%)",
          }}
        ></div>
          <Marquee gradient={false} speed={30}>
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo.img}
                alt={`Logo ${index + 1}`}
                className=" object-contain mx-10 saturate-0"
              />
            ))}
          </Marquee>
      </div>
    </div>
  );
};

export default Partners;

