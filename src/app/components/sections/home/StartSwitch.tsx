import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const StartSwitch = () => {
    return (
        <div className='bg-[#E8DCCB] '>
            <div className='flex flex-col xl:flex-row gap-6 lg:gap-[80px] px-4 md:px-[50px] xl:px-[100px] xl:pr-0! 2xl:px-[130px] pt-[60px] md:pt-[100px] xl:pt-[150px] 2xl:pt-[220px] items-center vision_section_padding max-w-[1920px] mx-auto'>
                <div className='flex flex-col gap-6 lg:gap-10 lg:mb-[70px] 2xl:gap-16 w-full xl:w-[600px] 2xl:w-[713px] items-center lg:items-start text-center lg:text-left'>
                    <div className='flex flex-col gap-4 lg:gap-6 w-full 2xl:w-[541px]'>
                        <h2 className='font-charter text-[36px] lg:text-[64px] text-[#111111] leading-[36px] lg:leading-[64px]' style={{ letterSpacing: "-2px" }}>Writing and thought leadership</h2>
                        <p className='text-[#111111] opacity-65 font-inter text-base lg:text-xl'>The Start Switch is a book about motion. It shows how to begin, sustain momentum, and stay focused when most people stall. The book explores the mechanics of progress and what it takes to build something that lasts.</p>
                    </div>
                    <div className='w-full gap-4 flex flex-col lg:flex-row '>
                       <Link href="https://www.thestartswitch.com" target='_blank' rel="noopener">
                        <button className="cursor-pointer mx-auto md:mx-0 w-[330px] sm:w-full lg:w-[170px] 2xl:w-[199px] bg-[#1A3470] text-[#E8DCCB] h-[50px] lg:h-[46px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm xl:text-[13px] 2xl:text-base font-inter font-medium ">
                            Read the book <MdKeyboardArrowRight className="text-2xl" />
                        </button>
                       </Link>
                        <Link href="https://www.amazon.com/dp/B0FH41DL25" target="_blank" rel="nofollow noopener">
                        <button className="cursor-pointer mx-auto md:mx-0 w-[330px] sm:w-full lg:w-[185px] 2xl:w-[207px] bg-[#E8DCCB03] backdrop-blur-[25px] border border-[#11141826] flex justify-center items-center gap-2 text-[#111111] h-[44px] lg:h-[46px] rounded-full uppercase text-sm xl:text-[13px] 2xl:text-base font-inter font-medium ">
                            Buy on amazon <MdKeyboardArrowRight className="text-2xl" />
                        </button>
                        </Link>
                        <Link href="https://www.goodreads.com/author/show/57597604.Anil_Mathews" target="_blank" rel="nofollow noopener">
                            <button className="cursor-pointer mx-auto md:mx-0 w-[330px] sm:w-full lg:w-[250px] 2xl:w-[275px] bg-[#E8DCCB03] backdrop-blur-[25px] border border-[#11141826] flex justify-center items-center gap-2 text-[#111111] h-[44px] lg:h-[46px] rounded-full uppercase text-sm xl:text-[13px] 2xl:text-base font-inter font-medium ">
                                Reviews on Goodreads <MdKeyboardArrowRight className="text-2xl" />
                            </button>
                            </Link>
                    </div>
                </div>
                <Image src="/images/home/starts.png" alt='starts image' width={802} height={732} className='hidden xl:block xl:w-[500px] 2xl:w-[600px] [@media(min-width:1700px)]:w-[802px] ' />
                <Image src="/images/home/starts_mob.png" alt='starts image' width={298} height={420} className='xl:hidden block w-[90%]  mx-auto mt-[30px]' />
            </div>
        </div>
    )
}

export default StartSwitch
