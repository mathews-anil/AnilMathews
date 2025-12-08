import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const ArticlesAndProfiles = () => {
  return (
    <div className="bg-[#0D0F13] py-[50px] md:py-[100px] xl:py-[188px] flex flex-col gap-[30px] lg:gap-[100px] w-full">
      <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-[64px] px-4 md:px-[50px] xl:px-[100px] 2xl:px-[130px] vision_section_padding max-w-[1920px] mx-auto w-full">
        <h2
          className="font-charter text-[36px] lg:text-[64px] leading-[36px] lg:leading-[64px] text-[#E8DCCB] text-center lg:text-left"
          style={{ letterSpacing: "-2px" }}
        >
          Articles and profiles
        </h2>
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            <div className="w-full lg:w-[55%] 2xl:w-[726px] relative">
              <Link href="https://www.reuters.com/markets/deals/data-intelligence-firm-near-go-public-via-1-billion-spac-deal-2022-05-19/">
                <button className="font-inter text-base cursor-pointer w-[194px] h-[46px] uppercase font-medium text-[#111111] py-[6px] absolute top-[20px] right-[20px] lg:top-[30px] lg:right-[30px] px-[18px] bg-[#E8DCCB] rounded-full flex justify-center items-center gap-2">
                  Read articles <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>
              <Image
                src="/images/press/article1.png"
                width={780}
                height={680}
                alt="vision 1 image"
                className="w-full z-10 "
              />
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 p-[13px] lg:p-[50px] absolute bottom-0 left-0 w-full">
                <h2
                  className="font-charter text-[36px] lg:text-[64px] leading-[36px] lg:leading-[64px] text-[#E8DCCB] text-left uppercase"
                  style={{ letterSpacing: "-2px" }}
                >
                  Reuters
                </h2>
                <p className="text-[#F7F4F1] opacity-65 font-inter text-base lg:text-xl">
                  Report announcing Near’s plan to go public via a SPAC merger
                  valuing the company at about $1 billion.{" "}
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[45%] 2xl:w-[580px] relative">
               <Link href="https://techcrunch.com/2022/05/19/data-intelligence-startup-near-with-1-6b-anonymized-user-ids-lists-on-nasdaq-via-spac-at-a-1b-market-cap-raises-100m/" target="_blank" rel="nofollow noopener">
                <button className="font-inter text-base cursor-pointer w-[194px] h-[46px] uppercase font-medium text-[#111111] py-[6px] absolute top-[20px] right-[20px] lg:top-[30px] lg:right-[30px] px-[18px] bg-[#E8DCCB] rounded-full flex justify-center items-center gap-2">
                  Read articles <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>
              <Image
                src="/images/press/article2.png"
                width={780}
                height={680}
                alt="vision 1 image"
                className="w-full z-10 "
              />
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 p-[13px] lg:p-[50px] absolute bottom-0 left-0 w-full">
                <h2
                  className="font-charter text-[36px] lg:text-[64px] leading-[36px] lg:leading-[64px] text-[#E8DCCB] text-left uppercase"
                  style={{ letterSpacing: "-2px" }}
                >
                  TechCrunch
                </h2>
                <p className="text-[#F7F4F1] opacity-65 font-inter text-base lg:text-xl">
                  Coverage of Near’s Nasdaq listing plan and $100 million raise
                  at roughly a $1 billion valuation.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-6 w-full">
            <div className="w-full lg:w-[45%] 2xl:w-[580px] relative">
               <Link href="https://www.techinasia.com/indias-30-highest-funded-tech-startups-2014" target="_blank" rel="nofollow noopener">
                <button className="font-inter text-base cursor-pointer w-[194px] h-[46px] uppercase font-medium text-[#111111] py-[6px] absolute top-[20px] right-[20px] lg:top-[30px] lg:right-[30px] px-[18px] bg-[#E8DCCB] rounded-full flex justify-center items-center gap-2">
                  Read articles <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>
              <Image
                src="/images/press/article3.png"
                width={780}
                height={680}
                alt="vision 1 image"
                className="w-full z-10 "
              />
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 p-[13px] lg:p-[50px] absolute bottom-0 left-0 w-full">
                <h2
                  className="font-charter text-[36px] lg:text-[64px] leading-[36px] lg:leading-[64px] text-[#E8DCCB] text-left uppercase"
                  style={{ letterSpacing: "-2px" }}
                >
                  Tech in Asia
                </h2>
                <p className="text-[#F7F4F1] opacity-65 font-inter text-base lg:text-xl">
                  List feature including India’s most highly funded tech
                  startups circa 2014.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[55%] 2xl:w-[726px] relative">
               <Link href="https://www.businesstimes.com.sg/startups-tech/technology/spore-mobile-ad-startup-raises-record-series-b" target="_blank" rel="nofollow noopener">
                <button className="font-inter text-base cursor-pointer w-[194px] h-[46px] uppercase font-medium text-[#111111] py-[6px] absolute top-[20px] right-[20px] lg:top-[30px] lg:right-[30px] px-[18px] bg-[#E8DCCB] rounded-full flex justify-center items-center gap-2">
                  Read articles <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>
              <Image
                src="/images/press/article4.png"
                width={780}
                height={680}
                alt="vision 1 image"
                className="w-full z-10 "
              />
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 p-[13px] lg:p-[50px] absolute bottom-0 left-0 w-full">
                <h2
                  className="font-charter text-[36px] lg:text-[64px] leading-[36px] lg:leading-[64px] text-[#E8DCCB] text-left uppercase"
                  style={{ letterSpacing: "-2px" }}
                >
                  The Business Times
                </h2>
                <p className="text-[#F7F4F1] opacity-65 font-inter text-base lg:text-xl">
                  Report on raising a US$19 million Series B, described as a
                  record round in Singapore at the time.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 w-full">
            <div className="w-full lg:w-[55%] 2xl:w-[726px] relative">
              <Link href="https://www.arabnews.com/node/1956431/media" target="_blank" rel="nofollow noopener">
                <button className="font-inter text-base cursor-pointer w-[194px] h-[46px] uppercase font-medium text-[#111111] py-[6px] absolute top-[20px] right-[20px] lg:top-[30px] lg:right-[30px] px-[18px] bg-[#E8DCCB] rounded-full flex justify-center items-center gap-2">
                  Read articles <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>
              <Image
                src="/images/press/article5.png"
                width={780}
                height={680}
                alt="vision 1 image"
                className="w-full z-10 "
              />
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 p-[13px] lg:p-[50px] absolute bottom-0 left-0 w-full">
                <h2
                  className="font-charter text-[36px] lg:text-[64px] leading-[36px] lg:leading-[64px] text-[#E8DCCB] text-left uppercase"
                  style={{ letterSpacing: "-2px" }}
                >
                  Arab News (Investment)
                </h2>
                <p className="text-[#F7F4F1] opacity-65 font-inter text-base lg:text-xl">
                  Coverage of Near acquiring a minority stake in MEmob+ in a
                  deal valuing the company at over $25 million.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[45%] 2xl:w-[580px] relative">
              <Link href="https://techcrunch.com/2020/11/19/near-acquires-teemo/" target="_blank" rel="nofollow noopener">
                <button className="font-inter text-base cursor-pointer w-[194px] h-[46px] uppercase font-medium text-[#111111] py-[6px] absolute top-[20px] right-[20px] lg:top-[30px] lg:right-[30px] px-[18px] bg-[#E8DCCB] rounded-full flex justify-center items-center gap-2">
                  Read articles <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>
              <Image
                src="/images/press/article6.png"
                width={780}
                height={680}
                alt="vision 1 image"
                className="w-full z-10 "
              />
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 p-[13px] lg:p-[50px] absolute bottom-0 left-0 w-full">
                <h2
                  className="font-charter text-[36px] lg:text-[64px] leading-[36px] lg:leading-[64px] text-[#E8DCCB] text-left uppercase"
                  style={{ letterSpacing: "-2px" }}
                >
                  TechCrunch (Acquisition)
                </h2>
                <p className="text-[#F7F4F1] opacity-65 font-inter text-base lg:text-xl">
                  Report on Near acquiring Teemo to expand its European data
                  capabilities.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 w-full">
            <div className="w-full lg:w-[55%] 2xl:w-[726px] relative">
              <Link href="https://www.entrepreneur.com/en-in/technology/the-big-daddy-of-data/353257" target="_blank" rel="nofollow noopener">
                <button className="font-inter text-base cursor-pointer w-[194px] h-[46px] uppercase font-medium text-[#111111] py-[6px] absolute top-[20px] right-[20px] lg:top-[30px] lg:right-[30px] px-[18px] bg-[#E8DCCB] rounded-full flex justify-center items-center gap-2">
                  Read articles <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>
              <Image
                src="/images/press/article7.png"
                width={780}
                height={680}
                alt="vision 1 image"
                className="w-full z-10 "
              />
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 p-[13px] lg:p-[50px] absolute bottom-0 left-0 w-full">
                <h2
                  className="font-charter text-[36px] lg:text-[64px] leading-[36px] lg:leading-[64px] text-[#E8DCCB] text-left uppercase"
                  style={{ letterSpacing: "-2px" }}
                >
                  Entrepreneur
                </h2>
                <p className="text-[#F7F4F1] opacity-65 font-inter text-base lg:text-xl">
                  Profile titled “The Big Daddy of Data” on product strategy and
                  category building.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[45%] 2xl:w-[580px] relative">
              <Link href="https://yourstory.com/2020/07/data-analytics-startup-near-adtech-pivot-saas-singapore" target="_blank" rel="nofollow noopener">
                <button className="font-inter text-base cursor-pointer w-[194px] h-[46px] uppercase font-medium text-[#111111] py-[6px] absolute top-[20px] right-[20px] lg:top-[30px] lg:right-[30px] px-[18px] bg-[#E8DCCB] rounded-full flex justify-center items-center gap-2">
                  Read articles <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>
              <Image
                src="/images/press/article8.png"
                width={780}
                height={680}
                alt="vision 1 image"
                className="w-full z-10 "
              />
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 p-[13px] lg:p-[50px] absolute bottom-0 left-0 w-full">
                <h2
                  className="font-charter text-[36px] lg:text-[64px] leading-[36px] lg:leading-[64px] text-[#E8DCCB] text-left uppercase"
                  style={{ letterSpacing: "-2px" }}
                >
                  YourStory
                </h2>
                <p className="text-[#F7F4F1] opacity-65 font-inter text-base lg:text-xl">
                  Feature on Near’s pivot from adtech to SaaS and lessons from
                  scaling across regions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesAndProfiles;
