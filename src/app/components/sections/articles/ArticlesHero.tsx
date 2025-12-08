import React from "react";
import Header from "../../layout/Header";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const ArticlesHero = () => {
  return (
    <div className="bg-[#111111]/5">
      <Header />
      <div className="flex flex-col gap-[64px] lg:gap-[96px] pt-[40px] lg:pt-[92px] px-[13px] md:px-[50px] xl:px-[100px] 2xl:px-[130px] vision_section_padding max-w-[1920px] mx-auto">
        <div className="flex flex-col gap-4 lg:gap-[42px] items-center lg:items-start w-full lg:w-[856px] text-center lg:text-left">
          <h1
            className="font-charter text-[36px] lg:text-[64px] text-[#111111] leading-[36px] lg:leading-[64px]"
            style={{ letterSpacing: "-2px" }}
          >
            Articles & Insights
          </h1>
          <p className="text-[#111111] opacity-65 lg:opacity-100 font-charter text-xl lg:text-[32px]">
            I write to make sense of how things grow. Each essay is a small
            experiment in focus, a way to strip away noise and see what actually
            moves people, teams, and companies forward.
          </p>
          <p className="text-[#111111] opacity-65 lg:opacity-100 font-charter text-xl lg:text-[32px]">
            My writing sits at the intersection of technology, behavior, and
            execution. Some pieces start as questions I can’t shake; others as
            answers that proved themselves in the field.
          </p>
        </div>
        <div className="bg-[#E8DCCB] mb-[-100px] lg:mb-[-250px] w-full flex flex-col lg:flex-row gap-[20px] lg:gap-[50px] items-center text-center lg:text-left justify-between rounded-2xl lg:rounded-3xl pt-[43px] px-[20px] lg:pt-[50px] lg:px-[50px] 2xl:px-[90px] mx-auto">
          <div className="flex flex-col gap-4 lg:gap-8 w-full lg:w-[600px] xl:w-[700px] lg:mb-[43px]">
            <p className="text-sm font-inter font-medium uppercase text-[#1A3470]">
              Featured work
            </p>
            <h2
              className="font-charter leading-[36px] lg:leading-[64px] text-[36px] lg:text-[64px] text-[#111111]"
              style={{ letterSpacing: "-2px" }}
            >
              The Start Switch
            </h2>
            <p className="text-[#111111] opacity-65 font-inter text-base lg:text-xl">
              A book about momentum — how to begin, sustain focus, and keep
              building when most people stall. It’s for founders, creators, and
              anyone fighting the gravity of hesitation.
            </p>
            <div className=" flex flex-col sm:flex-row flex-wrap gap-4 w-full">
              <Link
                href="https://www.thestartswitch.com"
                target="_blank"
                rel="noopener"
              >
                <button className="cursor-pointer mx-auto md:mx-0 w-full md:w-[164px] bg-[#1A3470] text-[#E8DCCB] h-[46px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium ">
                  Read more <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>
              <button className="cursor-pointer mx-auto md:mx-0 w-full md:w-[207px] bg-[#E8DCCB03] backdrop-blur-[25px] border border-[#11141826] flex justify-center items-center gap-2 text-[#111111] h-[46px] rounded-full uppercase text-sm font-inter font-medium ">
                Buy on amazon <MdKeyboardArrowRight className="text-2xl" />
              </button>
              <Link
                href="https://www.goodreads.com/author/show/57597604.Anil_Mathews"
                target="_blank"
                rel="nofollow noopener"
              >
                <button className="cursor-pointer mx-auto md:mx-0 w-full md:w-[275px] bg-[#E8DCCB03] backdrop-blur-[25px] border border-[#11141826] flex justify-center items-center gap-2 text-[#111111] h-[46px] rounded-full uppercase text-sm font-inter font-medium ">
                  Reviews on Goodreads{" "}
                  <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>
            </div>
          </div>
          <Image
            src="/images/article/book.png"
            width={407}
            height={485}
            alt="book image"
          />
        </div>
      </div>
    </div>
  );
};

export default ArticlesHero;
