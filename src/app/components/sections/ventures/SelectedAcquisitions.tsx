import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SelectedAcquisitions = () => {
    return (
        <div className='flex flex-col py-[60px] lg:py-[160px] px-4 md:px-[50px] xl:px-[100px] 2xl:px-[130px] vision_section_padding max-w-[1920px] mx-auto gap-4 lg:gap-[48px]'>
            <div className='flex flex-col gap-4 lg:gap-6 items-center lg:items-start text-center lg:text-left w-full lg:w-[734px]'>
                <h2 className='font-charter leading-[36px] lg:leading-[64px] text-[36px] lg:text-[45px] 2xl:text-[64px] text-[#111111]' style={{ letterSpacing: "-2px" }}>Selected Acquisitions </h2>
                <p className='text-[#111111] opacity-65 font-inter text-base lg:text-xl'>The success of an acquisition is measured by fit, not size. Both strengthened the product and team DNA of Near Intelligence.</p>
            </div>
            <div className='flex flex-col lg:flex-row gap-[32px] lg:gap-6'>
                <div className='flex flex-col gap-6 lg:gap-8 w-full lg:w-[60%] 2xl:w-[788px]'>
                    <Image src="/images/ventures/selected1.png" width={788} height={550} alt='venture image' className='w-full' />
                    <div className='flex flex-col gap-2 '>
                        <p className='font-charter text-[24px] lg:text-[32px] text-[#111111]'>Teemo (Paris)</p>
                        <p className='font-inter text-base lg:text-xl text-[#111111]'>Coverage by <Link href="https://techcrunch.com/2020/11/19/near-acquires-teemo/" target="_blank" rel="nofollow noopener" className='font-semibold underline text-[#1A3470]'>TechCrunch</Link></p>
                    </div>
                </div>
                <div className='flex flex-col gap-6 lg:gap-8 w-full lg:w-[40%] 2xl:w-[515px]'>
                    <Image src="/images/ventures/selected2.png" width={515} height={550} alt='venture image' className='w-full h-[280px] lg:h-auto' />
                    <div className='flex flex-col gap-2 '>
                        <p className='font-charter text-[24px] lg:text-[32px] text-[#111111]'>UM (California)</p>
                        <p className='font-inter text-base lg:text-xl text-[#111111]'>Coverage by <Link href="https://techcrunch.com/2021/04/28/near-acquires-ubermedia/" target="_blank" rel="nofollow noopener" className='font-semibold underline text-[#1A3470]'>TechCrunch</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectedAcquisitions
