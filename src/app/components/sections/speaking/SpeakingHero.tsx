import Image from 'next/image'
import React from 'react'

const SpeakingHero = () => {
  return (
    <div className='mt-[15px] lg:mt-[41px] mb-[64px] lg:mb-[120px] px-4 lg:px-[50px] xl:px-[80px] 2xl:px-[163px] mx-auto max-w-[1920px]'>
      <div className='relative w-full flex flex-col justify-start '>
        <h2 className='w-[200px] absolute bottom-[15px] left-[15px] lg:top-[50px] xl:top-[60px] 2xl:top-[110px] lg:left-[70px] xl:left-[110px] 2xl:left-[160px] lg:w-[350px] 2xl:w-[450px] z-30 font-charter leading-[24px] lg:leading-[64px] text-[24px] lg:text-[45px] 2xl:text-[64px] text-[#111111]' style={{ letterSpacing: "-2px" }}>I speak about execution, not theory.</h2>
        <p className='text-[#111111] absolute bottom-0 xl:bottom-[10px] [@media(min-width:1400px)]:bottom-[30px] 2xl:bottom-[15px] para_custom_bottom hidden md:block w-full md:w-[600px] xl:w-[700px] [@media(min-width:1400px)]:w-[800px] 2xl:w-[750px]! z-30 opacity-65 font-inter text-base lg:text-[17px] '>Every talk comes from firsthand experience: building products, leading teams across continents,
          and steering a company from idea to a Nasdaq listing.
          Audiences range from early founders to global teams. The goal is the same each time: help people move from thinking to building.</p>
        <Image src="/images/speaking/hero.png" width={1594} height={840} alt='Anil Mathews speaking about execution' className=' hidden md:block z-10' />
        <Image src="/images/speaking/hero_mob.png" width={372} height={466} alt='Anil Mathews speaking about execution' className='w-full md:hidden z-10' />
      </div>
       <p className='text-[#111111] mt-4 md:hidden w-full md:w-[600px] xl:w-[700px] 2xl:w-[935px] z-50 opacity-65 font-inter text-base lg:text-xl'>Every talk comes from firsthand experience: building products, leading teams across continents,
          and steering a company from idea to a Nasdaq listing.
          Audiences range from early founders to global teams. The goal is the same each time: help people move from thinking to building.</p>

    </div>
  )
}

export default SpeakingHero
