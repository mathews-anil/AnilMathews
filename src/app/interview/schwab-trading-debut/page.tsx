import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import Schwab from '@/app/components/sections/interviews/Schwab'
import React from 'react'
export const metadata = {
  title: "Schwab Network Interview | Anil Mathews",
  description:
    "Interview with Nicole Petallides on Schwab Network ahead of Near Intelligence’s Nasdaq debut under ticker NIR, covering what Near does and the listing timeline.",
  alternates: {
    canonical: "https://www.anilmathews.com/interview/schwab-trading-debut",
  },
  openGraph: {
    type: "website",
    url: "https://www.anilmathews.com/interview/schwab-trading-debut",
    title: "Schwab Network Interview | Anil Mathews",
    description:
      "Interview with Nicole Petallides on Schwab Network ahead of Near Intelligence’s Nasdaq debut under ticker NIR, covering what Near does and the listing timeline.",
    images: [
      "/images/og-home-1200x630.jpeg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Schwab Network Interview | Anil Mathews",
    description:
      "Interview with Nicole Petallides on Schwab Network ahead of Near Intelligence’s Nasdaq debut under ticker NIR, covering what Near does and the listing timeline.",
    images: [
      "/images/og-home-1200x630.jpeg",
    ],
  },
};

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
