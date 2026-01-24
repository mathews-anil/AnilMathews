"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { MdKeyboardArrowRight } from "react-icons/md";

const AboutHero = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "About", path: "/about-anil-mathews" },
    { name: "Press", path: "/press" },
    { name: "Speaking", path: "/speaking" },
    { name: "Ventures", path: "/ventures" },
    { name: "Articles", path: "/articles" },
  ];

  return (
    <div className="max-w-[1920px] mx-auto relative">
      <div>
        <header className="flex px-4 md:px-12 py-[17px] md:py-7 justify-between items-center relative z-50">
          <Link href="/">
            <Image
              src="/images/header/logo.png"
              width={152}
              height={26}
              alt="Anil Mathews"
              className="w-[122px] 2xl:w-[152px]"
            />
          </Link>

          <ul className="hidden lg:flex gap-4 2xl:gap-8 uppercase font-inter font-medium text-xs xl:text-sm text-[#111111]">
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

                  <span
                    className={`absolute -bottom-[1px] left-0 h-[1px] bg-[#1A3470] transition-all duration-300 
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </li>
              );
            })}
          </ul>

          <button
            className="lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
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
                alt="menu icon"
                width={24}
                height={24}
              />
            )}
          </button>
        </header>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 z-40 flex justify-center items-start transition-all duration-300 ${
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
            <div className="flex flex-col gap-4 md:gap-8 px-[59px]">
              <ul className="flex flex-col gap-4 md:gap-8 text-[25px] md:text-[36px] font-charter text-[#E8DCCB]">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link href={item.path} onClick={() => setOpen(false)}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 w-full px-[39px]">
              <Link
                href="/ventures"
                onClick={() => setOpen(false)}
                className="w-full bg-[#1A3470] text-[#E8DCCB] h-[50px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium"
              >
                Explore Ventures <MdKeyboardArrowRight className="text-2xl" />
              </Link>

              <Link
                href="/speaking"
                onClick={() => setOpen(false)}
                className="w-full bg-[#E8DCCB12] border border-[#11141826] flex justify-center items-center gap-2 text-[#E8DCCB] h-[50px] rounded-full uppercase text-sm font-inter font-medium"
              >
                BOOK A TALK <MdKeyboardArrowRight className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row justify-end px-4 md:px-12 main_padding_left gap-[20px] lg:gap-0">
        {/* Single semantic H1 */}
        <h1 className="sr-only">
          Anil Mathews is an entrepreneur and author, founder of Near Intelligence
          and Alphabyte Ventures.
        </h1>

        <Image
          src="/images/about/about_mob_new.png"
          alt="Portrait of Anil Mathews"
          width={370}
          height={527}
          className="w-full lg:hidden mt-[-40px]"
        />

        <Image
          src="/images/about/about.svg"
          alt="Portrait of Anil Mathews"
          width={814}
          height={1038}
          className="hidden lg:block lg:w-[700px] xl:w-[700px] 2xl:w-[800px] z-10 absolute top-[9px] left-[10px]"
        />

        <div className="w-full lg:w-[30%] [@media(min-width:1130px)]:w-[35%] [@media(min-width:1250px)]:w-[42%] xl:w-[45%]! [@media(min-width:1350px)]:w-[50%]! lg:pt-[50px] about_main_section flex flex-col gap-[20px] lg:gap-[100px] min-h-[500px] xl:min-h-[920px] 2xl:min-h-[970px]!">
          <div className="flex flex-col items-start gap-[15px] lg:gap-[30px] relative">
            <p className="font-inter text-base uppercase text-[#111111] lg:ml-[40px] xl:ml-[65px]">
              I’m AN
            </p>

            <h2 className="font-charter main_about_heading uppercase text-[#111111] main_heading_letter_space">
              entrepreneur <br />& author
            </h2>

            <p
              className="font-inter text-sm lg:text-base uppercase text-[#111111] w-full xl:w-[432px] ml-3 xl:ml-[50px] 2xl:ml-[120px]"
              style={{ letterSpacing: "-1px" }}
            >
              driven by one idea: technology should expand human potential, not
              replace it.
            </p>

            <Image
              src="/images/about/icon.png"
              width={134}
              height={130}
              alt="about icon"
              className="hidden xl:block xl:absolute bottom-[-30px] right-[15%] w-[50px] 2xl:w-[130px]"
            />
          </div>

          <div className="flex flex-col gap-[25px] lg:gap-[30px] w-[95%] 2xl:w-[578px] xl:ml-[10%]">
            <p className="text-base lg:text-xl font-inter text-[#111111] opacity-65">
              Over the past two decades I’ve built companies that prove small,
              clear-thinking teams can shape global markets. I founded Near
              Intelligence, scaled it across Asia, Australia, Europe, and North
              America, and led its Nasdaq listing at a valuation near one
              billion dollars.
            </p>

            <p className="text-base lg:text-xl font-inter text-[#111111] opacity-65">
              Today I lead Alphabyte Ventures, a studio that creates and invests
              in focused software products that give clarity, speed, and
              precision to ambitious teams everywhere.
            </p>

            {/* Primary + Secondary CTA */}
            <div className="flex flex-col">
              <Link
                href="https://www.alphabyte.com/"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 text-[#1A3470] h-[46px] uppercase text-sm lg:text-base font-inter font-semibold"
              >
                Visit Alphabyte Ventures <MdKeyboardArrowRight className="text-2xl" />
              </Link>

              <Link
                href="/about-anil-mathews/fact-sheet"
                className="inline-flex items-center gap-2 font-inter uppercase text-xs lg:text-sm font-semibold text-[#111111] opacity-60 hover:opacity-100 transition-opacity w-fit mt-2 ml-[2px]"
              >
                View Fact Sheet <MdKeyboardArrowRight className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
