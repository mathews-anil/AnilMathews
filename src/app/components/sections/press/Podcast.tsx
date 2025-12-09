import Image from 'next/image'
import React from 'react'
import { CiHeart } from "react-icons/ci";
import { IoArrowRedoOutline } from 'react-icons/io5';
import { CiPlay1 } from "react-icons/ci";
import Link from 'next/link';

const Podcast = () => {
    return (
        <div className='bg-[#111111]/5 py-[53px] lg:py-[107px] px-[15px] px-4 md:px-[50px] xl:px-[100px] 2xl:px-[130px] vision_section_padding '>
            <div className='max-w-[1920px] mx-auto flex gap-6 lg:gap-12 flex-col '>
                <h2 className='font-charter text-[36px] lg:text-[64px] leading-[36px] lg:leading-[64px] text-[#111111]' style={{ letterSpacing: "-2px" }}>Podcasts</h2>
                <div className='flex flex-col gap-6 lg:gap-8 items-center lg:items-start text-center lg:text-start'>
                    <div className='flex flex-col lg:flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-[24px] text-center lg:text-left'>
                        <div className='flex flex-col lg:flex-row  items-center gap-[24px] lg:gap-[32px]'>
                            <Image src="/images/press/podcast1.png" width={372} height={350} alt='podcast image' className='w-full lg:w-[191px]' />
                            <div className='flex flex-col gap-[24px] lg:gap-4 w-full lg:w-[80%] 2xl:w-[987px]'>
                                <p className='text-sm lg:text-base font-inter uppercase text-[#111111]'>September 19, 2022 EP : 231 | 28 mins</p>
                                <h3 className='text-xl leading-[26px] lg:text-[32px] lg:leading-[40px] font-charter mb-[-15px] lg:mb-0 text-[#111111]'>#231: Enterprise Software with Near CEO Anil Mathews</h3>
                                <p className='text-[#111111] opacity-65 font-inter text-base lg:text-xl'>Discussion on enterprise software, Near’s data platform, and building traction with disciplined execution.</p>
                            </div>
                        </div>
                        <div className='flex w-full lg:w-[223px] flex-col lg:flex-row gap-[24px] lg:gap-[32px] items-center w-full'>
                            <div className='gap-[32px] flex items-center order-2 lg:order-1'>
                                <CiHeart className='text-[28px]'  />
                                <IoArrowRedoOutline className='text-[24px]'  />
                            </div>
                            <Link href="https://accelerateshares.com/podcasts/absolute-return-podcast-231-enterprise-software-with-near-ceo-anil-mathews/" target="_blank" rel="nofollow noopener" className='order-1 lg:order-2'>
                            <button className="cursor-pointer  mx-auto md:mx-0 w-[202px] md:w-[111px] bg-[#1A3470] text-[#E8DCCB] h-[46px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium ">
                                PLAY <CiPlay1 className='text-[20px]'  />
                            </button>
                            </Link>
                        </div>
                    </div>
                    <span className='w-full border-b border-[#1A1A1A]/15 hidden lg:block'></span>
                    <div className='flex flex-col lg:flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-[24px] text-center lg:text-left'>
                        <div className='flex flex-col lg:flex-row items-center gap-[24px] lg:gap-[32px]'>
                            <Image src="/images/press/podcast2.png" width={372} height={350} alt='podcast image' className='w-full lg:w-[191px]' />
                            <div className='flex flex-col gap-[24px] lg:gap-4 w-full lg:w-[80%] 2xl:w-[987px]'>
                                <p className='text-sm lg:text-base font-inter uppercase text-[#111111]'>August 03, 2022 by Kristi Marvin | 34:50 MINS</p>
                                <h3 className='text-xl leading-[26px] lg:text-[32px] lg:leading-[40px] mb-[-15px] lg:mb-0 font-charter text-[#111111]'>Podcast: Anil Mathews, Founder & CEO of Near</h3>
                                <p className='text-[#111111] opacity-65 font-inter text-base lg:text-xl'>Conversation with Anil Mathews on taking Near public through a SPAC, market timing, and lessons from the listing process.</p>
                            </div>
                        </div>
                        <div className='flex w-full lg:w-[223px] flex-col lg:flex-row gap-[24px] lg:gap-[32px] items-center w-full'>
                            <div className='gap-[32px] flex items-center order-2 lg:order-1'>
                                <CiHeart className='text-[28px]' />
                                <IoArrowRedoOutline className='text-[24px]' />
                            </div>
                           <Link className='order-1 lg:order-2' href="https://www.spacinsider.com/news/market-intel/podcast-near-inka-anil-mathews" target="_blank" rel="nofollow noopener">
                            <button className="cursor-pointer  mx-auto md:mx-0 w-[202px] md:w-[111px] bg-[#1A3470] text-[#E8DCCB] h-[46px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium ">
                                PLAY <CiPlay1 className='text-[20px]'  />
                            </button>
                           </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Podcast
