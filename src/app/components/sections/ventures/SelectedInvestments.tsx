import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SelectedInvestments = () => {
    return (
        <div className='flex flex-col px-4 md:px-[50px] xl:px-[100px] 2xl:px-[130px] vision_section_padding max-w-[1920px] mx-auto gap-[24px]'>
            <h2 className='font-charter lg:mb-[24px] leading-[36px] lg:leading-[64px] text-[36px] lg:text-[45px] 2xl:text-[64px] text-[#111111]' style={{ letterSpacing: "-2px" }}>Selected Investments </h2>
            <div className='flex flex-col lg:flex-row'>
                <Image src="/images/ventures/invest1.png" width={501} height={550} alt='venture image' className='w-full lg:w-[501px] rounded-t-[24px] lg:rounded-t-[0px] lg:rounded-l-[24px]' />
                <div className='flex w-full w-full lg:w-[calc(100%-501px)] bg-[#1A1A1A] flex justify-center items-center rounded-b-[24px] lg:rounded-b-[0px] lg:rounded-r-[24px]! p-[74px] lg:p-0'>
                    <Image src="/images/ventures/invest2.png" width={289} height={229} alt='venture image' className='w' />
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-end gap-2'>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-[24px] lg:text-[32px] font-charter text-[#111111]'>MEmob+</h3>
                    <p className='text-base lg:text-xl font-inter text-[#111111] '>Near acquires minority stake in data-driven marketing platform MEmob+</p>
                </div>
                <p className='text-xl lg:text-[24px] font-inter text-[#111111] '>Coverage by <Link href="https://www.arabnews.com/node/1956431/media" target="_blank" rel="nofollow noopener" className='text-[#1A3470] underline font-semibold'>Arab News</Link></p>
            </div>
        </div>
    )
}

export default SelectedInvestments
