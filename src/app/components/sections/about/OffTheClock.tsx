import Image from 'next/image'
import React from 'react'

const OffTheClock = () => {
    return (
        <div className='bg-[#1A1A1A]'>
            <div className='flex flex-col items-center text-center justify-center gap-[30px] lg:gap-[50px] py-[80px] lg:py-[130px] px-4 md:px-[50px] xl:px-[100px] 2xl:px-[297px] max-w-[1920px] mx-auto'>
                <div className='flex flex-col gap-6 lg:gap-8 items-center text-center w-full lg:w-[560px]'>
                    <h2 className='font-charter text-[36px] lg:text-[64px] leading-[36px] lg:leading-[64px] text-[#E8DCCB]' style={{ letterSpacing: "-2px" }}>Off the clock</h2>
                    <p className='text-[#F7F4F1] opacity-65 font-inter text-base lg:text-xl'>I chase big fish, fly light aircraft, and love fast cars that roar. The sea teaches patience. The sky teaches precision. Speed reminds me that power is nothing without control.</p>
                </div>
                <div className='flex flex-col xl:flex-row w-full gap-4 lg:gap-6 items-center justify-center'>
                    <Image src="/images/about/clock1-new.png" width={652} height={550} alt='clock image' />
                    <Image src="/images/about/clock2-new.png" width={652} height={550} alt='clock image' />
                </div>
            </div>
        </div>

    )
}

export default OffTheClock
