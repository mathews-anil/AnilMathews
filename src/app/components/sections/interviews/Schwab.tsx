import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdAccessTime, MdKeyboardArrowRight } from "react-icons/md";

const Schwab = () => {
  return (
    <div className="px-4 max-w-[1920px] mx-auto py-[35px] lg:pt-[80px] lg:pb-[130px]  w-full xl:w-[1100px] flex flex-col gap-[30px] lg:gap-[70px]">
      <div className="flex flex-col gap-[20px] lg:gap-[30px] text-left">
        <h1
          className="font-charter text-[36px] lg:text-[64px] leading-[36px] lg:leading-[64px] text-[#111111]"
          style={{ letterSpacing: "-2px" }}
        >
          Schwab Network Interview
        </h1>
        <div className="flex gap-2 lg:gap-6 items-center text-[#1A3470] font-inter text-base lg:text-xl ">
          <MdAccessTime />
          <span>
            <span className="mr-2">March 23, 2023 </span> 04:38 MINS
          </span>
        </div>
        <p className="text-[#111111] opacity-65 font-inter text-base lg:text-xl">
          Anil Mathews joined Nicole Petallides on Schwab Network ahead of Near
          Intelligence’s trading debut to give a concise overview of the company
          and discuss the timing of the Nasdaq listing under ticker NIR. The
          segment teased the appearance with the line “NIR makes its trading
          debut tomorrow”.
        </p>
      </div>
      <div className="flex flex-col gap-[20px] lg:gap-[25px] ">
        <h3 className="font-charter text-xl lg:text-[32px] text-[#1A1A1A] ">
          Key notes
        </h3>
        <div className="flex flex-col gap-2 lg:gap-4  ">
          <div className=" flex gap-2 lg:gap-4 items-start ">
            <Image
              src="/images/interviews/icon.png"
              width={31}
              height={30}
              alt="interview image"
            />
            <p className="text-base lg:text-xl font-inter text-[#111111] ">
              Company overview for viewers: a privacy-led data intelligence
              platform used by brands for insights on people, places and
              products.
            </p>
          </div>
          <div className=" flex gap-2 lg:gap-4 items-start ">
            <Image
              src="/images/interviews/icon.png"
              width={31}
              height={30}
              alt="interview image"
            />
            <p className="text-base lg:text-xl font-inter text-[#111111] ">
              Context and timing: Near began trading on Nasdaq as “NIR”
              following its SPAC merger; first day of trading was March 24,
              2023.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full ">
        <Image
          src="/images/interviews/interview2.png"
          width={1058}
          height={536}
          alt="interview image"
          className="rounded-[14px] lg:rounded-[24px] min-h-[320px] lg:min-h-auto object-cover"
        />
        <Link
          href="https://www.facebook.com/tdameritradenetwork/videos/near-nir-ceo-anir-mathews-with-a-company-overview/239237531816869/?_rdr"
          target="_blank"
          rel="nofollow noopener"
        >
          <Image
            src="/images/interviews/play.png"
            width={64}
            height={64}
            alt="interview image"
            className="absolute top-[calc(50%-32px)] left-[calc(50%-32px)] cursor-pointer"
          />
        </Link>
      </div>
      <div className="lg:mt-[-20px] flex flex-col sm:flex-row flex-wrap gap-4 w-full justify-center items-center">
        <Link className="w-full md:w-[316px]"
          href="https://www.facebook.com/tdameritradenetwork/videos/near-nir-ceo-anir-mathews-with-a-company-overview/239237531816869/?_rdr"
          target="_blank"
          rel="nofollow noopener"
        >
          <button className="cursor-pointer mx-auto md:mx-0 w-full md:w-[316px] bg-[#1A3470] text-[#E8DCCB] h-[46px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium ">
            Watch on Schwab Network {" "}
            <MdKeyboardArrowRight className="text-2xl" />
          </button>
        </Link>
        <Link href="/press" className="w-full md:w-[189px]">
          <button className="cursor-pointer mx-auto md:mx-0 w-full md:w-[189px] bg-[#E8DCCB03] backdrop-blur-[25px] border border-[#11141826] flex justify-center items-center gap-2 text-[#111111] h-[46px] rounded-full uppercase text-sm font-inter font-medium ">
            See all press <MdKeyboardArrowRight className="text-2xl" />
          </button>
        </Link>
        <Link href="/about-anil-mathews" className="w-full md:w-[254px]">
          <button className="cursor-pointer mx-auto md:mx-0 w-full md:w-[254px] bg-[#E8DCCB03] backdrop-blur-[25px] border border-[#11141826] flex justify-center items-center gap-2 text-[#111111] h-[46px] rounded-full uppercase text-sm font-inter font-medium ">
            About Anil Mathews <MdKeyboardArrowRight className="text-2xl" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Schwab;
