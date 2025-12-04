import React from 'react'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import Behind from '@/app/components/sections/interviews/Behind'

const page = () => {
  return (
    <div className='bg-[#F7F4F1]'>
      <Header />
      <Behind />
      <Footer />
    </div>
  )
}

export default page
