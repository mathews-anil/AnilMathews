"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const TalkThemes = () => {
  const items = [
    {
      img: "/images/speaking/icon1.png",
      title: (
        <>
          Start fast and keep <br /> momentum
        </>
      ),
      desc: "How to move before conditions feel perfect and keep the pace when resources are limited.",
    },
    {
      img: "/images/speaking/icon2.png",
      title: (
        <>
          Pricing <br />
          for traction
        </>
      ),
      desc: "How small teams find pricing models that create pull instead of resistance.",
    },
    {
      img: "/images/speaking/icon3.png",
      title: (
        <>
          Focus and execution <br /> for small teams
        </>
      ),
      desc: "Why fewer moving parts build more durable companies, and how to use that as a competitive edge.",
    },
    {
      img: "/images/speaking/icon4.png",
      title: (
        <>
          Lessons from public <br /> markets preparation
        </>
      ),
      desc: "What changes and what shouldn’t when a private company starts operating like a public one.",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="bg-[#111111]/5">
      <div className="flex flex-col items-center text-center justify-center gap-[20px] lg:gap-[50px] py-[50px] lg:py-[100px] xl:py-[130px] px-4 md:px-[50px] xl:px-[100px] 2xl:px-[160px] max-w-[1920px] mx-auto">
        <h2
          className="font-charter text-[36px] lg:text-[64px] leading-[36px] lg:leading-[64px] text-[#111111]"
          style={{ letterSpacing: "-2px" }}
        >
          Talk themes
        </h2>

        {/* Desktop Grid (rendered only when not mobile) */}
        {!isMobile && (
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6 w-full">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex flex-col justify-start p-2 lg:px-[10px] lg:py-[20px] 2xl:p-[20px] lg:gap-4 2xl:gap-6 items-center text-center w-[280px] lg:w-[23%] bg-[#1A1A1A0D] min-h-[250px] lg:min-h-[306px] 2xl:min-h-[375px] rounded-xl lg:rounded-[24px] border border-[#E8DCCB26]"
              >
                <Image
                  src={item.img}
                  width={60}
                  height={60}
                  alt="Talk theme icon"
                  className="mb-2 w-[50px] 2xl:w-[60px]"
                />
                <h3 className="text-lg 2xl:text-[24px] font-inter font-semibold text-[#1A1A1A]">
                  {item.title}
                </h3>
                <p className="text-base 2xl:text-xl text-[#1A1A1A] opacity-65 font-inter">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Mobile Carousel (rendered only on mobile) */}
        {isMobile && (
          <div className="w-full py-4">
            <Swiper
              modules={[Autoplay]}
              slidesPerView="auto"
              centeredSlides
              spaceBetween={20}
              loop
              loopAdditionalSlides={items.length}
              autoplay={{ delay: 2200, disableOnInteraction: false }}
            >
              {items.map((item, i) => (
                <SwiperSlide key={i} style={{ width: "250px" }}>
                  <div className="mx-auto flex flex-col justify-center p-4 gap-6 items-center text-center w-[250px] bg-[#1A1A1A0D] min-h-[310px] rounded-xl border border-[#E8DCCB26]">
                    <Image
                      src={item.img}
                      width={48}
                      height={48}
                      alt="Talk theme icon"
                      className="mb-3 w-[48px]"
                    />
                    <h3 className="text-lg font-inter font-semibold text-[#1A1A1A]">
                      {item.title}
                    </h3>
                    <p className="text-base text-[#1A1A1A] opacity-65 font-inter">
                      {item.desc}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default TalkThemes;
