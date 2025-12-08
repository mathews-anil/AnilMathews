import React from 'react'
import ArticlesHero from '../components/sections/articles/ArticlesHero'
import Essays from '../components/sections/articles/Essays'
import Editorial from '../components/sections/articles/Editorial'
import Footer from '../components/layout/Footer'
export const metadata = {
  title: "Articles and Insights | Anil Mathews",
  description:
    "Selected essays and op-eds by Anil Mathews on retail media, building across regions, and using data to drive real business outcomes, with links to Forbes Technology Council, Times of India, LinkedIn, and more.",
  alternates: {
    canonical: "https://www.anilmathews.com/articles",
  },
  openGraph: {
    type: "website",
    url: "https://www.anilmathews.com/articles",
    title: "Articles and Insights | Anil Mathews",
    description:
      "Selected essays and op-eds by Anil Mathews on retail media, building across regions, and using data to drive real business outcomes, with links to Forbes Technology Council, Times of India, LinkedIn, and more.",
    images: [
      "https://www.anilmathews.com/assets/og/og-home-1200x630.jpg", // Replace if articles has its own OG image
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles and Insights | Anil Mathews",
    description:
      "Selected essays and op-eds by Anil Mathews on retail media, building across regions, and using data to drive real business outcomes, with links to Forbes Technology Council, Times of India, LinkedIn, and more.",
    images: [
      "https://www.anilmathews.com/assets/og/og-home-1200x630.jpg",
    ],
  },
};

const page = () => {
  return (
    <div className='bg-[#F7F4F1]'>
      <ArticlesHero />
      <Essays />
      <Editorial />
      <Footer />
    </div>
  )
}

export default page
