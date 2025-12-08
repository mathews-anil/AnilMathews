"use client";
import React from "react";
import Image from "next/image";
import { MdArrowOutward, MdKeyboardArrowRight } from "react-icons/md";

// Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import Link from "next/link";

const slides = [
  {
    img: "/images/home/media1.png",
    text: "Bloomberg TV",
    para: "Segment on choosing the SPAC route and taking Near public.",
    link:"https://www.bloomberg.com/news/videos/2023-03-24/near-intelligence-s-mathews-on-spac-deal-video"
  },
  {
    img: "/images/home/media2.png",
    text: "Absolute Return Podcast 231",
    para: "Discussion on enterprise software and disciplined growth.",
    link:"https://accelerateshares.com/podcasts/absolute-return-podcast-231-enterprise-software-with-near-ceo-anil-mathews/"
  },
  {
    img: "/images/home/media3.png",
    text: "Schwab Network",
    para: "Live interview with Nicole Petallides on Near’s trading debut.",
    link:"https://www.facebook.com/schwabnetwork/videos/near-nir-ceo-anir-mathews-with-a-company-overview/239237531816869/"
  },
  {
    img: "/images/home/media4.png",
    text: "Nasdaq MarketSite",
    para: "Short segment on Near’s public debut and data intelligence focus.",
    link:"https://www.youtube.com/watch?v=rvLBaKUF7EY"
  },
  {
    img: "/images/home/media1.png",
    text: "Bloomberg TV",
    para: "Segment on choosing the SPAC route and taking Near public.",
    link:"https://www.bloomberg.com/news/videos/2023-03-24/near-intelligence-s-mathews-on-spac-deal-video"
  },
  {
    img: "/images/home/media2.png",
    text: "Absolute Return Podcast 231",
    para: "Discussion on enterprise software and disciplined growth.",
    link:"https://accelerateshares.com/podcasts/absolute-return-podcast-231-enterprise-software-with-near-ceo-anil-mathews/"
  },
  {
    img: "/images/home/media3.png",
    text: "Schwab Network",
    para: "Live interview with Nicole Petallides on Near’s trading debut.",
    link:"https://www.facebook.com/schwabnetwork/videos/near-nir-ceo-anir-mathews-with-a-company-overview/239237531816869/"
  },
  {
    img: "/images/home/media4.png",
    text: "Nasdaq MarketSite",
    para: "Short segment on Near’s public debut and data intelligence focus.",
    link:"https://www.youtube.com/watch?v=rvLBaKUF7EY"
  },
];

export default function Media() {
  return (
    <div className="py-[60px] lg:py-[150px] gap-6 lg:gap-9 flex flex-col items-center max-w-[1920px] mx-auto">
      {/* Heading */}
      <div className="flex gap-12 items-center">
        <h2 className="font-charter text-[36px] lg:text-[64px] text-[#111111] leading-[36px] lg:leading-[64px] -tracking-[2px]">
          In the media
        </h2>
        <Link href="/press">
          <button className="items-center cursor-pointer w-full hidden lg:flex lg:w-[305px] bg-[#E8DCCB] text-[#1A3470] border border-[#E8DCCB26] h-[46px] rounded-full flex items-center justify-center gap-1 uppercase text-sm lg:text-base font-inter">
            See all press and interviews <MdKeyboardArrowRight className="text-2xl" />
          </button>
        </Link>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={800}
        spaceBetween={0}
        slidesPerView="auto"
        centeredSlides
        className="w-full overflow-hidden lg:pl-[30%]! pr-[-20%]!"
      >
        {slides.map((slide, i) => (
          <SwiperSlide
            key={i}
            className="shrink-0 px-1 lg:px-2 basis-[80%] md:basis-[60%] lg:basis-[45%]"
          >
            <div className="relative w-full border border-[#E8DCCB26] overflow-hidden rounded-[14px] group h-[405px] lg:h-auto">
              <Image
                src={slide.img}
                width={623}
                height={680}
                alt="media"
                className="w-full h-full rounded-[14px] object-cover object-center z-10 transition-all duration-500 group-hover:saturate-0"
              />

              <div className="flex flex-col absolute bottom-0 z-20 p-5 lg:p-10">
                <p className="font-charter uppercase text-3xl lg:text-[55px] text-[#F7F4F1] font-semibold leading-[30px] lg:leading-[55px]">
                  {slide.text}
                </p>
                <div className="flex flex-col lg:flex-row gap-3 lg:items-end">
                  <p className="text-xs lg:text-sm text-[#E8DCCB] uppercase">
                    {slide.para}
                  </p>
                  <Link href={slide.link} target="_blank">
                  <button className="cursor-pointer text-base uppercase text-[#F7F4F1] font-medium flex items-center gap-3">
                    Watch <MdArrowOutward />
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link href="/press">
        <button className="cursor-pointer w-[330px] lg:hidden lg:w-[305px] bg-[#E8DCCB] text-[#1A3470] border border-[#E8DCCB26] h-[46px] rounded-full flex items-center justify-center gap-1 uppercase text-sm lg:text-base font-inter">
          See all press and interviews <MdKeyboardArrowRight className="text-2xl" />
        </button>
      </Link>
    </div>
  );
}
