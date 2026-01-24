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
                <li>
                  <Link href="/about-anil-mathews" onClick={() => setOpen(false)}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/press" onClick={() => setOpen(false)}>
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="/speaking" onClick={() => setOpen(false)}>
                    Speaking
                  </Link>
                </li>
                <li>
                  <Link href="/ventures" onClick={() => setOpen(false)}>
                    Ventures
                  </Link>
                </li>
                <li>
                  <Link href="/articles" onClick={() => setOpen(false)}>
                    Articles
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 w-full px-[39px]">
              <Link
                href="/ventures"
                className="w-full bg-[#1A3470] text-[#E8DCCB] h-[50px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium"
                onClick={() => setOpen(false)}
              >
                Explore Ventures <MdKeyboardArrowRight className="text-2xl" />
              </Link>

              <Link
                href="/speaking"
                className="w-full bg-[#E8DCCB12] backdrop-blur-[25px] border border-[#11141826] flex justify-center items-center gap-2 text-[#E8DCCB] h-[50px] rounded-full uppercase text-sm font-inter font-medium"
                onClick={() => setOpen(false)}
              >
                BOOK A TALK <MdKeyboardArrowRight className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-end px-4 md:px-12 main_padding_left gap-[20px] lg:gap-0">
        {/* Single semantic H1 for SEO + accessibility. Visually hidden to preserve design. */}
        <h1 className="sr-only">
          Anil Mathews is an entrepreneur and author, founder of Near Intelligence
          and Alphabyte Ventures.
        </h1>

        <Image
          src="/images/about/about_mob_new.png"
          alt="Portrait of Anil Mathews, entrepreneur and author"
          width={370}
          height={527}
          className="w-full lg:hidden mt-[-40px]"
        />

        <Image
          src="/images/about/about.svg"
          alt="Portrait of Anil Mathews"
          width={814}
          height={1038}
          className="lg:w-[700px] xl:w-[700px] 2xl:w-[800px] z-10 absolute top-[9px] left-[10px] hidden lg:block"
        />

        <div className="w-full lg:w-[30%] [@media(min-width:1130px)]:w-[35%] [@media(min-width:1250px)]:w-[42%] xl:w-[45%]! [@media(min-width:1350px)]:w-[50%]! lg:pt-[50px] about_main_section [@media(min-width:1550px)]:w-[55%]! flex flex-col gap-[20px] lg:gap-[100px] min-h-[500px] xl:min-h-[920px] [@media(min-width:1400px)]:min-h-[950px] 2xl:min-h-[970px]!">
          <div className="flex flex-col items-start gap-[15px] lg:gap-[30px] relative">
            <p className="font-inter text-base uppercase text-[#111111] lg:ml-[40px] xl:ml-[65px] order-2 lg:order-1 mt-7 lg:mt-0">
              I’m AN
            </p>

            {/* Visual hero heading stays the same; now it's an H2 to keep exactly one H1 on the page. */}
            <h2 className="font-charter order-3 lg:order-2 main_about_heading uppercase text-[#111111] main_heading_letter_space">
              entrepreneur <br />& author{" "}
            </h2>

            {/* KEEP THIS ORDERING so mobile layout stays correct */}
            <p
              className="order-1 lg:order-3 font-inter text-sm lg:text-base uppercase text-[#111111] w-full xl:w-[432px] ml-3 xl:ml-[50px] 2xl:ml-[120px] [@media(min-width:1700px)]:ml-[170px]"
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
              className="hidden xl:block xl:absolute bottom-[-30px] 2xl:bottom-[-50px] right-[15%] 2xl:right-[15%] w-[50px] 2xl:w-[130px]"
            />
          </div>

          <div className="flex flex-col gap-[25px] lg:gap-[30px] w-[95%] 2xl:w-[578px] xl:ml-[10%] 2xl:ml-[10%]">
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

            {/* CTA block: VERY TIGHT GAP, same style for both */}
            <div className="mt-[-15px] lg:mt-0 mb-[50px] lg:mb-0 flex flex-col gap-[6px]">
              <Link
                href="https://www.alphabyte.com/"
                target="_blank"
                rel="noopener"
                className="bg-transparent flex items-center gap-2 text-[#1A3470] h-[46px] rounded-full uppercase text-sm lg:text-base font-inter font-semibold"
              >
                Visit Alphabyte Ventures{" "}
                <MdKeyboardArrowRight className="text-2xl" />
              </Link>

              <Link
                href="/about-anil-mathews/fact-sheet"
                className="bg-transparent flex items-center gap-2 text-[#1A3470] h-[46px] rounded-full uppercase text-sm lg:text-base font-inter font-semibold"
              >
                View Fact Sheet <MdKeyboardArrowRight className="text-2xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
