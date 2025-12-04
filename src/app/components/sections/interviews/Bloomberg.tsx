import Image from 'next/image'
import React from 'react'
import { MdAccessTime, MdKeyboardArrowRight } from 'react-icons/md'

const Bloomberg = () => {
    return (
        <div className='px-4 max-w-[1920px] mx-auto py-[35px] lg:py-[90px] w-full xl:w-[1100px] flex flex-col gap-[30px] lg:gap-[70px]'>
            <div className='flex flex-col gap-[20px] lg:gap-[30px] text-left'>
                <h2 className='font-charter text-[36px] lg:text-[64px] leading-[36px] lg:leading-[64px] text-[#111111]' style={{ letterSpacing: "-2px" }}>Bloomberg TV Interview</h2>
                <div className='flex gap-2 lg:gap-6 items-center text-[#1A3470] font-inter text-base lg:text-xl '>
                    <MdAccessTime />
                    <span><span className='mr-2'>March 24, 2023 </span>  04:02 MINS</span>
                </div>
                <p className='text-[#111111] opacity-65 font-inter text-base lg:text-xl'>Anil Mathews joined Bloomberg Markets on March 24, 2023 to discuss Near Intelligence going public via a SPAC merger, and why the team pursued that path given market conditions. He spoke with hosts Haslinda Amin and Yvonne Man.</p>
                <p className='text-[#111111] opacity-65 font-inter text-base lg:text-xl'>Near announced its SPAC route at a time when redemptions and scrutiny had risen across the U.S. SPAC market.</p>
            </div>
            <div className='flex flex-col gap-[20px] lg:gap-[25px] '>
                <h3 className='font-charter text-xl lg:text-[32px] text-[#1A1A1A] '>Key notes</h3>
                <div className='flex flex-col gap-2 lg:gap-4  '>
                    <div className=' flex gap-2 lg:gap-4 items-start md:items-center'>
                        <Image src="/images/interviews/icon.png" width={31} height={30} alt='interview image' />
                        <p className='text-base lg:text-xl font-inter text-[#111111] '>Rationale for choosing a SPAC structure in uncertain markets.</p>
                    </div>
                    <div className=' flex gap-2 lg:gap-4 items-start md:items-center'>
                        <Image src="/images/interviews/icon.png" width={31} height={30} alt='interview image' />
                        <p className='text-base lg:text-xl font-inter text-[#111111] '>Translating the listing into operating discipline and execution.</p>
                    </div>
                    <div className=' flex gap-2 lg:gap-4 items-start md:items-center'>
                        <Image src="/images/interviews/icon.png" width={31} height={30} alt='interview image' />
                        <p className='text-base lg:text-xl font-inter text-[#111111] '>High-level context on Near’s evolution leading up to the listing.</p>
                    </div>
                </div>

            </div>
            <div className='relative w-full '>
                <Image src="/images/interviews/interview.png" width={1058} height={536} alt='interview image' className='rounded-[24px]' />
                <Image src="/images/interviews/play.png" width={64} height={64} alt='interview image' className='absolute top-[calc(50%-32px)] left-[calc(50%-32px)] cursor-pointer' />
            </div>
            <div className="mt-[20px] flex flex-col sm:flex-row flex-wrap gap-4 w-full justify-center items-center">
                <button className="mx-auto md:mx-0 w-full md:w-[266px] bg-[#1A3470] text-[#E8DCCB] h-[46px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium ">
                    Watch on Bloomberg  <MdKeyboardArrowRight className="text-lg" />
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

export default Bloomberg
