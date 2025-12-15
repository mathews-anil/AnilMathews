import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Vision = () => {
  return (
    <div className="bg-[#0D0F13] py-[35px] md:py-[100px] xl:py-[150px] 2xl:pt-[244px] 2xl:pb-[200px] flex flex-col gap-[50px] lg:gap-[100px] home_vision_section">
      <div className="flex flex-col gap-4 px-4 md:px-[50px] xl:px-[100px] 2xl:px-[130px] vision_section_padding max-w-[1920px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-24 justify-between items-left mt-[60px] lg:mt-0">
          <Link className="order-2 lg:order-1"
            href="https://techcrunch.com/2022/05/19/data-intelligence-startup-near-with-1-6b-anonymized-user-ids-lists-on-nasdaq-via-spac-at-a-1b-market-cap-raises-100m/"
            target="_blank"
            rel="noopener"
          >
            <Image
              src="/images/home/vision.png"
              width={712}
              height={580}
              alt="Nasdaq MarketSite building in Times Square on Near Intelligence listing day"
              className="w-full lg:w-[412px] xl:w-[620] 2xl:w-[712px] "
            />
          </Link>
          <p className="text-[#F7F4F1] font-inter text-sm lg:text-base uppercase lg:hidden text-left order-3">
            Nasdaq Listing Day, Times Square
          </p>
          <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start w-full lg:w-[470px] order-1 lg:order-2">
            <h2
              className="font-charter text-[36px] lg:text-[64px] text-[#E8DCCB]"
              style={{ letterSpacing: "-2px" }}
            >
              Vision
            </h2>
            <p className="text-[#F7F4F1] opacity-65 font-inter text-base lg:text-xl">
              The next phase of progress will not come from adding more technology. It will come from removing what stands between people and real execution.
            </p>
            <p className="text-[#F7F4F1] opacity-65 font-inter text-base lg:text-xl">
              As tools become more powerful, advantage will belong to those who reduce complexity instead of multiplying it. The systems that endure will feel quiet by design because they shorten the distance between intent and outcome, turning research into insight and coordination into flow.
            </p>
          </div>
        </div>
        <p className="text-[#F7F4F1] font-inter text-sm lg:text-base uppercase hidden lg:block">
          Nasdaq Listing Day, Times Square
        </p>
      </div>
      <div className="flex flex-col gap-4 px-4 md:px-[50px] xl:px-[100px] 2xl:px-[130px] vision_section_padding items-center lg:items-start mx-auto w-full max-w-[1920px] mx-auto">
        <h2
          className="font-charter text-[36px] lg:text-[64px] text-[#E8DCCB]"
          style={{ letterSpacing: "-2px" }}
        >
          What I build
        </h2>
        <div className="flex flex-col gap-[15px] w-full">
          <div className="flex flex-col lg:flex-row gap-3 w-full">
            <Link href="/ventures" className="w-full lg:w-[600px] xl:w-[59%] relative ">
              <Image
                src="/images/home/vision1.png"
                width={780}
                height={680}
                alt="Anil Mathews speaking on a panel at the Consumer Technology Association event in Las Vegas"
                className="w-full z-10"
              />
              <p className="text-xl lg:text-2xl text-[#F7F4F1] font-semibold font-inter z-20 absolute leading-[26px] xl:leading-[24px] bottom-0 p-[33px] lg:p-[61px] left-0 ">
                I build tools that make work <br className="hidden lg:block" />{" "}
                feel lighter.{" "}
              </p>
            </Link>
            <Link
              href="https://yourstory.com/2020/07/data-analytics-startup-near-adtech-pivot-saas-singapore"
              target="_blank"
              rel="noopener"
              className="w-full lg:w-[400px] xl:w-[39.8%] relative"
            >
              <Image
                src="/images/home/vision2.png"
                width={524}
                height={680}
                alt="Article highlighting Near Intelligence’s transition from adtech to SaaS"
                className="w-full z-10 "
              />
              <p className="text-xl lg:text-2xl text-[#F7F4F1] font-semibold font-inter z-20 absolute leading-[26px] xl:leading-[24px] bottom-0 p-[25px] lg:p-[61px] left-0 ">
                Products that remove friction, protect attention, and make the
                next step obvious.
              </p>
            </Link>
          </div>
          <Link
            href="https://techcrunch.com/2019/07/16/near-raises-100m-for-an-ai-that-merges-online-and-offline-behavior-to-build-consumer-profiles/"
            target="_blank"
            rel="noopener"
            className="w-full relative"
          >
            <Image
              src="/images/home/vision3.png"
              width={780}
              height={680}
              alt="TechCrunch article on Near Intelligence raising $100M to merge online andoffline consumer data"
              className="w-full z-10 hidden lg:block"
            />
            <Image
              src="/images/home/vision3_mobiles.png"
              width={780}
              height={680}
              alt="TechCrunch article on Near Intelligence raising $100M to merge online and offline consumer data"
              className="w-full z-10 lg:hidden"
            />
            <p className="text-xl lg:text-2xl text-[#F7F4F1] font-semibold font-inter z-20 absolute leading-[26px] xl:leading-[24px] bottom-0 p-[25px] lg:p-[61px] left-0 ">
              Each venture starts with a simple question: what would this look
              like if <br className="hidden lg:block" /> the software
              disappeared into the background?
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 px-4 md:px-[50px] xl:px-[100px] 2xl:px-[130px] vision_section_padding items-start mx-auto w-full max-w-[1920px] mx-auto">
        <h2
          className="font-charter text-[36px] lg:text-[64px] text-[#E8DCCB]"
          style={{ letterSpacing: "-2px" }}
        >
          Milestones
        </h2>
        <div className="w-full flex flex-wrap lg:flex-nowrap gap-[10px] lg:gap-[27px]">
          <div className="w-[48%] sm:w-auto px-[20px] lg:max-w-[175px] py-[25px] min-h-[207px] lg:min-h-[300px] 2xl:min-h-[376px] 2xl:max-h-[376px] flex flex-col justify-between border border-[#E8DCCB26] backdrop-blur-xl rounded-[14px] lg:rounded-[24px] bg-[#FFFFFF03]">
            <p className="text-[#E8DCCB] font-inter text-sm 2x:text-base uppercase">
              Companies founded
            </p>
            <p className="font-charter font-black text-[36px] 2xl:text-[64px] uppercase text-[#E8DCCB]">
              4
            </p>
          </div>
          <div className="bg-[#FFFFFF03] w-[48%] sm:w-auto px-[20px] lg:max-w-[175px] py-[25px] min-h-[207px] lg:min-h-[300px] 2xl:min-h-[376px] 2xl:max-h-[376px] flex flex-col justify-between border border-[#E8DCCB26] backdrop-blur-xl rounded-[14px] lg:rounded-[24px]">
            <p className="text-[#E8DCCB] font-inter text-sm 2xl:text-base uppercase">
              Public listing on Nasdaq
            </p>
            <p className="font-charter font-black text-[36px] 2xl:text-[64px] uppercase text-[#E8DCCB]">
              1
            </p>
          </div>
          <div className="bg-[#FFFFFF03] w-[38%] sm:w-auto px-[20px] lg:max-w-[175px] py-[25px] min-h-[207px] lg:min-h-[300px] 2xl:min-h-[376px] 2xl:max-h-[376px] flex flex-col justify-between border border-[#E8DCCB26] backdrop-blur-xl rounded-[14px] lg:rounded-[24px]">
            <p className="text-[#E8DCCB] font-inter text-sm 2xl:text-base uppercase">
              Strategic acquisitions
            </p>
            <p className="font-charter font-black text-[36px] 2xl:text-[64px] uppercase text-[#E8DCCB]">
              2
            </p>
          </div>
          <div className="w-[59%] bg-[#FFFFFF03] sm:w-auto px-[35px] lg:px-[20px] lg:max-w-[200px] 2xl:max-w-[282px] py-[25px] min-h-[207px] lg:min-h-[300px] 2xl:min-h-[376px] 2xl:max-h-[376px] flex flex-col justify-between border border-[#E8DCCB26] backdrop-blur-[150px] vision_bg rounded-[14px] lg:rounded-[24px]">
            <p className="text-[#E8DCCB] font-inter text-sm 2xl:text-base uppercase">
              Raised across equity and debt
            </p>
            <p className="font-charter font-black text-[36px] 2xl:text-[64px] uppercase text-[#E8DCCB]">
              $235M
            </p>
          </div>
          <div className="bg-[#FFFFFF03] w-[48%] sm:w-auto px-[20px] lg:max-w-[175px] py-[25px] min-h-[207px] lg:min-h-[300px] 2xl:min-h-[376px] 2xl:max-h-[376px] flex flex-col justify-between border border-[#E8DCCB26] backdrop-blur-xl rounded-[14px] lg:rounded-[24px]">
            <p className="text-[#E8DCCB] font-inter text-sm 2xl:text-base uppercase">
              Markets served
            </p>
            <p className="font-charter font-black text-[36px] 2xl:text-[64px] uppercase text-[#E8DCCB]">
              40+
            </p>
          </div>
          <div className="bg-[#FFFFFF03] w-[48%] sm:w-auto px-[20px] lg:max-w-[212px] py-[25px] min-h-[207px] lg:min-h-[300px] 2xl:min-h-[376px] 2xl:max-h-[376px] flex flex-col justify-between border border-[#E8DCCB26] backdrop-blur-xl rounded-[14px] lg:rounded-[24px]">
            <p className="text-[#E8DCCB] font-inter text-sm 2xl:text-base uppercase">
              Years building technology
            </p>
            <p className="font-charter font-black text-[36px] 2xl:text-[64px] uppercase text-[#E8DCCB]">
              20+
            </p>
          </div>
        </div>
        <Link href="/about-anil-mathews" className="mx-auto w-full">
          <button className="text-[#111111] cursor-pointer font-inter font-medium text-sm lg:text-base uppercase mx-auto lg:mt-[30px] w-[330px] md:w-[361px] bg-[#E8DCCB] border border-[#11141826] rounded-full h-[50px] lg:h-[46px] mb-[60px] mt-[2px] lg:mb-0 flex justify-center items-center gap-2 ">
            Learn more about Anil Mathews{" "}
            <MdKeyboardArrowRight className="text-2xl" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Vision;
