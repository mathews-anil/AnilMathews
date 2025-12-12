"use client"
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const Principles = () => {
    const items = [
        {
            img: "/images/about/icon1.png",
            title: "Perfection kills velocity",
            desc: "Start before conditions feel perfect."
        },
        {
            img: "/images/about/icon2.png",
            title: "Complexity kills focus",
            desc: "Keep teams small and responsibilities clear."
        },
        {
            img: "/images/about/icon3.png",
            title: "Momentum compounds when it can be seen",
            desc: "Make progress visible."
        },
        {
            img: "/images/about/icon4.png",
            title: "Technology matters only if people keep using it",
            desc: "Build things that outlast the buzz."
        }
    ]

    return (
        <div className='bg-[#E8DCCB]'>
            <div className='flex flex-col items-center text-center  justify-center gap-[20px] lg:gap-[50px] py-[50px] lg:py-[130px] px-4 md:px-[50px] xl:px-[100px] 2xl:px-[160px] max-w-[1920px] mx-auto'>

                <h2 className='font-charter text-[36px] lg:text-[64px] leading-[100%] text-[#111111]' style={{ letterSpacing: "-2px" }}>Principles that <br className='lg:hidden' /> anchor my work</h2>

                {/* Desktop Grid */}
                <div className='hidden md:flex flex-wrap justify-center items-center gap-4 lg:gap-6'>
                    {items.map((item, i) => (
                        <div key={i} className='flex flex-col justify-center p-2 lg:p-[30px] lg:gap-4 items-center text-center w-[280px] xl:w-[23%] bg-[#1A1A1A0D] min-h-[250px] 2xl:min-h-[306px] rounded-xl lg:rounded-[24px] border border-[#E8DCCB26]'>
                            <Image src={item.img} width={78} height={78} alt='icon' className='w-[50px] 2xl:w-[78px] mb-2' />
                            <h3 className='text-lg lg:text-base 2xl:text-[24px] font-inter font-semibold text-[#1A1A1A]'>{item.title}</h3>
                            <p className='text-base lg:text-[12px] 2xl:text-xl text-[#1A1A1A] opacity-65 font-inter'>{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Mobile Carousel */}
                <div className='md:hidden w-full py-4'>
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={'auto'}     // 👈 IMPORTANT FOR INFINITE LOOP
                        centeredSlides={true}
                        spaceBetween={20}
                        loop={true}
                        autoplay={{ delay: 2200 }}
                    >
                        {items.map((item, i) => (
                            <SwiperSlide
                                key={i}
                                style={{ width: "250px", marginRight: "16px" }}   // 👈 FIXED WIDTH (NO BREAK)
                            >
                                <div className='mx-auto flex flex-col justify-center p-4 gap-4 items-center text-center w-[250px] bg-[#1A1A1A0D] min-h-[250px] rounded-xl border border-[#E8DCCB26]'>
                                    <Image src={item.img} width={78} height={78} alt='icon' className='w-[48px] mb-[30px]' />
                                    <h3 className='text-lg font-inter font-semibold text-[#1A1A1A]'>{item.title}</h3>
                                    <p className='text-base text-[#1A1A1A] opacity-65 font-inter'>{item.desc}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>



            </div>
        </div>

    )
}

export default Principles
