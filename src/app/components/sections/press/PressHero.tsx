import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const PressHero = () => {
  return (
    <div className="max-w-[1920px] mx-auto w-full py-[25px] lg:py-[38px] px-4 lg:px-[80px] xl:px-[120px] 2xl:px-[150px] ventures_prev_main flex flex-col gap-6">
      <div className="bg-[#1A1A1A]/5 w-full flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-4 p-[10px] lg:p-[25px] rounded-[14px] lg:rounded-[24px]">
        <div className="order-2 lg:order-1 flex flex-col gap-4 lg:gap-[20px] lg:ml-[50px] lg:my-[70px] w-full lg:w-[410px] 2xl:w-[480px]">
          <p className="text-sm lg:text-xl font-inter uppercase text-[#1A3470]">
            March 24, 2023, 04:02 MINS
          </p>
          <h1
            className="text-[24px] leading-[36px] lg:leading-[45px] xl:leading-[60px] 2xl:leading-[64px] lg:text-[35px] xl:text-[55px] 2xl:text-[64px] font-charter text-[#111111] "
            style={{ letterSpacing: "-2px" }}
          >
            Near Intelligence's <br className="md:hidden" /> Mathews On SPAC
            Deal
          </h1>
          <Link
            href="https://www.bloomberg.com/news/videos/2023-03-24/near-intelligence-s-mathews-on-spac-deal-video"
            target="_blank"
            rel="nofollow noopener"
          >
            <button className="cursor-pointer mx-auto md:mx-0 w-full md:w-[173px] bg-[#1A3470] text-[#E8DCCB] h-[46px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium ">
              Watch now <MdKeyboardArrowRight className="text-2xl" />
            </button>
          </Link>
        </div>
        <div className="relative w-full lg:w-[500px] xl:w-[600px] 2xl:w-[700px] formate_img order-1 lg:order-2">
          <Image
            src="/images/press/press.png"
            width={758}
            height={492}
            alt="interview image"
            className="rounded-[24px]"
          />
          <Link href="https://www.bloomberg.com/news/videos/2023-03-24/near-intelligence-smathews-on-spac-deal-video" target="_blank" rel="nofollow noopener">
            <Image
              src="/images/press/play.png"
              width={64}
              height={64}
              alt="interview image"
              className="absolute top-[calc(50%-32px)] left-[calc(50%-32px)] cursor-pointer"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-[50%] relative">
          <Image
            src="/images/press/press1.png"
            width={780}
            height={680}
            alt="vision 1 image"
            className="w-full z-10 hidden lg:block"
          />
          <Image
            src="/images/press/press1_mob.png"
            width={780}
            height={680}
            alt="vision 1 image"
            className="w-full z-10 lg:hidden"
          />
          <div className="flex flex-col items-start text-left gap-6 p-[20px] lg:p-[50px] 2xl:px-[50px] 2xl:py-[65px] absolute bottom-0 left-0 w-full ">
            <h3 className="text-[20px] lg:text-[32px] font-charter text-[#F7F4F1] leading-[26px] lg:leading-[42px]">
              Live conversation with Nicole Petallides previewing Near’s Nasdaq
              debut and giving a company overview.
            </h3>
            <div className="flex items-start md:items-end justify-between w-full flex-col md:flex-row gap-6 md:gap-0 ">
              <p className="text-sm lg:text-base text-[#F7F4F1] uppercase font-inter z-20 ">
                March 23, 2023 04:38 MINS
              </p>
              <Link
                href="https://www.facebook.com/schwabnetwork/videos/near-nir-ceo-anir-mathews-with-a-company-overview/239237531816869/"
                target="_blank"
                rel="nofollow noopener"
              >
                <button className="cursor-pointer lg:mb-[-30px] md:mx-0 w-full md:w-[173px] bg-[#1A3470] text-[#E8DCCB] h-[46px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium ">
                  Watch now <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[50%] relative">
          <Image
            src="/images/press/press2.png"
            width={780}
            height={680}
            alt="vision 1 image"
            className="w-full z-10 hidden lg:block"
          />
          <Image
            src="/images/press/press2_mob.png"
            width={780}
            height={680}
            alt="vision 1 image"
            className="w-full z-10 lg:hidden"
          />
          <div className="flex flex-col items-start text-left gap-6 p-[20px] lg:p-[50px] 2xl:px-[50px] 2xl:py-[65px] absolute bottom-0 left-0 w-full">
            <h3 className="text-[20px] lg:text-[32px] font-charter text-[#F7F4F1] leading-[26px] lg:leading-[42px]">
              Official opening-bell coverage from Times Square for Near
              Intelligence.
            </h3>
            <div className="flex items-start md:items-end justify-between w-full flex-col md:flex-row gap-6 md:gap-0 ">
              <p className="text-sm lg:text-base text-[#F7F4F1] uppercase font-inter z-20 ">
                March 24, 2023 00:58 MINS
              </p>
              <Link
                href="https://www.nasdaq.com/videos/near-intelligence-rings-the-nasdaq-stock-market-opening-bell"
                target="_blank"
                rel="nofollow noopener"
              >
                <button className="cursor-pointer lg:mb-[-30px] md:mx-0 w-full md:w-[173px] bg-[#1A3470] text-[#E8DCCB] h-[46px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium ">
                  Watch now <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressHero;
