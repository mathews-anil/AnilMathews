import React from 'react'
import Script from "next/script";
import AboutHero from '../components/sections/about/AboutHero'
import Idea from '../components/sections/about/Idea'
import Building from '../components/sections/about/Building'
import Principles from '../components/sections/about/Principles'
import OffTheClock from '../components/sections/about/OffTheClock'
import Media from '../components/sections/home/Media'
import Footer from '../components/layout/Footer'

export const metadata = {
  title: "About Anil Mathews | Entrepreneur, Author & Founder of Alphabyte Ventures",
  description:
    "Background, milestones, and operating beliefs from Anil Mathews, founder who led Near Intelligence to a Nasdaq listing and now builds focused software at Alphabyte Ventures.",
  alternates: {
    canonical: "https://www.anilmathews.com/about-anil-mathews",
  },
  openGraph: {
    type: "website",
    url: "https://www.anilmathews.com/about-anil-mathews",
    title: "About Anil Mathews | Entrepreneur, Author & Founder of Alphabyte Ventures",
    description:
      "Background, milestones, and operating beliefs from Anil Mathews, founder who led Near Intelligence to a Nasdaq listing and now builds focused software at Alphabyte Ventures.",
    images: [
      "/images/og-home-1200x630.jpeg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Anil Mathews | Entrepreneur, Author & Founder of Alphabyte Ventures",
    description:
      "Background, milestones, and operating beliefs from Anil Mathews, founder who led Near Intelligence to a Nasdaq listing and now builds focused software at Alphabyte Ventures.",
    images: [
      "/images/og-home-1200x630.jpeg",
    ],
  },
};

const page = () => {
  return (
    <>
      {/* 🔥 JSON-LD Person Schema (required for About page) */}
      <Script id="person-jsonld-about" type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Anil Mathews",
          "url": "https://www.anilmathews.com/",
          "image": "/images/anil-mathews-portrait.png",
          "jobTitle": "Entrepreneur, Author & Founder of Alphabyte Ventures",
          "worksFor": {
            "@type": "Organization",
            "name": "Alphabyte Ventures"
          },
          "sameAs": [
            "https://www.linkedin.com/in/anilmathews",
            "https://x.com/anilmatt",
            "https://thestartswitch.com",
            "https://www.amazon.com/author/anilmathews",
            "https://www.goodreads.com/author/show/57597604.Anil_Mathews",
            "https://www.forbes.com/councils/forbestechcouncil/people/anilmathews/",
            "https://www.bloomberg.com/news/videos/2023-03-24/near-intelligence-smathews-on-spac-deal-video",
            "https://absolutereturn.podbean.com/e/231-enterprise-software-with-near-ceo-anil-mathews/",
            "https://www.crunchbase.com/person/anil-mathews",
            "https://www.alphabyte.com",
            "https://m.imdb.com/name/nm17793055/"
          ]
        }
        `}
      </Script>

      <div className='bg-[#F7F4F1]'>
        <AboutHero />
        <Idea />
        <Building />
        <Principles />
        <OffTheClock />
        <Media />
        <Footer />
      </div>
    </>
  )
}

export default page
