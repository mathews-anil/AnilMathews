import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import Schwab from '@/app/components/sections/interviews/Schwab'
import React from 'react'

const page = () => {
    return (
        <div className='bg-[#F7F4F1]'>
            <Header />
            <Schwab />
            <Footer />
        </div>
    )
}

export default page
