import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const OperatingBelief = () => {
  return (
    <div className="bg-[#111111]">
      <div className="belief_bg">
        <div className=" my-[60px] lg:my-[160px] mx-auto py-[60px] lg:py-[156px] px-[38px] w-full md:w-[650px] gap-[24px]  flex flex-col items-center justify-center text-center">
          <h2
            className="font-charter  leading-[36px] lg:leading-[64px] text-[36px] lg:text-[45px] 2xl:text-[64px] text-[#E8DCCB]"
            style={{ letterSpacing: "-2px" }}
          >
            Operating Belief
          </h2>
          <p className="text-[#F7F4F1] opacity-65 font-inter text-base lg:text-xl lg:mb-[10px]">
            Big outcomes start with small, repeatable wins. Every Alphabyte
            product is built around that idea.
          </p>
          <div className="mt-[20px] flex flex-col sm:flex-row flex-wrap gap-4 w-full">
            <Link href=" /about-anil-mathews">
              <button className="cursor-pointer mx-auto md:mx-0 w-full md:w-[254px] bg-[#1A3470] text-[#E8DCCB] h-[50px] lg:h-[46px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium ">
                About Anil Mathews <MdKeyboardArrowRight className="text-2xl" />
              </button>
            </Link>
            <Link href="/press">
              <button className="cursor-pointer mx-auto md:mx-0 w-full md:w-[121px] bg-[#11141803] backdrop-blur-[25px] border border-[#F7F4F126] flex justify-center items-center gap-2 text-[#E8DCCB] h-[44px] lg:h-[46px] rounded-full uppercase text-sm font-inter font-medium ">
                Press <MdKeyboardArrowRight className="text-2xl" />
              </button>
            </Link>
            <Link href="/speaking">
              <button className="cursor-pointer mx-auto md:mx-0 w-full md:w-[151px] bg-[#11141803] backdrop-blur-[25px] border border-[#F7F4F126] flex justify-center items-center gap-2 text-[#E8DCCB] h-[44px] lg:h-[46px] rounded-full uppercase text-sm font-inter font-medium ">
                Speaking <MdKeyboardArrowRight className="text-2xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperatingBelief;
