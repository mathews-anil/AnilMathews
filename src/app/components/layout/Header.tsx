"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation"; // 👈 ADD THIS
import { MdKeyboardArrowRight } from "react-icons/md";
const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    // { name: "Home", path: "/" },
    { name: "About", path: "/about-anil-mathews" },
    { name: "Press", path: "/press" },
    { name: "Speaking", path: "/speaking" },
    { name: "Ventures", path: "/ventures" },
    { name: "Articles", path: "/articles" },
  ];
  return (
    <>
      <header className="flex px-4 md:px-12 max-w-[1920px] mx-auto py-[17px] md:py-7 justify-between items-center relative z-50">
        <Link href="/"><Image src="/images/header/logo.png" width={152} height={26} alt="" className="w-[122px] 2xl:w-[152px] " /></Link>
        <ul className="hidden md:flex gap-4 2xl:gap-8 uppercase font-inter font-medium text-xs xl:text-sm text-[#111111]">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <li key={item.path} className="relative group cursor-pointer">
                <Link
                  href={item.path}
                  className={`transition-all duration-300 ${isActive ? "font-bold text-[#1A3470]" : ""
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
        <button
          className="md:hidden z-50"
          onClick={() => setOpen(!open)}
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
              alt="close icon"
              width={24}
              height={24}
            />
          )}
        </button>
      </header>

      <div className={` md:hidden z-40 fixed inset-0 z-40 flex justify-center items-start
  transition-all duration-300 
  ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className={`mobile_menu_bg z-40 text-white w-[calc(100%-26px)]  
    mt-[15px] mb-[11px] pt-[90px] pb-[25px] rounded-xl h-[calc(100vh-22px)]
    transition-all duration-300 flex flex-col justify-between
    ${open ? "translate-y-0" : "-translate-y-10"}
    `}>
          <div className="flex flex-col gap-4 md:gap-8 px-[59px]">
            {/* <p className="text-sm sm:text-base font-inter text-[#E8DCCB] uppercase">
              Main Menu
            </p> */}

            <ul className="flex flex-col gap-4 md:gap-8 text-[25px] md:text-[36px] font-charter text-[#E8DCCB]">
              
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

          <div className="mt-10 flex flex-col gap-4 w-full px-[39px]">
            <button className="w-full bg-[#1A3470] text-[#E8DCCB] h-[50px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium ">
              Explore Ventures <MdKeyboardArrowRight className="text-2xl" />

            </button>

            <button className="w-full bg-[#E8DCCB12] backdrop-blur-[25px] border border-[#11141826] flex justify-center items-center gap-2 text-[#E8DCCB] h-[50px] rounded-full uppercase text-sm font-inter font-medium ">
              See Press <MdKeyboardArrowRight className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
