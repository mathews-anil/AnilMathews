import React from 'react'
import Script from 'next/script'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import PressHero from '../components/sections/press/PressHero'
import Podcast from '../components/sections/press/Podcast'
import ArticlesAndProfiles from '../components/sections/press/ArticlesAndProfiles'
import OfficialCitations from '../components/sections/press/OfficialCitations'

export const metadata = {
  title: "Press and Interviews | Anil Mathews",
  description:
    "Television, podcasts, and articles including Bloomberg TV, Schwab Network, Absolute Return Podcast, TechCrunch, and Forbes Technology Council.",
  alternates: {
    canonical: "https://www.anilmathews.com/press",
  },
  openGraph: {
    type: "website",
    url: "https://www.anilmathews.com/press",
    title: "Press and Interviews | Anil Mathews",
    description:
      "Television, podcasts, and articles including Bloomberg TV, Schwab Network, Absolute Return Podcast, TechCrunch, and Forbes Technology Council.",
    images: [
      "/images/og-home-1200x630.jpeg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Press and Interviews | Anil Mathews",
    description:
      "Television, podcasts, and articles including Bloomberg TV, Schwab Network, Absolute Return Podcast, TechCrunch, and Forbes Technology Council.",
    images: [
      "/images/og-home-1200x630.jpeg",
    ],
  },
}

const Page = () => {
  const pressPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.anilmathews.com/press#collection",
    "name": "Press and Interviews",
    "url": "https://www.anilmathews.com/press",
    "about": {
      "@type": "Person",
      "@id": "https://www.anilmathews.com/#person"
    },
    "creator": {
      "@type": "Person",
      "@id": "https://www.anilmathews.com/#person"
    }
  }

  return (
    <>
      <Script
        id="press-collection-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pressPageJsonLd) }}
      />

      <div className="bg-[#F7F4F1]">
        <Header />
        <PressHero />
        <Podcast />
        <ArticlesAndProfiles />
        <OfficialCitations />
        <Footer />
      </div>
    </>
  )
}

export default Page
