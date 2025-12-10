import React from 'react'
import Script from "next/script";
import HomeHero from './components/sections/home/HomeHero'
import Partners from './components/sections/home/Partners'
import Vision from './components/sections/home/Vision'
import StartSwitch from './components/sections/home/StartSwitch'
import Media from './components/sections/home/Media'
import Footer from './components/layout/Footer'
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

export const metadata = {
  title: "Anil Mathews | Entrepreneur, Author & Founder of Alphabyte Ventures",
  description:
    "Entrepreneur and author Anil Mathews founded Near Intelligence and led it to a Nasdaq listing. Now leading Alphabyte Ventures, he builds purposeful companies at the intersection of technology and human possibility.",
  alternates: {
    canonical: "https://www.anilmathews.com/",
  },
  openGraph: {
    type: "website",
    url: "https://www.anilmathews.com/",
    title: "Anil Mathews | Entrepreneur, Author & Founder of Alphabyte Ventures",
    description:
      "Entrepreneur and author Anil Mathews founded Near Intelligence and led it to a Nasdaq listing. Now leading Alphabyte Ventures, he builds purposeful companies at the intersection of technology and human possibility.",
    images: [
      "https://www.anilmathews.com/assets/og/og-home-1200x630.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anil Mathews | Entrepreneur, Author & Founder of Alphabyte Ventures",
    description:
      "Entrepreneur and author Anil Mathews founded Near Intelligence and led it to a Nasdaq listing. Now leading Alphabyte Ventures, he builds purposeful companies at the intersection of technology and human possibility.",
    images: [
      "https://www.anilmathews.com/assets/og/og-home-1200x630.jpg",
    ],
  },
};

const page = () => {
  return (
    <>
      <Script id="person-jsonld" type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Anil Mathews",
          "url": "https://www.anilmathews.com/",
          "image": "https://www.anilmathews.com/assets/anil-mathews-portrait.png",
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
        <HomeHero />
        <Partners />
        <Vision />
        <StartSwitch />
        <Media />
        <Footer />
        <div className='flex-col flex gap-4 fixed bottom-[20px] right-[50px] z-20'>
          {/* <Link href="https://x.com/anilmatt" className='w-[48px] h-[48px] rounded-full border border-[#88888840]  bg-[#111418]/1 hover:bg-white/10 flex justify-center items-center'><FaXTwitter className='text-[20px] text-[#E8DCCB] ' /></Link> */}
          <Link href="https://www.linkedin.com/in/anilmathews" className='w-[48px] h-[48px] rounded-full border border-[#88888840]  bg-[#111418]/1 hover:bg-white/10 flex justify-center items-center'><FaLinkedinIn className='text-[24px] text-[#E8DCCB] ' /></Link>
        </div>
      </div>
    </>
  )
}

export default page
