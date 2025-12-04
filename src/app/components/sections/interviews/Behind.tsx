import Image from 'next/image'
import React from 'react'
import { MdAccessTime, MdKeyboardArrowRight } from 'react-icons/md'

const Behind = () => {
    return (
        <div className='px-4 max-w-[1920px] mx-auto py-[35px] lg:py-[90px] w-full xl:w-[1100px] flex flex-col gap-[30px] lg:gap-[70px]'>
            <div className='flex flex-col gap-[20px] lg:gap-[30px] text-left'>
                <h2 className='font-charter text-[36px] lg:text-[64px] leading-[36px] lg:leading-[64px] text-[#111111]' style={{ letterSpacing: "-2px" }}>Behind the Bell — Nasdaq MarketSite</h2>
                <div className='flex gap-2 lg:gap-6 items-center text-[#1A3470] font-inter text-base lg:text-xl '>
                    <MdAccessTime />
                    <span><span className='mr-2'>March 24, 2023   </span> 00:58 Mins</span>
                </div>
                <p className='text-[#111111] opacity-65 font-inter text-base lg:text-xl'>Recorded live at Nasdaq MarketSite on Near Intelligence’s listing day, this Behind the Bell segment captures Anil Mathews in a brief on-floor conversation tied to the bell ceremony and first day of trading under ticker NIR. The appearance accompanied Near’s SPAC combination and market debut.</p>
            </div>
            <div className='flex flex-col gap-[20px] lg:gap-[25px] '>
                <h3 className='font-charter text-xl lg:text-[32px] text-[#1A1A1A] '>Key notes</h3>
                <div className='flex flex-col gap-2 lg:gap-4  '>
                    <div className=' flex gap-2 lg:gap-4 items-start md:items-center'>
                        <Image src="/images/interviews/icon.png" width={31} height={30} alt='interview image' />
                        <p className='text-base lg:text-xl font-inter text-[#111111] '>Setting: Nasdaq MarketSite, Times Square, as part of the Behind the Bell interview series.</p>
                    </div>
                    <div className=' flex gap-2 lg:gap-4 items-start md:items-center'>
                        <Image src="/images/interviews/icon.png" width={31} height={30} alt='interview image' />
                        <p className='text-base lg:text-xl font-inter text-[#111111] '>Moment: Bell-day context following the SPAC combination and the NIR trading start.</p>
                    </div>
                </div>

            </div>
            <div className='relative w-full '>
                <Image src="/images/interviews/interview.png" width={1058} height={536} alt='interview image' className='rounded-[24px]' />
                <Image src="/images/interviews/play.png" width={64} height={64} alt='interview image' className='absolute top-[calc(50%-32px)] left-[calc(50%-32px)] cursor-pointer' />
            </div>
            <div className="mt-[20px] flex flex-col sm:flex-row flex-wrap gap-4 w-full justify-center items-center">
                <button className="mx-auto md:mx-0 w-full md:w-[233px] bg-[#1A3470] text-[#E8DCCB] h-[46px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium ">
                    Watch on Watch on Nasdaq  <MdKeyboardArrowRight className="text-lg" />
                </button>
                <button className="mx-auto md:mx-0 w-full md:w-[189px] bg-[#E8DCCB03] backdrop-blur-[25px] border border-[#11141826] flex justify-center items-center gap-2 text-[#111111] h-[46px] rounded-full uppercase text-sm font-inter font-medium ">
                    See all press <MdKeyboardArrowRight className="text-lg" />
                </button>
                <button className="mx-auto md:mx-0 w-full md:w-[254px] bg-[#E8DCCB03] backdrop-blur-[25px] border border-[#11141826] flex justify-center items-center gap-2 text-[#111111] h-[46px] rounded-full uppercase text-sm font-inter font-medium ">
                    About Anil Mathews <MdKeyboardArrowRight className="text-lg" />
                </button>
            </div>
        </div>
    )
}


export default Behind
