"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = [
    "/images/home/partner1.png",
    "/images/home/partner2.png",
    "/images/home/partner3.png",
    "/images/home/partner4.png",
    "/images/home/partner5.png",
    "/images/home/partner6.png",
    "/images/home/partner7.png",
];

// Ek baar zyada repeat kar do (3 copies) taake jump na aaye
const repeatedLogos = [...logos, ...logos, ...logos];

const Partners = () => {
    return (
        <div className="w-full lg:w-[1076px] mx-auto flex flex-col gap-4 md:gap-8 justify-center items-center py-8 md:py-[120px]">
            <p className="font-inter text-sm md:text-base uppercase text-[#1A1A1A] " style={{letterSpacing:"-0.16px"}}>
                As seen on
            </p>
            <div className="relative w-full mx-auto lg:mx-0 z-10">

                <div
                    className="absolute inset-0 z-20 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(90deg, #F7F4F1 0%, rgba(247,244,241,0) 15%, rgba(247,244,241,0) 85%, #F7F4F1 100%)",
                    }}
                ></div>

                <Marquee gradient={false} speed={30}>
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`Logo ${index + 1}`}
                            className="object-contain mx-5 "
                        />
                    ))}
                </Marquee>

            </div>


        </div>
    );
};

export default Partners;