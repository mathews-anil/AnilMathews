"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const HomeHero = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="max-w-[1920px] mx-auto relative">
            <div>
                <header className="flex px-4 md:px-12  py-[17px] md:py-7 justify-between items-center relative z-50">
                    <img src="/images/header/logo.png" alt="" className="w-[122px] md:w-[152px]" />
                    <ul className="hidden md:flex gap-8 uppercase font-inter font-medium text-sm text-[#111111]">
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
                    </ul>
                    <button
                        className="md:hidden"
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

                <div className={` md:hidden  fixed inset-0 z-40 flex justify-center items-start transition-all duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                    <div className={`mobile_menu_bg text-white w-[calc(100%-26px)] mt-[15px] mb-[11px] pt-[90px] pb-[25px] rounded-xl h-[calc(100vh-22px)] transition-all duration-300 flex flex-col justify-between ${open ? "translate-y-0" : "-translate-y-10"}`}>
                        <div className="flex flex-col gap-4 md:gap-8 px-[59px]">
                            <p className="text-sm sm:text-base font-inter text-[#E8DCCB] uppercase">
                                Main Menu
                            </p>

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
                            </ul>
                        </div>

                        <div className="mt-10 flex flex-col gap-4 w-full px-[39px]">
                            <button className="w-full bg-[#1A3470] text-[#E8DCCB] h-[50px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium ">
                                Explore Ventures <MdKeyboardArrowRight className="text-lg" />

                            </button>

                            <button className="w-full bg-[#E8DCCB12] backdrop-blur-[25px] border border-[#11141826] flex justify-center items-center gap-2 text-[#E8DCCB] h-[50px] rounded-full uppercase text-sm font-inter font-medium ">
                                See Press <MdKeyboardArrowRight className="text-lg" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row px-4 md:px-12 main_padding_left gap-[30px] lg:gap-0">
                <Image src="/images/home/home_hero_mob.png" alt="img icon" width={370} height={527} className="w-full lg:hidden mt-[-40px]" />
                <div className="w-full lg:w-[40%] 2xl:w-[1000px] flex flex-col justify-center gap-[20px] lg:gap-[100px]">
                    <div className="flex items-start gap-4 w-full lg:w-[442px]">
                        <Image src="/images/home/hero_icon.png" alt="img icon" width={37} height={37} className="w-[25px] h-[25px] lg:mt-[-20px]" />
                        <p className="font-inter text-sm md:text-base uppercase" >He founded Near Intelligence and led it from a small data experiment to a <span className="font-semibold text-[#1A3470]">billion-dollar, Nasdaq-listed enterprise</span> operating across four continents. </p>
                    </div>
                    <div className="flex flex-col gap-[20px] lg:gap-[30px]">
                        <p className="font-inter text-base uppercase text-[#111111] ml-2 lg:ml-[50px]">Hello, I’m 👋</p>
                        <div>
                            <div className="flex items-start gap-5 2xl:gap-0">
                                <h1 className="font-charter uppercase main_anil_mathew_heading text-[#111111]" style={{ letterSpacing: "-7px" }}>ANIL</h1>
                                <p className="font-inter text-sm 2xl:text-base text-[#111111] uppercase mt-2">I build where<br /> technology amplifies<br /> human possibility.</p>
                            </div>
                            <h1 className="font-charter main_anil_mathew_heading uppercase text-[#111111]" style={{ letterSpacing: "-7px" }}>Mathews</h1>
                        </div>
                        <p className="font-inter text-base lg:text-xl text-[#111111] opacity-65" style={{ letterSpacing: "-1px" }}>
                            I build companies that turn technology into leverage. Through Alphabyte Ventures, I’m creating products that make progress faster, decisions clearer, and teams more effective.
                        </p>
                        <div className="mt-[20px] flex flex-col sm:flex-row flex-wrap gap-4 w-full">
                            <button className="mx-auto md:mx-0 w-[342px] md:w-[231px] bg-[#1A3470] text-[#E8DCCB] h-[46px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium ">
                                Explore Ventures <MdKeyboardArrowRight className="text-lg" />
                            </button>
                            <button className="mx-auto md:mx-0 w-[342px] md:w-[155px] bg-[#E8DCCB03] backdrop-blur-[25px] border border-[#11141826] flex justify-center items-center gap-2 text-[#111111] h-[46px] rounded-full uppercase text-sm font-inter font-medium ">
                                See Press <MdKeyboardArrowRight className="text-lg" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="home_hero_bg hidden lg:block w-[60%] xl:w-[814px] min-h-[900px] xl:min-h-[970px] ">
                    <Image src="/images/home/home_hero.png" alt="home hero" width={814} height={1038} className="z-10 absolute top-[9px] right-[10px]" />
                    <div className="z-30 absolute ">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHero
