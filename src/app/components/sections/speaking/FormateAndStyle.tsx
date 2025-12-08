import Image from 'next/image'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const FormateAndStyle = () => {
    return (
        <div className='mb-[50px] lg:mb-[100px]'>
            <div className='bg-[#111111] z-10!'>
                <div className='belief_bg z-10!'>
                    <div className='mx-auto z-10! py-[60px] px-5 md:px-[50px] xl:px-[100px] 2xl:px-[130px] vision_section_padding justify-center w-full flex flex-col lg:flex-row gap-[32px] lg:gap-[14px]'>
                        <Image src="/images/speaking/formate.png" width={766} height={800} alt='speaking image' className='order-2 lg:order-1 z-10! w-full lg:w-[500px] xl:w-[600px] 2xl:w-[670px] formate_img' />
                        <div className='md:w-[497px] order-1 lg:order-2 gap-[18px] lg:gap-[48px] flex flex-col items-center lg:items-start justify-center text-center lg:text-left'>
                            <h2 className='font-charter leading-[36px] lg:leading-[64px] text-[36px] lg:text-[45px] 2xl:text-[64px] text-[#E8DCCB]' style={{ letterSpacing: "-2px" }}>Format and style</h2>
                            <p className='text-[#F7F4F1] opacity-65 font-inter text-base lg:text-xl'>Talks are designed for business schools, founder communities, and company offsites. Each one blends clear frameworks, real data, and candid stories from twenty years of building. </p>
                            <p className='text-[#F7F4F1] opacity-65 font-inter text-base lg:text-xl'>No buzzwords. No filler. Only lessons that can be applied the next morning.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-5 max-w-[1920px] mx-auto md:px-[50px] xl:px-[100px] 2xl:px-[130px] vision_section_padding mt-[-100px] z-50! relative'>
                <div className='bg-[#E8DCCB] w-full  flex flex-col lg:flex-row gap-[20px] lg:gap-[50px] items-center text-center lg:text-left justify-between rounded-2xl lg:rounded-3xl p-[35px] lg:px-[82px] lg:py-[50px] z-50!'>
                    <div className='flex flex-col gap-[50px] w-full lg:w-[240px]'>
                        <h2 className='font-charter leading-[36px] lg:leading-[64px] text-[36px] lg:text-[45px] 2xl:text-[64px] text-[#1A3470]' style={{ letterSpacing: "-2px" }}>Booking</h2>
                        <button className="hidden lg:flex mx-auto md:mx-0 w-full md:w-[160px] bg-[#1A3470] text-[#E8DCCB] h-[46px] backdrop-blur-[25px]  justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium ">
                            Book now <MdKeyboardArrowRight className="text-2xl" />
                        </button>
                    </div>
                    <div className='flex flex-col w-full lg:w-[500px] xl:w-[600px] 2xl:w-[699px] gap-[40px] items-center lg:items-start text-center lg:text-left text-base lg:text-xl font-inter text-[#1A1A1A]'>
                        <p className=''>
                            For keynote invitations, panels, or private workshops, send a message on LinkedIn.
                        </p>
                        <p>All talks are customized for the audience and can include live Q&A or short working sessions.
                        </p>
                    </div>
                    <button className="lg:hidden mx-auto md:mx-0 w-full md:w-[160px] bg-[#1A3470] text-[#E8DCCB] h-[46px] backdrop-blur-[25px] flex justify-center items-center gap-2 rounded-full uppercase text-sm font-inter font-medium ">
                            Book now <MdKeyboardArrowRight className="text-2xl" />
                        </button>
                </div>
            </div>

        </div>
    )
}

export default FormateAndStyle
