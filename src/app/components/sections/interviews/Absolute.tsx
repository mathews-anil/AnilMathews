import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdAccessTime, MdKeyboardArrowRight } from "react-icons/md";

const Absolute = () => {
  return (
    <div className="px-4 max-w-[1920px] mx-auto py-[35px] lg:py-[90px] w-full xl:w-[1100px] flex flex-col gap-[30px] lg:gap-[70px]">
      <div className="flex flex-col gap-[20px] lg:gap-[30px] text-left">
        <h1
          className="font-charter text-[36px] lg:text-[64px] leading-[36px] lg:leading-[64px] text-[#111111]"
          style={{ letterSpacing: "-2px" }}
        >
          Absolute Return Podcast — Episode 231
        </h1>
        <div className="flex gap-2 lg:gap-6 items-center text-[#1A3470] font-inter text-base lg:text-xl ">
          <MdAccessTime />
          <span>
            <span className="mr-2">September 19, 2022 </span> 28:00 MINS
          </span>
        </div>
        <p className="text-[#111111] opacity-65 font-inter text-base lg:text-xl">
          Anil Mathews joined hosts Julian Klymochko and Michael Kesslering on
          the Absolute Return Podcast for episode #231, published September 19,
          2022. The conversation covers the make-up of successful founders, what
          makes enterprise software compelling to build, and practical uses of
          Near’s datasets.
        </p>
      </div>
      <div className="flex flex-col gap-[20px] lg:gap-[25px] ">
        <h3 className="font-charter text-xl lg:text-[32px] text-[#1A1A1A] ">
          Key notes
        </h3>
        <div className="flex flex-col gap-2 lg:gap-4  ">
          <div className=" flex gap-2 lg:gap-4 items-start md:items-center">
            <Image
              src="/images/interviews/icon.png"
              width={31}
              height={30}
              alt="interview image"
            />
            <p className="text-base lg:text-xl font-inter text-[#111111] ">
              Are entrepreneurs born or made.
            </p>
          </div>
          <div className=" flex gap-2 lg:gap-4 items-start md:items-center">
            <Image
              src="/images/interviews/icon.png"
              width={31}
              height={30}
              alt="interview image"
            />
            <p className="text-base lg:text-xl font-inter text-[#111111] ">
              What characteristics make enterprise software attractive for
              builders and operators.
            </p>
          </div>
          <div className=" flex gap-2 lg:gap-4 items-start md:items-center">
            <Image
              src="/images/interviews/icon.png"
              width={31}
              height={30}
              alt="interview image"
            />
            <p className="text-base lg:text-xl font-inter text-[#111111] ">
              How Near’s people-, place-, and product-level datasets are used by
              customers.
            </p>
          </div>
          <div className=" flex gap-2 lg:gap-4 items-start md:items-center">
            <Image
              src="/images/interviews/icon.png"
              width={31}
              height={30}
              alt="interview image"
            />
            <p className="text-base lg:text-xl font-inter text-[#111111] ">
              The most important attribute an entrepreneur needs, according to
              Anil.
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full ">
        <Image
          src="/images/interviews/interview.png"
          width={1058}
          height={536}
          alt="interview image"
          className="rounded-[24px]"
        />
        <Link
          href="https://absolutereturn.podbean.com/e/231-enterprise-software-with-near-ceo-anil-mathews/"
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
      <div className="mt-[-20px] flex flex-col sm:flex-row flex-wrap gap-4 w-full justify-center items-center">
        <Link
          href="https://absolutereturn.podbean.com/e/231-enterprise-software-with-near-ceo-anil-mathews/"
          target="_blank"
          rel="nofollow noopener"
        >
          <button className="cursor-pointer mx-auto md:mx-0 w-full md:w-[313px] bg-[#1A3470] text-[#E8DCCB] h-[46px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium ">
            Listen on Absolute Return {" "}
            <MdKeyboardArrowRight className="text-2xl" />
          </button>
        </Link>
        <Link href="/press">
          <button className="cursor-pointer mx-auto md:mx-0 w-full md:w-[189px] bg-[#E8DCCB03] backdrop-blur-[25px] border border-[#11141826] flex justify-center items-center gap-2 text-[#111111] h-[46px] rounded-full uppercase text-sm font-inter font-medium ">
            See all press <MdKeyboardArrowRight className="text-2xl" />
          </button>
        </Link>
        <Link href="/about-anil-mathews">
          <button className="cursor-pointer mx-auto md:mx-0 w-full md:w-[254px] bg-[#E8DCCB03] backdrop-blur-[25px] border border-[#11141826] flex justify-center items-center gap-2 text-[#111111] h-[46px] rounded-full uppercase text-sm font-inter font-medium ">
            About Anil Mathews <MdKeyboardArrowRight className="text-2xl" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Absolute;
