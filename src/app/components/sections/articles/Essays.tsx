import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Essays = () => {
  return (
    <div className="bg-[#0D0F13] pt-[152px] pb-[70px] lg:pb-[150px] lg:pt-[400px] w-full">
      <div className="max-w-[1920px] mx-auto px-[15px] lg:px-[50px] xl:px-[60px] priciple_padding flex flex-col gap-[50px] lg:gap-[100px] w-full">
        <div className="flex w-full flex-col gap-6 lg:gap-12 items-center lg:items-start text-center lg:text-left ">
          <h2
            className="font-charter leading-[36px] lg:leading-[64px] text-[36px] lg:text-[64px] text-[#E8DCCB]"
            style={{ letterSpacing: "-2px" }}
          >
            Selected essays and op-eds
          </h2>
          <div className="flex flex-col lg:flex-row flex-wrap gap-6 lg:gap-[25px] w-full items-center lg:items-start justify-center">
            <div className="flex flex-col gap-6 lg:gap-8 items-center lg:items-start text-center lg:text-left w-full sm:w-[500px] xl:w-[400px] 2xl:w-[450px] relative card_custom_width">
              <button className="lg:w-[264px] lg:h-[38px] uppercase font-inter text-sm cursor-pointer font-medium text-[#1A3470] lg:font-semibold py-[6px] absolute top-[13px] right-[13px] lg:top-[20px] lg:right-[20px] px-[18px] bg-[#E8DCCB] rounded-full">
                Forbes Technology Council
              </button>
              <Image
                src="/images/article/article1.png"
                width={515}
                height={454}
                alt="article image"
                className="border w-full border-[#E8DCCB]/30 rounded-[16px]"
              />
              <h3
                className="text-xl lg:text-[26px] 2xl:text-[32px] text-[#F7F4F1] font-charter leading-[25px] lg:leading-[42px]"
                style={{ letterSpacing: "-1px" }}
              >
                Why Every Retailer Will Become An Ad Platform By 2030
              </h3>
              <p className="text-base lg:text-xl font-inter leading-[20px] lg:leading-[30px] text-[#F7F4F1] opacity-65 mt-[-15px] " style={{letterSpacing:"-0.5px"}}>
                Why retail’s next margin engine is media, and what it means for
                product, data, and pricing.
              </p>
              <Link href="https://www.forbes.com/councils/forbestechcouncil/2024/08/20/why-every-retailer-will-become-an-ad-platform-by-2030/" target="_blank" rel="nofollow noopener">
                <button className="cursor-pointer backdrop-blur-[25px]  flex items-center gap-2 text-[#E8DCCB] h-[46px] rounded-full uppercase text-sm lg:text-base font-inter font-medium ">
                  Read on forbes <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>
            </div>

            <div className="flex flex-col gap-6 lg:gap-8 items-center lg:items-start text-center lg:text-left w-full sm:w-[500px] xl:w-[400px] 2xl:w-[450px] relative card_custom_width">
              <button className="lg:w-[264px] lg:h-[38px] uppercase font-inter text-sm cursor-pointer font-medium text-[#1A3470] lg:font-semibold py-[6px] absolute top-[13px] right-[13px] lg:top-[20px] lg:right-[20px] px-[18px] bg-[#E8DCCB] rounded-full">
                Forbes Technology Council
              </button>
              <Image
                src="/images/article/article2.png"
                width={515}
                height={454}
                alt="article image"
                className="border w-full border-[#E8DCCB]/30 rounded-[16px]"
              />
              <h3
                className="text-xl lg:text-[26px] 2xl:text-[32px] text-[#F7F4F1] font-charter leading-[25px] lg:leading-[42px]"
                style={{ letterSpacing: "-1px" }}
              >
                Four Tips I Learned While Building A Global Company From East To
                West
              </h3>
              <p className="text-base lg:text-xl font-inter leading-[20px] lg:leading-[30px] text-[#F7F4F1] opacity-65 mt-[-15px] " style={{letterSpacing:"-0.5px"}}>
                Practical lessons from operating across India, Southeast Asia,
                Europe, and the U.S.
              </p>
              <Link href="https://www.forbes.com/councils/forbestechcouncil/2023/05/15/four-tips-i-learned-while-building-a-global-company-from-east-to-west/?streamIndex=0" target="_blank" rel="nofollow noopener">
                <button className="cursor-pointer backdrop-blur-[25px]  flex items-center gap-2 text-[#E8DCCB] h-[46px] rounded-full uppercase text-sm lg:text-base font-inter font-medium ">
                  Read on forbes <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>
            </div>

            <div className="flex flex-col gap-6 lg:gap-8 items-center lg:items-start text-center lg:text-left w-full sm:w-[500px] xl:w-[400px] 2xl:w-[450px] relative card_custom_width">
              <button className="lg:w-[264px] lg:h-[38px] uppercase font-inter text-sm cursor-pointer font-medium text-[#1A3470] lg:font-semibold py-[6px] absolute top-[13px] right-[13px] lg:top-[20px] lg:right-[20px] px-[18px] bg-[#E8DCCB] rounded-full">
                Forbes Technology Council
              </button>
              <Image
                src="/images/article/article3.png"
                width={515}
                height={454}
                alt="article image"
                className="border w-full border-[#E8DCCB]/30 rounded-[16px]"
              />
              <h3
                className="text-xl lg:text-[26px] 2xl:text-[32px] text-[#F7F4F1] font-charter leading-[25px] lg:leading-[42px]"
                style={{ letterSpacing: "-1px" }}
              >
                Why Consumer Behaviour Data Is Essential For A Business To
                Thrive
              </h3>
              <p className="text-base lg:text-xl font-inter leading-[20px] lg:leading-[30px] text-[#F7F4F1] opacity-65 mt-[-15px] " style={{letterSpacing:"-0.5px"}}>
                What companies miss when they don’t measure real user behavior.
              </p>
              <Link href="https://timesofindia.indiatimes.com/blogs/voices/why-consumer-behaviour-data-is-essential-for-a-business-to-thrive/" target="_blank" rel="nofollow noopener">
                <button className="cursor-pointer backdrop-blur-[25px]  flex items-center gap-2 text-[#E8DCCB] h-[46px] rounded-full uppercase text-sm lg:text-base font-inter font-medium ">
                  Read on times of india <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-6 lg:gap-12 items-center lg:items-start text-center lg:text-left ">
          <h2
            className="font-charter leading-[36px] lg:leading-[64px] text-[36px] lg:text-[64px] text-[#E8DCCB]"
            style={{ letterSpacing: "-2px" }}
          >
            LinkedIn Essays
          </h2>
          <div className="flex flex-col lg:flex-row flex-wrap gap-6 lg:gap-[25px] w-full items-center lg:items-start justify-center">
            <div className="flex flex-col gap-6 lg:gap-8 items-center lg:items-start text-center lg:text-left w-full sm:w-[500px] xl:w-[400px] 2xl:w-[450px] relative card_custom_width">
              <button className="lg:w-[152px] lg:h-[38px] uppercase font-inter text-sm cursor-pointer font-medium text-[#1A3470] lg:font-semibold py-[6px] absolute top-[13px] right-[13px] lg:top-[20px] lg:right-[20px] px-[18px] bg-[#E8DCCB] rounded-full">
                LinkedIn Essay
              </button>
              <Image
                src="/images/article/article4.png"
                width={515}
                height={454}
                alt="article image"
                className="border w-full border-[#E8DCCB]/30 rounded-[16px]"
              />
              <h3
                className="text-xl lg:text-[26px] 2xl:text-[32px] text-[#F7F4F1] font-charter leading-[25px] lg:leading-[42px]"
                style={{ letterSpacing: "-1px" }}
              >
                How Deep Tech Startups Will Drive Tomorrow’s Innovations
              </h3>
              <p className="text-base lg:text-xl font-inter leading-[20px] lg:leading-[30px] text-[#F7F4F1] opacity-65 mt-[-15px] " style={{letterSpacing:"-0.5px"}}>
                A practical view on what “deep tech” really means when the focus
                is customer outcomes instead of hype.
              </p>
             <Link href="https://www.linkedin.com/pulse/how-deep-tech-startups-drive-tomorrows-innovations-anil-mathews-giqqc/" target="_blank" rel="nofollow noopener">
              <button className="cursor-pointer backdrop-blur-[25px] lg:mt-[-10px]  flex items-center gap-2 text-[#E8DCCB] h-[46px] rounded-full uppercase text-sm lg:text-base font-inter font-medium ">
                Read on Linkedin <MdKeyboardArrowRight className="text-2xl" />
              </button>
             </Link>
            </div>

            <div className="flex flex-col gap-6 lg:gap-8 items-center lg:items-start text-center lg:text-left w-full sm:w-[500px] xl:w-[400px] 2xl:w-[450px] relative card_custom_width">
              <button className="lg:w-[152px] lg:h-[38px] uppercase font-inter text-sm cursor-pointer font-medium text-[#1A3470] lg:font-semibold py-[6px] absolute top-[13px] right-[13px] lg:top-[20px] lg:right-[20px] px-[18px] bg-[#E8DCCB] rounded-full">
                LinkedIn Essay
              </button>
              <Image
                src="/images/article/article5.png"
                width={515}
                height={454}
                alt="article image"
                className="border w-full border-[#E8DCCB]/30 rounded-[16px]"
              />
              <h3
                className="text-xl lg:text-[26px] 2xl:text-[32px] text-[#F7F4F1] font-charter leading-[25px] lg:leading-[42px]"
                style={{ letterSpacing: "-1px" }}
              >
                Shaping the Future of Advertising: A Consumer-Centric Approach
              </h3>
              <p className="text-base lg:text-xl font-inter leading-[20px] lg:leading-[30px] text-[#F7F4F1] opacity-65 mt-[-15px] " style={{letterSpacing:"-0.5px"}}>
                Why ad products centered on real consumer utility win on both
                performance and trust.
              </p>
             <Link href="https://www.linkedin.com/pulse/shaping-future-advertising-consumer-centric-approach-anil-mathews-3c1fc/" target="_blank" rel="nofollow noopener">
              <button className="cursor-pointer backdrop-blur-[25px] lg:mt-[-10px]  flex items-center gap-2 text-[#E8DCCB] h-[46px] rounded-full uppercase text-sm lg:text-base font-inter font-medium ">
                Read on Linkedin <MdKeyboardArrowRight className="text-2xl" />
              </button>
             </Link>
            </div>

            <div className="flex flex-col gap-6 lg:gap-8 items-center lg:items-start text-center lg:text-left w-full sm:w-[500px] xl:w-[400px] 2xl:w-[450px] relative card_custom_width">
              <button className="lg:w-[152px] lg:h-[38px] uppercase font-inter text-sm cursor-pointer font-medium text-[#1A3470] lg:font-semibold py-[6px] absolute top-[13px] right-[13px] lg:top-[20px] lg:right-[20px] px-[18px] bg-[#E8DCCB] rounded-full">
                LinkedIn Essay
              </button>
              <Image
                src="/images/article/article6.png"
                width={515}
                height={454}
                alt="article image"
                className="border w-full border-[#E8DCCB]/30 rounded-[16px]"
              />
              <h3
                className="text-xl lg:text-[26px] 2xl:text-[32px] text-[#F7F4F1] font-charter leading-[25px] lg:leading-[42px]"
                style={{ letterSpacing: "-1px" }}
              >
                Towards a Balanced Future: Where Data, Privacy, and Generative
                AI Work Together
              </h3>
              <p className="text-base lg:text-xl font-inter leading-[20px] lg:leading-[30px] text-[#F7F4F1] opacity-65 mt-[-15px] " style={{letterSpacing:"-0.5px"}}>
                A framework for using data at full utility while preserving
                privacy — and how generative AI fits into that balance.
              </p>
              <Link href="https://www.linkedin.com/pulse/towards-balanced-future-where-data-privacy-generative-anil-mathews/" target="_blank" rel="nofollow noopener">
              <button className="cursor-pointer backdrop-blur-[25px] lg:mt-[-10px] flex items-center gap-2 text-[#E8DCCB] h-[46px] rounded-full uppercase text-sm lg:text-base font-inter font-medium ">
                Read on Linkedin <MdKeyboardArrowRight className="text-2xl" />
              </button>
             </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Essays;
