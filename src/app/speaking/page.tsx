import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import SpeakingHero from '../components/sections/speaking/SpeakingHero'
import TalkThemes from '../components/sections/speaking/TalkThemes'
import ClipsAndFeatures from '../components/sections/speaking/ClipsAndFeatures'
import FormateAndStyle from '../components/sections/speaking/FormateAndStyle'

const page = () => {
  return (
    <div className='bg-[#F7F4F1]'>
      <Header />
      <SpeakingHero />
      <TalkThemes />
      <ClipsAndFeatures />
      <FormateAndStyle />
      <Footer />
    </div>
  )
}

export default page
