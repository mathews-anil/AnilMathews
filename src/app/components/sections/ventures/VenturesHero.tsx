import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const VenturesHero = () => {
  return (
    <div className="px-[13px] lg:px-[48px] lg:pt-[66px] w-full">
      <div className="relative bg-[#1A1A1A]/5 w-full flex flex-col lg:flex-row gap-[20px] lg:gap-[50px] max-w-[1817px] mx-auto items-center text-center lg:text-left justify-between rounded-2xl lg:rounded-3xl pt-[26px] px-[14px] lg:pt-[100px] lg:pl-[70px] 2xl:pl-[100px] lg:pr-0">
        <div className="flex flex-col gap-4 lg:gap-8 w-full lg:w-[450px] xl:w-[500px] 2xl:w-[550px] lg:mb-[100px] venture_content">
          <h2
            className="font-charter leading-[100%] text-[36px] lg:text-[40px] xl:text-[30px] 2xl:text-[64px] text-[#111111]"
            style={{ letterSpacing: "-2px" }}
          >
            Alphabyte Ventures builds focused software for small and mid-market
            teams.
          </h2>

          <p className="text-[#111111] opacity-65 font-inter text-base lg:text-lg xl:text-base 2xl:text-xl leading-[150%]">
            We apply AI where it matters most: research, prototyping, data
            pipelines, and customer support. Each product is a test of one
            belief: clarity scales faster than size.
          </p>

          <div className=" flex flex-col sm:flex-row flex-wrap gap-4 w-full">
            <Link
              href="https://www.alphabyte.com/"
              target="_blank"
              rel="noopener"
              className="cursor-pointer mx-auto md:mx-0 w-full md:w-[301px] bg-[#1A3470] text-[#E8DCCB] h-[46px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium "
            >
              Visit Alphabyte Ventures{" "}
              <MdKeyboardArrowRight className="text-2xl" />
            </Link>
          </div>
        </div>

        <div className="bg-[#F7F4F1] lg:pt-[13px] lg:pl-[15px] rounded-tl-[32px] w-full lg:w-[600px] xl:w-[700px] 2xl:w-[800px] self-end venture_img">
          <Image
            src="/images/ventures/hero.png"
            width={991}
            height={575}
            alt='Alphabyte Ventures'
            className="min-h-[225px] lg:min-h-auto object-center object-cover rounded-t-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default VenturesHero;
