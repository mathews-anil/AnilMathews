import Script from "next/script";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.anilmathews.com/#person",
  name: "Anil Mathews",
  url: "https://www.anilmathews.com/",
  image: "https://www.anilmathews.com/images/anil-mathews-portrait.png",
  jobTitle: "Entrepreneur and Author",
  worksFor: {
    "@type": "Organization",
    "@id": "https://www.alphabyte.com/#org",
    name: "Alphabyte Ventures",
    url: "https://www.alphabyte.com/",
  },
  sameAs: [
    "https://www.linkedin.com/in/anilmathews",
    "https://x.com/anilmatt",
    "https://www.bloomberg.com/profile/person/18916791",
    "https://medium.com/@anilmathewsofficial",
    "https://www.forbes.com/councils/forbestechcouncil/people/anilmathews/",
    "https://www.crunchbase.com/person/anil-mathews",
    "https://www.amazon.com/author/anilmathews",
    "https://www.goodreads.com/author/show/57597604.Anil_Mathews",
    "https://mathews.com/",
    "https://www.alphabyte.com/",
    "https://www.thestartswitch.com/",
  ],
};

export default function PersonJsonLd() {
  return (
    <Script
      id="person-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
    />
  );
}
