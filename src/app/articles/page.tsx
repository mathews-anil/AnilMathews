import React from "react";
import ArticlesHero from "../components/sections/articles/ArticlesHero";
import Essays from "../components/sections/articles/Essays";
import Editorial from "../components/sections/articles/Editorial";
import Footer from "../components/layout/Footer";

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
    images: ["/images/og-home-1200x630.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Articles and Insights | Anil Mathews",
    description:
      "Selected essays and op-eds by Anil Mathews on retail media, building across regions, and using data to drive real business outcomes, with links to Forbes Technology Council, Times of India, LinkedIn, and more.",
    images: ["/images/og-home-1200x630.jpeg"],
  },
};

const Page = () => {
  // Page-level schema: describes THIS page, references the Person defined in layout via @id.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.anilmathews.com/articles#collection",
    url: "https://www.anilmathews.com/articles",
    name: "Articles and Insights | Anil Mathews",
    description:
      "Selected essays and op-eds by Anil Mathews on retail media, building across regions, and using data to drive real business outcomes, with links to Forbes Technology Council, Times of India, LinkedIn, and more.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://www.anilmathews.com/#website",
      url: "https://www.anilmathews.com/",
      name: "Anil Mathews",
    },
    about: {
      "@type": "Person",
      "@id": "https://www.anilmathews.com/#person",
    },
    author: {
      "@type": "Person",
      "@id": "https://www.anilmathews.com/#person",
    },
    publisher: {
      "@type": "Person",
      "@id": "https://www.anilmathews.com/#person",
    },
  };

  return (
    <div className="bg-[#F7F4F1]">
      <script
        id="articles-jsonld"
        type="application/ld+json"
        // Safe here because we're stringifying our own object.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticlesHero />
      <Essays />
      <Editorial />
      <Footer />
    </div>
  );
};

export default Page;
