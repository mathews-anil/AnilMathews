import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const ClipsAndFeatures = () => {
    return (

        <div className='max-w-[1920px] mx-auto w-full py-[55px] items-center text-center gap-6 lg:gap-[60px] lg:py-[160px] px-4 lg:px-[80px] xl:px-[120px] 2xl:px-[150px] ventures_prev_main flex flex-col gap-6'>
            <h2 className='font-charter text-[36px] lg:text-[64px] leading-[36px] lg:leading-[64px] text-[#111111]' style={{ letterSpacing: "-2px" }}>Clips and features</h2>
            <div className='flex flex-col lg:flex-row gap-6 w-full'>
                <div className='w-full lg:w-[50%] relative'>
                    <Image src="/images/speaking/clip1.png" width={780} height={680} alt='vision 1 image' className='w-full z-10 hidden lg:block' />
                    <Image src="/images/speaking/clip3.png" width={780} height={680} alt='vision 1 image' className='w-full z-10 lg:hidden ' />
                    <div className='flex flex-col items-center lg:items-start text-center lg:text-left gap-5 p-[20px] lg:p-[50px] absolute bottom-0 left-0 w-full'>
                        <h3 className='text-[24px] lg:text-[32px] font-charter text-[#F7F4F1] leading-[28px] lg:leading-[42px]'>Bloomberg TV highlights</h3>
                        <p className='text-base lg:text-xl text-[#F7F4F1] opacity-65 font-inter z-20 font-normal'>Insights from the public listing interview — focus, scaling, and navigating complexity. </p>
                        <Link href="https://www.bloomberg.com/news/videos/2023-03-24/near-intelligence-s-mathews-on-spac-deal-video" target="_blank" rel="nofollow noopener">
                        <button className="cursor-pointer mx-auto md:mx-0 w-full md:w-[173px] bg-[#1A3470] text-[#E8DCCB] h-[46px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium ">
                            Watch now <MdKeyboardArrowRight className="text-2xl" />
                        </button>
                        </Link>
                    </div>
                </div>
                <div className='w-full lg:w-[50%] relative'>
                    <Image src="/images/speaking/clip2.png" width={780} height={680} alt='vision 1 image' className='w-full z-10 hidden lg:block' />
                    <Image src="/images/speaking/clip4.png" width={780} height={680} alt='vision 1 image' className='w-full z-10 lg:hidden' />
                    <div className='flex flex-col items-center lg:items-start text-center lg:text-left gap-5 p-[20px] lg:p-[50px] absolute bottom-0 left-0 w-full'>
                        <h3 className='text-[24px] lg:text-[32px] font-charter text-[#F7F4F1] leading-[28px] lg:leading-[42px]'>Absolute Return Podcast</h3>
                        <p className='text-base opacity-65 lg:text-xl text-[#F7F4F1] font-inter z-20 font-normal'>Conversation on enterprise software, traction, and building the right metrics early. </p>
                        <Link href="https://absolutereturn.podbean.com/e/231-enterprise-software-with-near-ceo-anil-mathews/" target="_blank" rel="nofollow noopener">
                        <button className="cursor-pointer mx-auto md:mx-0 w-full md:w-[126px] bg-[#1A3470] text-[#E8DCCB] h-[46px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium ">
                           Listen <MdKeyboardArrowRight className="text-2xl" />
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClipsAndFeatures
