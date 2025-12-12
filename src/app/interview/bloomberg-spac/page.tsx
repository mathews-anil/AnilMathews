import Footer from '@/app/components/layout/Footer'
import Header from '@/app/components/layout/Header'
import Bloomberg from '@/app/components/sections/interviews/Bloomberg'
import React from 'react'
export const metadata = {
  title: "Bloomberg TV Interview | Anil Mathews",
  description:
    "Bloomberg Markets: Asia interview on March 24, 2023, where Anil Mathews explains why Near chose the SPAC route to list on Nasdaq amid volatile markets.",
  alternates: {
    canonical: "https://www.anilmathews.com/interview/bloomberg-spac",
  },
  openGraph: {
    type: "website",
    url: "https://www.anilmathews.com/interview/bloomberg-spac",
    title: "Bloomberg TV Interview | Anil Mathews",
    description:
      "Bloomberg Markets: Asia interview on March 24, 2023, where Anil Mathews explains why Near chose the SPAC route to list on Nasdaq amid volatile markets.",
    images: [
      "/images/og-home-1200x630.jpeg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bloomberg TV Interview | Anil Mathews",
    description:
      "Bloomberg Markets: Asia interview on March 24, 2023, where Anil Mathews explains why Near chose the SPAC route to list on Nasdaq amid volatile markets.",
    images: [
      "/images/og-home-1200x630.jpeg",
    ],
  },
};

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
