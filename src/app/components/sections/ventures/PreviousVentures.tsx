import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PreviousVentures = () => {
    return (
       <div className='bg-[#0D0F13]'>
         <div className='max-w-[1920px] mx-auto w-full py-[55px] lg:py-[100px] xl:py-[150px] 2xl:py-[180px] px-4 lg:px-[80px] xl:px-[120px] 2xl:px-[150px] ventures_prev_main flex flex-col gap-6'>
            <p className='font-inter font-medium text-sm uppercase text-[#E8DCCB] text-center '>Previous ventures</p>
            <div className='flex flex-col lg:flex-row lg:flex-row gap-6 items-center'>
                <div className='lg:p-[50px] p-[15px] flex flex-col gap-[32px] lg:gap-[130px] w-full lg:w-[500px] xl:w-[50%] border border-[#E8DCCB26] rounded-[24px]'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-[24px] lg:text-[32px] font-charter text-[#F7F4F1]'>Near Intelligence</h3>
                        <p className='text-base lg:text-xl lg:leading-[30px] font-inter text-[#F7F4F1] font-normal opacity-65'>Founder and CEO through its Nasdaq listing.
                            Built one of the world’s leading data intelligence platforms with operations across four continents.
                        </p>
                        <p className='text-base lg:leading-[30px] lg:text-xl font-inter mt-4 text-[#F7F4F1] opacity-65'>Work included global expansion, product scaling, and strategic acquisitions such as Teemo in Paris and UM in California to strengthen product and data capabilities.
                        </p>
                    </div>
                    <div className='flex flex-col gap-6 lg:gap-[56px] '>
                        <div className='flex flex-col gap-4'>
                            <p className=' text-base font-inter uppercase text-[#E8DCCB]'>Coverage</p>
                            <Link href="https://techcrunch.com/2022/05/19/data-intelligence-startup-near-with-1-6b-anonymized-user-ids-lists-on-nasdaq-via-spac-at-a-1b-market-cap-raises-100m/" target="_blank" rel="nofollow noopener">
                            <h2 className='font-charter font-black text-[36px] xl:text-[52px] 2xl:text-[64px] leading-[100%] text-[#E8DCCB] uppercase'>TechCrunch</h2>
                            </Link>
                        </div>
                         <div className='flex flex-col gap-4'>
                            <p className='text-base font-inter uppercase text-[#E8DCCB]'>Interview</p>
                            <Link href="https://www.bloomberg.com/news/videos/2023-03-24/near-intelligence-s-mathews-on-spac-deal-video" target="_blank" rel="nofollow noopener">
                            <h2 className='font-charter font-black text-[36px] xl:text-[52px] 2xl:text-[64px] leading-[100%] text-[#E8DCCB] uppercase'>Bloomberg TV</h2>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col gap-6 w-full lg:w-[500px] xl:w-[50%] '>
                    <div className='flex flex-col gap-[70px] p-[15px] lg:p-[45px] border border-[#E8DCCB40] rounded-[24px]'>
                        <Image src="/images/ventures/logo1.png" width={146} height={56} alt='Imere Technologies logo' />
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-[24px] lg:text-[32px] font-charter text-[#F7F4F1]'>Imere Tech</h3>
                             <p className='text-base lg:text-xl lg:leading-[30px] font-inter text-[#F7F4F1] opacity-65'>Early leadership focused on product and operations in emerging markets. Helped teams translate market data into practical execution.
                        </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[60px] p-[15px] lg:p-[45px] border border-[#E8DCCB40] rounded-[24px]'>
                        <Image src="/images/ventures/logo2.png" width={165} height={66} alt='Netkode Solutions logo' />
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-[24px] lg:text-[32px] font-charter text-[#F7F4F1]'>Netkode Solutions</h3>
                             <p className='text-base lg:leading-[30px] lg:text-xl font-inter text-[#F7F4F1] opacity-65'>Early-stage engineering venture focused on delivery systems and customer development. Taught the fundamentals of building, shipping, and selling fast.
                        </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
       </div>
    )
}

export default PreviousVentures
