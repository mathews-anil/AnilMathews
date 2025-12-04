import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import Absolute from '@/app/components/sections/interviews/Absolute'
import React from 'react'

const page = () => {
  return (
    <div className='bg-[#F7F4F1]'>
      <Header />
      <Absolute />
      <Footer />
    </div>
  )
}

export default page
