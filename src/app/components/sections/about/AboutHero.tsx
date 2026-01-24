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
      {/* Header */}
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
                    className={`absolute -bottom-[1px] left-0 h-[1px] bg-[#1A3470] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
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
            <Image
              src={open ? "/images/header/close.png" : "/images/header/menu.png"}
              alt="menu toggle"
              width={24}
              height={24}
            />
          </button>
        </header>

        {/* Mobile menu */}
        <div
          className={`lg:hidden fixed inset-0 z-40 flex justify-center items-start transition-all duration-300 ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`mobile_menu_bg w-[calc(100%-26px)] mt-[15px] mb-[11px] pt-[90px] pb-[25px] rounded-xl h-[calc(100vh-22px)] transition-all duration-300 flex flex-col justify-between ${
              open ? "translate-y-0" : "-translate-y-10"
            }`}
          >
            <ul className="flex flex-col gap-6 px-[59px] text-[25px] md:text-[36px] font-charter text-[#E8DCCB]">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} onClick={() => setOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 px-[39px]">
              <Link
                href="/ventures"
                onClick={() => setOpen(false)}
                className="bg-[#1A3470] text-[#E8DCCB] h-[50px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium"
              >
                Explore Ventures <MdKeyboardArrowRight className="text-2xl" />
              </Link>
              <Link
                href="/speaking"
                onClick={() => setOpen(false)}
                className="bg-[#E8DCCB12] border border-[#11141826] h-[50px] flex justify-center items-center gap-2 text-[#E8DCCB] rounded-full uppercase text-sm font-inter font-medium"
              >
                Book a talk <MdKeyboardArrowRight className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="flex flex-col lg:flex-row justify-end px-4 md:px-12 gap-[20px] lg:gap-0">
        <h1 className="sr-only">
          Anil Mathews, entrepreneur and author, founder of Near Intelligence and
          Alphabyte Ventures
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
          className="hidden lg:block absolute top-[9px] left-[10px] lg:w-[700px] xl:w-[700px] 2xl:w-[800px] z-10"
        />

        <div className="w-full lg:w-[45%] lg:pt-[50px] flex flex-col gap-[20px] lg:gap-[100px] min-h-[500px] xl:min-h-[920px]">
          <div className="flex flex-col gap-[15px] lg:gap-[30px] relative">
            <p className="font-inter text-base uppercase text-[#111111]">
              I’m an
            </p>

            <h2 className="font-charter main_about_heading uppercase text-[#111111]">
              entrepreneur <br />& author
            </h2>

            <p className="font-inter text-sm lg:text-base uppercase text-[#111111]">
              driven by one idea: technology should expand human potential, not
              replace it.
            </p>
          </div>

          <div className="flex flex-col gap-[18px] w-full">
            <p className="text-base lg:text-xl font-inter text-[#111111] opacity-65">
              Over the past two decades I’ve built companies that prove small,
              clear-thinking teams can shape global markets. I founded Near
              Intelligence, scaled it across Asia, Australia, Europe, and North
              America, and led its Nasdaq listing at a valuation near one billion
              dollars.
            </p>

            <p className="text-base lg:text-xl font-inter text-[#111111] opacity-65">
              Today I lead Alphabyte Ventures, a studio that creates and invests
              in focused software products that give clarity, speed, and
              precision to ambitious teams everywhere.
            </p>

            {/* CTAs */}
            <div
              className="
                mt-2
                flex flex-col
                gap-[2px]
                lg:flex-row
                lg:gap-6
                lg:items-center
              "
            >
              <Link
                href="https://www.alphabyte.com/"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 text-[#1A3470] h-[46px] uppercase text-sm lg:text-base font-inter font-semibold"
              >
                Visit Alphabyte Ventures{" "}
                <MdKeyboardArrowRight className="text-2xl" />
              </Link>

              <Link
                href="/about-anil-mathews/fact-sheet"
                className="flex items-center gap-2 text-[#1A3470] h-[46px] uppercase text-sm lg:text-base font-inter font-semibold"
              >
                View fact sheet{" "}
                <MdKeyboardArrowRight className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
