import React from 'react'
import HomeHero from './components/sections/home/HomeHero'
import Partners from './components/sections/home/Partners'
import Vision from './components/sections/home/Vision'

const page = () => {
  return (
    <div className='bg-[#F7F4F1]'>
      <HomeHero />
      <Partners />
      <Vision />
    </div>
  )
}

export default page
