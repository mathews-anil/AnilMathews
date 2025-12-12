import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import SpeakingHero from '../components/sections/speaking/SpeakingHero'
import TalkThemes from '../components/sections/speaking/TalkThemes'
import ClipsAndFeatures from '../components/sections/speaking/ClipsAndFeatures'
import FormateAndStyle from '../components/sections/speaking/FormateAndStyle'
export const metadata = {
  title: "Speaking | Anil Mathews",
  description:
    "Talks and workshops on starting fast, pricing for traction, and leading small teams that ship. Clips and booking details.",
  alternates: {
    canonical: "https://www.anilmathews.com/speaking",
  },
  openGraph: {
    type: "website",
    url: "https://www.anilmathews.com/speaking",
    title: "Speaking | Anil Mathews",
    description:
      "Talks and workshops on starting fast, pricing for traction, and leading small teams that ship. Clips and booking details.",
    images: [
      "/images/og-home-1200x630.jpeg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Speaking | Anil Mathews",
    description:
      "Talks and workshops on starting fast, pricing for traction, and leading small teams that ship. Clips and booking details.",
    images: [
      "/images/og-home-1200x630.jpeg",
    ],
  },
};

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
