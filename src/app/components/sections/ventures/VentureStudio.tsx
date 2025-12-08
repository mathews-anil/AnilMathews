import Image from 'next/image'
import React from 'react'

const VentureStudio = () => {
    return (
        <div className='flex flex-col px-[15px] w-full lg:w-[90%] items-center xl:w-[1390px] mx-auto lg:flex-row gap-6 lg:gap-[96px] py-[60px] lg:py-[160px]'>
            <Image src="/images/ventures/studio.png" width={677} height={528} alt='book image' className='w-full lg:w-[500px] xl:w-[600px] 2xl:w-[677px]' />

            <div className='flex flex-col gap-4 lg:gap-6 items-center lg:items-start text-center lg:text-left w-full lg:w-[500px] xl:w-[600px] 2xl:w-[630px]'>
                <p className='font-inter font-medium uppercase text-sm text-[#1A3470]'>Current — Alphabyte Ventures</p>
                <h2 className='font-charter leading-[100%] text-[36px] lg:text-[45px] 2xl:text-[64px] text-[#111111]' style={{ letterSpacing: "-2px" }}>A venture studio that turns ideas into enduring companies.</h2>
                <p className='text-[#111111] opacity-65 font-inter text-base lg:text-xl'>Our work lives where technology meets human focus, creating products that make work simpler, decisions faster, and progress measurable. We build across four focus areas: AI and automation, B2B SaaS, data intelligence, and human-centered design.
                </p>
                <p className='text-[#111111] opacity-65 font-inter text-base lg:text-xl'>
                    Every venture starts with a simple idea and moves through a disciplined process that turns it into a company.
                </p>
            </div>
        </div>
    )
}

export default VentureStudio
