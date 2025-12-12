"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation"; // 👈 ADD THIS
import { MdKeyboardArrowRight } from "react-icons/md";
const HomeHero = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const navItems = [
    { name: "About", path: "/about-anil-mathews" },
    { name: "Press", path: "/press" },
    { name: "Ventures", path: "/ventures" },
        { name: "Articles", path: "/articles" },

  ];
  return (
    <div className="max-w-[1920px] mx-auto relative">
      <div>
        <header className="flex px-4 md:px-12  py-[17px] md:py-7 justify-between items-center relative z-50">
          <Link href="/">
            <Image
              src="/images/header/logo.png"
              width={152}
              height={26}
              alt=""
              className="w-[122px] 2xl:w-[152px] "
            />
          </Link>
          <ul className="hidden lg:flex gap-4 lg:gap-3 [@media(min-width:1400px)]:gap-6 2xl:gap-8! uppercase font-inter font-medium text-xs xl:text-sm text-[#111111]">
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <li key={item.path} className="relative group cursor-pointer">
                  <Link
                    href={item.path}
                    className={`transition-all duration-300 ${
                      isActive ? "font-bold text-[#1A3470]" : ""
                    }`}
                  >
                    {item.name}
                  </Link>

                  {/* Animated underline */}
                  <span
                    className={`absolute -bottom-[1px] left-0 h-[1px] bg-[#1A3470] transition-all duration-300 
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </li>
              );
            })}
          </ul>
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? (
              <Image
                src="/images/header/close.png"
                alt="close icon"
                width={24}
                height={24}
              />
            ) : (
              <Image
                src="/images/header/menu.png"
                alt="close icon"
                width={24}
                height={24}
              />
            )}
          </button>
        </header>

        <div
          className={` lg:hidden fixed inset-0 z-40 flex justify-center items-start transition-all duration-300 ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`mobile_menu_bg text-white w-[calc(100%-26px)] mt-[15px] mb-[11px] pt-[90px] pb-[25px] rounded-xl h-[calc(100vh-22px)] transition-all duration-300 flex flex-col justify-between ${
              open ? "translate-y-0" : "-translate-y-10"
            }`}
          >
            <div className="flex flex-col gap-4 lg:gap-8 px-[59px]">
              {/* <p className="text-sm sm:text-base font-inter text-[#E8DCCB] uppercase">
                Main Menu
              </p> */}

              <ul className="flex flex-col gap-4 md:gap-8 text-[25px] 2xl:text-[36px] font-charter text-[#E8DCCB]">
                <li>
                  <Link href="/about-anil-mathews">About</Link>
                </li>
                <li>
                  <Link href="/press">Press</Link>
                </li>
                <li>
                  <Link href="/speaking">Speaking</Link>
                </li>
                <li>
                  <Link href="/ventures">Ventures</Link>
                </li>
                <li>
                  <Link href="/articles">Articles</Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 w-full px-[39px]">
              <Link href="/ventures">
                <button className="w-full bg-[#1A3470] text-[#E8DCCB] h-[50px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium ">
                  Explore Ventures <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>
              <Link href="/speaking">
                <button className="w-full bg-[#E8DCCB12] backdrop-blur-[25px] border border-[#11141826] flex justify-center items-center gap-2 text-[#E8DCCB] h-[50px] rounded-full uppercase text-sm font-inter font-medium ">
                  BOOK A TALK <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row px-4 md:px-12 main_padding_left gap-[20px] lg:gap-0">
        <Image
          src="/images/home/home_hero_mob.png"
          alt="img icon"
          width={370}
          height={527}
          className="w-full lg:hidden mt-[-40px]"
        />
        <div className="w-full lg:w-[40%] xl:w-[48%] 2xl:w-[650px] flex flex-col justify-center gap-[60px] lg:gap-[100px] xl:gap-[140px] 2xl:gap-[170px]">
          <div className="flex items-start gap-4 xl:gap-6 w-full xl:w-[442px]">
            <Image
              src="/images/home/hero_icon.png"
              alt="img icon"
              width={37}
              height={37}
              className="w-[25px] lg:w-[37px] lg:mt-[-20px] xl:mt-[-30px]"
            />
            <p className="font-inter text-sm xl:text-base md:leading-[20px] uppercase w-[calc(100%-37px)]">
              He founded Near Intelligence and led it from a small data
              experiment to a{" "}
              <Link target="_blank" rel="noopener" href="https://techcrunch.com/2022/05/19/data-intelligence-startup-near-with-1-6b-anonymized-user-ids-lists-on-nasdaq-via-spac-at-a-1b-market-cap-raises-100m/" className="font-semibold text-[#1A3470] hover:underline">
                billion-dollar, Nasdaq-listed enterprise
              </Link>{" "}
              operating across four continents.{" "}
            </p>
          </div>
          <div className="flex flex-col gap-[20px] xl:gap-[30px]">
            <p className="font-inter text-base uppercase text-[#111111] ml-2 lg:ml-[30px] xl:ml-[50px]">
              Hello, I’m 👋
            </p>
            <div>
              <div className="flex items-start gap-5 2xl:gap-0">
                <h1
                  className="font-charter uppercase main_anil_mathew_heading text-[#111111]"
                  style={{ letterSpacing: "-7px" }}
                >
                  ANIL
                </h1>
                <p className="font-inter text-sm lg:text-[10px] xl:text-sm 2xl:text-base text-[#111111] uppercase mt-2 2xl:mt-1">
                  I build where
                  <br /> technology amplifies
                  <br /> human possibility.
                </p>
              </div>
              <h1
                className="font-charter main_anil_mathew_heading uppercase text-[#111111]"
                style={{ letterSpacing: "-7px" }}
              >
                Mathews
              </h1>
            </div>
            <p
              className="font-inter text-base lg:text-xl text-[#111111] opacity-65"
              style={{ letterSpacing: "-1px" }}
            >
              I build companies that turn technology into leverage. Through
              Alphabyte Ventures, I’m creating products that make progress
              faster, decisions clearer, and teams more effective.
            </p>
            <div className="mt-[25px] flex flex-col sm:flex-row flex-wrap gap-4 w-full lg:mx-0">
              <Link href="/ventures">
                <button className="cursor-pointer mx-auto md:mx-0 w-[342px] sm:w-full md:w-[231px] bg-[#1A3470] text-[#E8DCCB] h-[50px] lg:h-[46px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium ">
                  Explore Ventures <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>

              <Link href="/speaking">
                <button className="cursor-pointer mx-auto md:mx-0 w-[342px] sm:w-full md:w-[155px] bg-[#E8DCCB03] backdrop-blur-[25px] border border-[#11141826] flex justify-center items-center gap-2 text-[#111111] h-[44px] lg:h-[46px] rounded-full uppercase text-sm font-inter font-medium ">
                  BOOK A TALK <MdKeyboardArrowRight className="text-2xl" />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="home_hero_bg hidden lg:block w-[60%] xl:w-[50%] 2xl:w-[700px] 3xl:w-[814px] min-h-[650px] xl:min-h-[750] [@media(min-width:1370px)]:min-h-[850px] 2xl:min-h-[970px]! ">
          <Image
            src="/images/home/home_hero.svg"
            alt="home hero"
            width={814}
            height={1038}
            className="z-10 absolute top-[9px] right-[10px] lg:right-[25px] lg:w-[580px] xl:w-[50%] 2xl:w-[700px] [@media(min-width:1530px)]:w-[814px]"
          />
          <div className="z-30 absolute "></div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;

// min-[1100px]:w-[700px]
