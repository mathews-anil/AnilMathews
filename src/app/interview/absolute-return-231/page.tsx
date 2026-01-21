import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import Absolute from '@/app/components/sections/interviews/Absolute'
import React from 'react'
export const metadata = {
  title: "Absolute Return Podcast #231",
  description:
    "Episode #231 of the Absolute Return Podcast (Sep 19, 2022): Anil Mathews on entrepreneurship, why enterprise software wins, and how Near’s datasets are used. Hosted by Julian Klymochko and Michael Kesslering.",
  alternates: {
    canonical: "https://www.anilmathews.com/interview/absolute-return-231",
  },
  openGraph: {
    type: "website",
    url: "https://www.anilmathews.com/interview/absolute-return-231",
    title: "Absolute Return Podcast #231 | Anil Mathews",
    description:
      "Episode #231 of the Absolute Return Podcast (Sep 19, 2022): Anil Mathews on entrepreneurship, why enterprise software wins, and how Near’s datasets are used. Hosted by Julian Klymochko and Michael Kesslering.",
    images: [
      "/images/og-home-1200x630.jpeg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Absolute Return Podcast #231 | Anil Mathews",
    description:
      "Episode #231 of the Absolute Return Podcast (Sep 19, 2022): Anil Mathews on entrepreneurship, why enterprise software wins, and how Near’s datasets are used. Hosted by Julian Klymochko and Michael Kesslering.",
    images: [
      "/images/og-home-1200x630.jpeg",
    ],
  },
};

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
