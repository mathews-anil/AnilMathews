import React from 'react'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import Behind from '@/app/components/sections/interviews/Behind'
export const metadata = {
  title: "Nasdaq Behind the Bell | Anil Mathews",
  description:
    "A short Nasdaq MarketSite segment from the Behind the Bell series recorded on Near Intelligence’s listing day, marking its debut on Nasdaq under ticker NIR.",
  alternates: {
    canonical: "https://www.anilmathews.com/interview/nasdaq-behind-the-bell",
  },
  openGraph: {
    type: "website",
    url: "https://www.anilmathews.com/interview/nasdaq-behind-the-bell",
    title: "Nasdaq Behind the Bell | Anil Mathews",
    description:
      "A short Nasdaq MarketSite segment from the Behind the Bell series recorded on Near Intelligence’s listing day, marking its debut on Nasdaq under ticker NIR.",
    images: [
      "/images/og-home-1200x630.jpeg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nasdaq Behind the Bell | Anil Mathews",
    description:
      "A short Nasdaq MarketSite segment from the Behind the Bell series recorded on Near Intelligence’s listing day, marking its debut on Nasdaq under ticker NIR.",
    images: [
      "/images/og-home-1200x630.jpeg",
    ],
  },
};

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
