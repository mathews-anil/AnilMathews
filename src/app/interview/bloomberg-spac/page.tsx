import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import Bloomberg from '@/app/components/sections/interviews/Bloomberg'
import React from 'react'

const page = () => {
    return (
        <div className='bg-[#F7F4F1]'>
            <Header />
            <Bloomberg />
            <Footer />
        </div>
    )
}

export default page
