import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Building = () => {
  return (
    <div className="flex flex-col items-center gap-[50px] lg:gap-[100px] py-[60px] lg:py-[150px] px-4 md:px-[50px] xl:px-[100px] 2xl:px-[130px] vision_section_padding max-w-[1920px] mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-[96px] items-center justify-center ">
        <Image
          src="/images/about/building1.png"
          width={653}
          height={531}
          alt="building image"
          className="w-full order-2 lg:order-1 lg:w-[500px] xl:w-[653px]"
        />
        <div className="flex flex-col gap-6 lg:gap-8 items-center order-1 lg:order-2 lg:items-start text-center lg:text-left w-full lg:w-[500px] xl:w-[566px]">
          <h2
            className="font-charter text-[36px] lg:text-[64px] leading-[100%] text-[#111111]"
            style={{ letterSpacing: "-2px" }}
          >
            What I’m <br className="hidden lg:block" /> building now
          </h2>
          <p className="text-[#111111] opacity-65 font-inter text-base lg:text-xl">
            At Alphabyte Ventures, we create and back products built for focus,
            not noise. We use AI only where it improves decisions or removes
            friction, not where it merely impresses.
          </p>
          <p className="text-[#111111] opacity-65 font-inter text-base lg:text-xl">
            Every venture begins with a question: what would this look like if
            technology got out of the way? The answer becomes what we build.
          </p>
          <Link href="/ventures" className="w-full">
            <button className="cursor-pointer mx-auto md:mx-0 w-[342px] sm:w-full md:w-[231px] bg-[#1A3470] text-[#E8DCCB] h-[50px] lg:h-[46px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium ">
              Explore Ventures <MdKeyboardArrowRight className="text-2xl" />
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-[96px] items-center justify-center ">
        <div className="flex flex-col gap-6 lg:gap-8 items-center lg:items-start text-center lg:text-left w-full lg:w-[500px] xl:w-[610px]">
          <h2
            className="font-charter text-[36px] mt-[10px] lg:mt-0 lg:text-[64px] leading-[36px] lg:leading-[64px] text-[#111111]"
            style={{ letterSpacing: "-2px" }}
          >
            Writing <br className="hidden lg:block" /> and ideas
          </h2>
          <p className="text-[#111111] opacity-65 font-inter text-base lg:text-xl">
            I’m the author of The Start Switch, a book about momentum — how to
            begin, stay focused, and keep going when most people stall. Writing
            sharpens how I think about teams, execution, and long-term
            discipline.
          </p>
          <p className="text-[#111111] opacity-65 font-inter text-base lg:text-xl">
            Beyond the book, I write essays and reflections on clarity,
            leadership, and the practical side of building things that last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:flex-wrap xl:flex-nowrap">
            <Link href="/articles">
            <button className="cursor-pointer mx-auto md:mx-0 w-[342px] sm:w-full md:w-[273px] bg-[#1A3470] text-[#E8DCCB] h-[50px] lg:h-[46px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium ">
              Read my latest essays <MdKeyboardArrowRight className="text-2xl" />
            </button>
            </Link>
            <Link href="https://www.thestartswitch.com/" target="_blank" rel="noopener">
            <button className="cursor-pointer mx-auto md:mx-0 w-[342px] sm:w-full md:w-[305px] bg-[#E8DCCB03] backdrop-blur-[25px] border border-[#11141826] flex justify-center items-center gap-2 text-[#111111] h-[44px] lg:h-[46px] rounded-full uppercase text-sm font-inter font-medium ">
              Visit TheStartSwitch.com{" "}
              <MdKeyboardArrowRight className="text-2xl" />
            </button>
            </Link>
          </div>
        </div>
        <Image
          src="/images/about/building2.png"
          width={653}
          height={531}
          alt="building image"
          className="w-full lg:w-[500px] xl:w-[653px]"
        />
      </div>
    </div>
  );
};

export default Building;
