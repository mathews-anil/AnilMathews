import Image from 'next/image'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Idea = () => {
    return (
        <div className='bg-[#0D0F13] 2xl:mt-[100px] py-[50px] md:py-[100px] xl:py-[150px] 2xl:py-[174px] flex flex-col gap-[30px] lg:gap-[100px] about_vision_section'>
            <div className='flex flex-col items-center text-center gap-6 lg:gap-8 px-4 md:px-[50px] xl:px-[100px] 2xl:px-[130px] vision_section_padding max-w-[1920px] mx-auto 2xl:w-[90%]'>
                    <h2 className='font-charter font-normal text-[36px] lg:text-[64px] text-[#E8DCCB]' style={{ letterSpacing: "-2px" }}>From idea to impact</h2>
                    <p className='text-[#F7F4F1] opacity-65 font-inter text-base lg:text-xl'>My journey started in the early 2000s, when mobile data was chaos and the term “real-world intelligence” didn’t yet mean anything. What began as an experiment to understand human movement evolved into Near Intelligence, one of the most recognized data companies of its time.</p>
                    <p className='text-[#F7F4F1] opacity-65 font-inter text-base lg:text-xl'>We raised $235 million across equity and debt, backed by Sequoia India, JP Morgan, Cisco, and Telstra. We acquired Teemo (Paris) and UM (California) to strengthen our product and data capabilities, serving customers in more than 40 markets. In 2023, Near Intelligence was listed on Nasdaq — a single bell strike that represented years of building across four continents.</p>
            </div>

            <div className='flex flex-col gap-6 px-4 md:px-[50px] xl:px-[100px] 2xl:px-[130px] vision_section_padding items-start mx-auto w-full max-w-[1920px] mx-auto'>
                <h2 className='font-charter text-[36px] lg:text-[64px] text-[#E8DCCB] leading-[100%]' style={{ letterSpacing: "-2px" }}>Milestones</h2>
                <div className='w-full flex flex-wrap lg:flex-nowrap gap-[10px] lg:gap-[27px]'>
                    <div className='bg-[#FFFFFF03] w-[48%] sm:w-auto px-[20px] lg:max-w-[175px] py-[30px] min-h-[207px] lg:min-h-[300px] 2xl:min-h-[376px] 2xl:max-h-[376px] flex flex-col justify-between border border-[#E8DCCB26] backdrop-blur-xl rounded-[14px] lg:rounded-[24px]'>
                        <p className='text-[#E8DCCB] font-inter text-sm2xlg:text-base uppercase'>Companies founded</p>
                        <p className='font-charter font-black text-[36px] 2xl:text-[64px] uppercase text-[#E8DCCB]'>4</p>
                    </div>
                    <div className='bg-[#FFFFFF03] w-[48%] sm:w-auto px-[20px] lg:max-w-[175px] py-[30px] min-h-[207px] lg:min-h-[300px] 2xl:min-h-[376px] 2xl:max-h-[376px] flex flex-col justify-between border border-[#E8DCCB26] backdrop-blur-xl rounded-[14px] lg:rounded-[24px]'>
                        <p className='text-[#E8DCCB] font-inter text-sm 2xl:text-base uppercase'>Public listing on Nasdaq</p>
                        <p className='font-charter font-black text-[36px] 2xl:text-[64px] uppercase text-[#E8DCCB]'>1</p>
                    </div>
                    <div className='bg-[#FFFFFF03] w-[38%] sm:w-auto px-[20px] lg:max-w-[175px] py-[30px] min-h-[207px] lg:min-h-[300px] 2xl:min-h-[376px] 2xl:max-h-[376px] flex flex-col justify-between border border-[#E8DCCB26] backdrop-blur-xl rounded-[14px] lg:rounded-[24px]'>
                        <p className='text-[#E8DCCB] font-inter text-sm 2xl:text-base uppercase'>Strategic acquisitions</p>
                        <p className='font-charter font-black text-[36px] 2xl:text-[64px] uppercase text-[#E8DCCB]'>2</p>
                    </div>
                    <div className=' w-[59%] sm:w-auto px-[35px] lg:px-[20px]  lg:max-w-[200px] 2xl:max-w-[282px] py-[30px] min-h-[207px] lg:min-h-[300px] 2xl:min-h-[376px] 2xl:max-h-[376px] flex flex-col justify-between border border-[#E8DCCB26] backdrop-blur-[150px] vision_bg rounded-[14px] lg:rounded-[24px]'>
                        <p className='text-[#E8DCCB] font-inter text-sm 2xl:text-base uppercase'>Raised across equity and debt</p>
                        <p className='font-charter font-black text-[36px] 2xl:text-[64px] uppercase text-[#E8DCCB]'>$235M</p>
                    </div>
                    <div className='bg-[#FFFFFF03] w-[48%] sm:w-auto px-[20px] lg:max-w-[175px] py-[30px] min-h-[207px] lg:min-h-[300px] 2xl:min-h-[376px] 2xl:max-h-[376px] flex flex-col justify-between border border-[#E8DCCB26] backdrop-blur-xl rounded-[14px] lg:rounded-[24px]'>
                        <p className='text-[#E8DCCB] font-inter text-sm 2xl:text-base uppercase'>Markets served</p>
                        <p className='font-charter font-black text-[36px] 2xl:text-[64px] uppercase text-[#E8DCCB]'>40+</p>
                    </div>
                    <div className='bg-[#FFFFFF03] w-[48%] sm:w-auto px-[20px] lg:max-w-[212px] py-[30px] min-h-[207px] lg:min-h-[300px] 2xl:min-h-[376px] 2xl:max-h-[376px] flex flex-col justify-between border border-[#E8DCCB26] backdrop-blur-xl rounded-[14px] lg:rounded-[24px]'>
                        <p className='text-[#E8DCCB] font-inter text-sm 2xl:text-base uppercase'>Years building technology</p>
                        <p className='font-charter font-black text-[36px] 2xl:text-[64px] uppercase text-[#E8DCCB]'>20+</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Idea
