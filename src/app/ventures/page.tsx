import React from 'react'
import Script from "next/script";
import VenturesHero from '../components/sections/ventures/VenturesHero'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import VentureStudio from '../components/sections/ventures/VentureStudio'
import PreviousVentures from '../components/sections/ventures/PreviousVentures'
import SelectedAcquisitions from '../components/sections/ventures/SelectedAcquisitions'
import SelectedInvestments from '../components/sections/ventures/SelectedInvestments'
import OperatingBelief from '../components/sections/ventures/OperatingBelief'

export const metadata = {
  title: "Ventures | Anil Mathews",
  description:
    "Current studio work at Alphabyte Ventures and previous roles including founding Near Intelligence with a public listing.",
  alternates: {
    canonical: "https://www.anilmathews.com/ventures",
  },
  openGraph: {
    type: "website",
    url: "https://www.anilmathews.com/ventures",
    title: "Ventures | Anil Mathews",
    description:
      "Current studio work at Alphabyte Ventures and previous roles including founding Near Intelligence with a public listing.",
    images: [
      "/images/og-home-1200x630.jpeg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ventures | Anil Mathews",
    description:
      "Current studio work at Alphabyte Ventures and previous roles including founding Near Intelligence with a public listing.",
    images: [
      "/images/og-home-1200x630.jpeg",
    ],
  },
};

const page = () => {
  return (
    <>
      <Script id="organization-jsonld" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Alphabyte Ventures",
            "url": "https://www.alphabyte.com",
            "founder": {
              "@type": "Person",
              "name": "Anil Mathews",
              "url": "https://www.anilmathews.com/about-anil-mathews"
            }
          }
        `}
      </Script>

      <div className='bg-[#F7F4F1]'>
        <Header />
        <VenturesHero />
        <VentureStudio />
        <PreviousVentures />
        <SelectedAcquisitions />
        <SelectedInvestments />
        <OperatingBelief />
        <Footer />
      </div>
    </>
  )
}

export default page
