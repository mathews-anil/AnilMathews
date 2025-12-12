import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Editorial = () => {
    return (
        <div className='vision_section_padding py-[60px] lg:py-[100px] xl:py-[150px] px-[15px] md:px-[30px] xl:px-[50px] 2xl:px-[130px] flex flex-col lg:flex-row gap-4 lg:gap-6 max-w-[1920px] mx-auto justify-center'>
            <div className='w-full backdrop:blur-[25px] lg:w-[50%] 2xl:w-[653px] bg-[#1A1A1A0D] rounded-[24px] border border-[#E8DCCB26] text-center lg:text-left bg-[#1A1A1A0D] px-[21px] py-[40px] lg:px-[50px] lg:py-[60px] gap-6 lg:gap-8 flex flex-col'>
                <h2 className='font-charter leading-[36px] lg:leading-[64px] text-[36px] lg:text-[64px] text-[#1A3470]' style={{ letterSpacing: "-2px" }}>Editorial Note</h2>
                <p className='text-base lg:text-xl font-inter leading-[20px] lg:leading-[30px] text-[#1A1A1A] '>Everything labeled “Forbes” links directly to verified bylines on the Forbes Technology Council. LinkedIn pieces are original essays written by Anil Mathews.</p>
                <p className='text-base lg:text-xl font-inter leading-[20px] lg:leading-[30px] text-[#1A1A1A] '>Older reflections and short posts remain available on <Link href="https://www.linkedin.com/in/anilmathews/" target='_blank' className='font-medium text-[#1A3470] underline'>LinkedIn</Link>.</p>
                <div className="flex lg:mt-4 flex-col sm:flex-row flex-wrap gap-4 w-full">
                    <Link href="/press">
                    <button className="cursor-pointer mx-auto md:mx-0 w-full md:w-[189px] bg-[#E8DCCB03] backdrop-blur-[25px] border border-[#11141826] flex justify-center items-center gap-2 text-[#111111] h-[46px] rounded-full uppercase text-sm font-inter font-medium ">
                        See all press <MdKeyboardArrowRight className="text-2xl" />
                    </button>
                    </Link>
                    <Link href=" /about-anil-mathews">
                    <button className="cursor-pointer mx-auto md:mx-0 w-full md:w-[254px] bg-[#E8DCCB03] backdrop-blur-[25px] border border-[#11141826] flex justify-center items-center gap-2 text-[#111111] h-[46px] rounded-full uppercase text-sm font-inter font-medium ">
                        About anil mathews <MdKeyboardArrowRight className="text-2xl" />
                    </button>
                    </Link>
                </div>
            </div>
            <div className='editorial_bg w-full lg:w-[50%] 2xl:w-[653px] relative min-h-[400px] lg:min-h-[500px] rounded-[24px]'>
                {/* <Image src="" width={653} height={500} alt='editorial image' className='rounded-[24px] w-full min-h-full object-cover z-10' /> */}
                <div className='absolute p-[25px] xl:p-[50px] flex bottom-0 left-0 flex-col gap-4 z-50'>
                    <h3 className='text-[24px] lg:text-[32px] text-[#E8DCCB] font-charter '>Writing philosophy</h3>
                    <p className='text-base lg:text-xl font-inter text-[#F7F4F1]'>I don’t write to impress; I write to clarify. The best ideas are simple. The hard part is keeping them that way.</p>
                </div>

            </div>
        </div>
    )
}

export default Editorial
