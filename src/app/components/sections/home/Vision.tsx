import Image from 'next/image'
import React from 'react'

const Vision = () => {
    return (
        <div className='bg-[#0D0F13] py-[50px] md:py-[100px] xl:py-[244px] flex flex-col gap-[30px] lg:gap-[100px]'>
            <div className='flex flex-col gap-6 px-4 md:px-[50px] xl:px-[100px] 2xl:px-[130px] vision_section_padding max-w-[1920px] mx-auto'>
                <div className='flex flex-col lg:flex-row gap-6 lg:gap-24 justify-between items-center'>
                    <Image src="/images/home/vision.png" width={712} height={580} alt='vision image' className='w-full lg:w-[412px] xl:w-[620] 2xl:w-[712px] order-2 lg:order-1' />
                    <div className='flex flex-col gap-6 text-center lg:text-left items-center lg:items-start w-full lg:w-[470px] order-1 lg:order-2'>
                        <h2 className='font-charter text-[36px] lg:text-[64px] text-[#E8DCCB]' style={{ letterSpacing: "-2px" }}>Vision</h2>
                        <p className='text-[#F7F4F1] opacity-65 font-inter text-base lg:text-xl'>Progress begins when technology becomes invisible. At Alphabyte Ventures, we use AI only where it creates real leverage, simplifying workflows, accelerating research, and helping teams ship faster.</p>
                        <p className='text-[#F7F4F1] opacity-65 font-inter text-base lg:text-xl'>The principle is simple: keep humanity at the center and build software that earns its place through use, not hype.</p>
                    </div>
                </div>
                <p className='text-[#F7F4F1] font-inter text-sm lg:text-base uppercase'>Nasdaq Listing Day, Times Square</p>
            </div>
            <div className='flex flex-col gap-6 px-4 md:px-[50px] xl:px-[100px] 2xl:px-[130px] vision_section_padding items-center lg:items-start mx-auto w-full max-w-[1920px] mx-auto'>
                <h2 className='font-charter text-[36px] lg:text-[64px] text-[#E8DCCB]' style={{ letterSpacing: "-2px" }}>What I build</h2>
                <div className='flex flex-col gap-[15px] w-full'>
                    <div className='flex flex-col lg:flex-row gap-3 w-full'>
                        <div className='w-full lg:w-[600px] xl:w-[59%] relative '>
                            <Image src="/images/home/vision1.png" width={780} height={680} alt='vision 1 image' className='w-full z-10' />
                            <p className='text-xl lg:text-2xl text-[#F7F4F1] font-semibold font-inter z-20 absolute leading-[26px] xl:leading-[24px] bottom-0 p-[33px] lg:p-[61px] left-0 lg:left-[61px]'>I build tools that make work <br className='hidden lg:block' /> feel lighter. </p>
                        </div>
                        <div className='w-full lg:w-[400px] xl:w-[39.8%] relative'>
                            <Image src="/images/home/vision2.png" width={524} height={680} alt='vision 1 image' className='w-full z-10 ' />
                            <p className='text-xl lg:text-2xl text-[#F7F4F1] font-semibold font-inter z-20 absolute leading-[26px] xl:leading-[24px] bottom-0 p-[25px] lg:p-[61px] left-0 lg:left-[61px]'>Products that remove friction, <br className='hidden lg:block' /> protect attention, and make the <br className='hidden lg:block' /> next step obvious.</p>
                        </div>
                    </div>
                    <div className='w-full relative'>
                        <Image src="/images/home/vision3.png" width={780} height={680} alt='vision 1 image' className='w-full z-10 hidden lg:block' />
                        <Image src="/images/home/vision3_mobiles.png" width={780} height={680} alt='vision 1 image' className='w-full z-10 lg:hidden' />
                        <p className='text-xl lg:text-2xl text-[#F7F4F1] font-semibold font-inter z-20 absolute leading-[26px] xl:leading-[24px] bottom-0 p-[25px] lg:p-[61px] left-0 lg:left-[61px]'>Each venture starts with a simple question: what would this look like if <br className='hidden lg:block' /> the software disappeared into the background?</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-6 px-4 md:px-[50px] xl:px-[100px] 2xl:px-[130px] vision_section_padding items-start mx-auto w-full max-w-[1920px] mx-auto'>
                <h2 className='font-charter text-[36px] lg:text-[64px] text-[#E8DCCB]' style={{ letterSpacing: "-2px" }}>Milestones</h2>
                <div className='w-full flex flex-wrap gap-[10px] lg:gap-[27px]'>
                    <div className='w-[48%] sm:w-auto px-[20px] lg:max-w-[175px] py-[30px] min-h-[207px] lg:min-h-[376px] flex flex-col justify-between border border-[#E8DCCB26] backdrop-blur-xl rounded-[14px] lg:rounded-[24px]'>
                        <p className='text-[#E8DCCB] font-inter text-sm2xlg:text-base uppercase'>Companies founded</p>
                        <p className='font-charter font-black text-[36px] 2xl:text-[64px] uppercase text-[#E8DCCB]'>4</p>
                    </div>
                     <div className='w-[48%] sm:w-auto px-[20px] lg:max-w-[175px] py-[30px] min-h-[207px] lg:min-h-[376px] flex flex-col justify-between border border-[#E8DCCB26] backdrop-blur-xl rounded-[14px] lg:rounded-[24px]'>
                        <p className='text-[#E8DCCB] font-inter text-sm 2xl:text-base uppercase'>Public listing on Nasdaq</p>
                        <p className='font-charter font-black text-[36px] 2xl:text-[64px] uppercase text-[#E8DCCB]'>1</p>
                    </div>
                     <div className='w-[38%] sm:w-auto px-[20px] lg:max-w-[175px] py-[30px] min-h-[207px] lg:min-h-[376px] flex flex-col justify-between border border-[#E8DCCB26] backdrop-blur-xl rounded-[14px] lg:rounded-[24px]'>
                        <p className='text-[#E8DCCB] font-inter text-sm 2xl:text-base uppercase'>Strategic acquisitions</p>
                        <p className='font-charter font-black text-[36px] 2xl:text-[64px] uppercase text-[#E8DCCB]'>2</p>
                    </div>
                     <div className='w-[59%] sm:w-auto px-[20px] lg:max-w-[200px] 2xl:max-w-[282px] py-[30px] min-h-[207px] lg:min-h-[376px] flex flex-col justify-between border border-[#E8DCCB26] backdrop-blur-[150px] vision_bg rounded-[14px] lg:rounded-[24px]'>
                        <p className='text-[#E8DCCB] font-inter text-sm 2xl:text-base uppercase'>Raised across equity and debt</p>
                        <p className='font-charter font-black text-[36px] 2xl:text-[64px] uppercase text-[#E8DCCB]'>$235M</p>
                    </div>
                     <div className='w-[48%] sm:w-auto px-[20px] lg:max-w-[175px] py-[30px] min-h-[207px] lg:min-h-[376px] flex flex-col justify-between border border-[#E8DCCB26] backdrop-blur-xl rounded-[14px] lg:rounded-[24px]'>
                        <p className='text-[#E8DCCB] font-inter text-sm 2xl:text-base uppercase'>Markets served</p>
                        <p className='font-charter font-black text-[36px] 2xl:text-[64px] uppercase text-[#E8DCCB]'>40+</p>
                    </div>
                     <div className='w-[48%] sm:w-auto px-[20px] lg:max-w-[212px] py-[30px] min-h-[207px] lg:min-h-[376px] flex flex-col justify-between border border-[#E8DCCB26] backdrop-blur-xl rounded-[14px] lg:rounded-[24px]'>
                        <p className='text-[#E8DCCB] font-inter text-sm 2xl:text-base uppercase'>Years building technology</p>
                        <p className='font-charter font-black text-[36px] 2xl:text-[64px] uppercase text-[#E8DCCB]'>20+</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vision
