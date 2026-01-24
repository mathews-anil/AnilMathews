import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export const metadata = {
  title: "Anil Mathews Fact Sheet",
  description:
    "Official fact sheet for Anil Mathews, founder of Near Intelligence and Alphabyte, including career timeline, Nasdaq listing, billion-dollar valuation, and verified milestones.",
  alternates: {
    canonical: "https://www.anilmathews.com/about-anil-mathews/fact-sheet",
  },
  openGraph: {
    type: "website",
    url: "https://www.anilmathews.com/about-anil-mathews/fact-sheet",
    title: "Anil Mathews Fact Sheet | Founder of Near Intelligence & Alphabyte",
    description:
      "Official fact sheet for Anil Mathews, founder of Near Intelligence and Alphabyte, including career timeline, Nasdaq listing, billion-dollar valuation, and verified milestones.",
    images: ["https://www.anilmathews.com/images/og-home-1200x630.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anil Mathews Fact Sheet | Founder of Near Intelligence & Alphabyte",
    description:
      "Official fact sheet for Anil Mathews, founder of Near Intelligence and Alphabyte, including career timeline, Nasdaq listing, billion-dollar valuation, and verified milestones.",
    images: ["https://www.anilmathews.com/images/og-home-1200x630.jpeg"],
  },
};

const factSheetPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.anilmathews.com/about-anil-mathews/fact-sheet#webpage",
  url: "https://www.anilmathews.com/about-anil-mathews/fact-sheet",
  name: "Anil Mathews Fact Sheet",
  description:
    "Official fact sheet for Anil Mathews, founder of Near Intelligence and Alphabyte, including career timeline, Nasdaq listing, billion-dollar valuation, and verified milestones.",
  about: {
    "@type": "Person",
    "@id": "https://www.anilmathews.com/#person",
  },
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.anilmathews.com/#website",
    url: "https://www.anilmathews.com/",
    name: "Anil Mathews",
  },
};

const Page = () => {
  return (
    <div className="bg-[#F7F4F1]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(factSheetPageJsonLd) }}
      />

      <Header />

      <main className="max-w-[1920px] mx-auto px-4 md:px-12 pt-10 md:pt-16 pb-16 md:pb-24">
        {/* Hero */}
        <section className="max-w-[980px]">
          <p className="font-inter text-xs md:text-sm uppercase tracking-wide text-[#111111] opacity-70">
            Reference document
          </p>

          <h1 className="font-charter text-[40px] leading-[1.05] md:text-[64px] uppercase text-[#111111] mt-3">
            Anil Mathews <br />
            Fact Sheet
          </h1>

          <p className="font-inter text-base md:text-lg text-[#111111] opacity-70 mt-5 max-w-[860px]">
            Entrepreneur and author. Founder of Near Intelligence and Alphabyte.
            This page is a neutral reference designed for editorial, research,
            and background use.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="font-inter text-sm text-[#111111] opacity-70">
              Last updated: <span className="opacity-90">January 2026</span>
            </div>

            <div className="hidden sm:block w-[1px] h-4 bg-[#111111] opacity-20" />

            <a
              href="/press"
              className="font-inter text-sm uppercase font-semibold text-[#1A3470] inline-flex items-center"
            >
              Verified coverage on Press →
            </a>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-[980px] h-[1px] bg-[#111111] opacity-10 my-10 md:my-12" />

        {/* Overview */}
        <section className="max-w-[980px]">
          <h2 className="font-charter text-2xl md:text-3xl uppercase text-[#111111]">
            Overview
          </h2>
          <p className="font-inter text-base md:text-lg text-[#111111] opacity-70 mt-4">
            Anil Mathews builds technology businesses focused on clarity,
            execution, and measurable outcomes. He is the founder of Near
            Intelligence, which he led from an early data experiment through
            global expansion and a public listing on Nasdaq at an approximately
            $1 billion valuation, and the founder and CEO of Alphabyte, a venture
            studio that builds and invests in focused software products.
          </p>
        </section>

        {/* Snapshot */}
        <section className="max-w-[980px] mt-10 md:mt-12">
          <h2 className="font-charter text-2xl md:text-3xl uppercase text-[#111111]">
            Snapshot
          </h2>

          <ul className="mt-5 space-y-3 font-inter text-base md:text-lg text-[#111111] opacity-70 list-disc pl-5">
            <li>Founder and former CEO of Near Intelligence, a data intelligence company</li>
            <li>
              Led Near through expansion across Asia, Australia, Europe, and North America
            </li>
            <li>
              Guided Near to a Nasdaq listing in 2023 at an approximate $1 billion valuation
            </li>
            <li>
              Raised $235 million across equity and debt, backed by marquee investors including
              Sequoia Capital, JP Morgan, and Cisco
            </li>
            <li>
              Founder and CEO of Alphabyte, a venture studio that builds and invests in focused
              software products
            </li>
            <li>Author of The Start Switch</li>
          </ul>
        </section>

        {/* Timeline */}
        <section className="max-w-[980px] mt-10 md:mt-12">
          <h2 className="font-charter text-2xl md:text-3xl uppercase text-[#111111]">
            Career Timeline
          </h2>

          <div className="mt-6 space-y-5">
            {/* Netkode */}
            <article className="bg-white/60 border border-[#111111]/10 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <h3 className="font-charter text-xl md:text-2xl uppercase text-[#111111]">
                  Netkode Solutions
                </h3>
                <p className="font-inter text-sm uppercase text-[#111111] opacity-60">
                  Co-founder &amp; CEO · Nov 1999 – Dec 2007
                </p>
              </div>
              <p className="font-inter text-base md:text-lg text-[#111111] opacity-70 mt-4">
                Co-founded and led Netkode, an enterprise software company focused on
                content and media provisioning systems. Built the company from its early stages
                and scaled the organization to more than 100 employees.
              </p>
            </article>

            {/* Imere */}
            <article className="bg-white/60 border border-[#111111]/10 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <h3 className="font-charter text-xl md:text-2xl uppercase text-[#111111]">
                  Imere Tech
                </h3>
                <p className="font-inter text-sm uppercase text-[#111111] opacity-60">
                  CEO · Jan 2008 – Oct 2012
                </p>
              </div>
              <p className="font-inter text-base md:text-lg text-[#111111] opacity-70 mt-4">
                Led Imere, ya technology platform that could infer the geolocation of a
                device without relying on GPS. Oversaw product development and market execution,
                enabling practical location intelligence across mobile platforms and network operators.
              </p>
            </article>

            {/* Near */}
            <article className="bg-white/60 border border-[#111111]/10 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <h3 className="font-charter text-xl md:text-2xl uppercase text-[#111111]">
                  Near Intelligence
                </h3>
                <p className="font-inter text-sm uppercase text-[#111111] opacity-60">
                  Founder &amp; CEO · Nov 2012 – Oct 2023
                </p>
              </div>

              <p className="font-inter text-base md:text-lg text-[#111111] opacity-70 mt-4">
                Founded Near Intelligence and led the company from an early data experiment into a
                global data intelligence platform. Under Mathews’ leadership, Near expanded operations
                across four continents, completed strategic acquisitions including Teemo (Paris) and UM
                (California), and raised $235 million across equity and debt from institutional investors
                including Sequoia Capital, JP Morgan, and Cisco.
              </p>

              <p className="font-inter text-base md:text-lg text-[#111111] opacity-70 mt-4">
                Near Intelligence was listed on Nasdaq in 2023 following a public-market transaction
                that valued the company at approximately $1 billion.
              </p>
            </article>

            {/* Alphabyte */}
            <article className="bg-white/60 border border-[#111111]/10 rounded-2xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                <h3 className="font-charter text-xl md:text-2xl uppercase text-[#111111]">
                  Alphabyte
                </h3>
                <p className="font-inter text-sm uppercase text-[#111111] opacity-60">
                  Founder &amp; CEO · Jan 2024 – Present
                </p>
              </div>
              <p className="font-inter text-base md:text-lg text-[#111111] opacity-70 mt-4">
                Founded and leads Alphabyte, a venture studio that builds and invests in focused software
                products. Alphabyte works with small, disciplined teams to design systems that deliver clarity,
                speed, and measurable progress, applying AI where it creates clear operational leverage rather
                than complexity.
              </p>
            </article>
          </div>
        </section>

        {/* Writing */}
        <section className="max-w-[980px] mt-10 md:mt-12">
          <h2 className="font-charter text-2xl md:text-3xl uppercase text-[#111111]">
            Writing
          </h2>

          <p className="font-inter text-base md:text-lg text-[#111111] opacity-70 mt-4">
            Anil Mathews is the author of <span className="opacity-90">The Start Switch</span>, a book about
            momentum and execution. The Start Switch explores how individuals and teams move from intent to action,
            focusing on starting well, sustaining focus, and continuing to build when most efforts stall.
          </p>

          <p className="font-inter text-base md:text-lg text-[#111111] opacity-70 mt-4">
            His writing examines incentives, attention, and the mechanics of progress, shaped by two decades of
            experience building technology companies.
          </p>
        </section>

        {/* Media / Verification */}
        <section className="max-w-[980px] mt-10 md:mt-12">
          <h2 className="font-charter text-2xl md:text-3xl uppercase text-[#111111]">
            Media and Verification
          </h2>

          <p className="font-inter text-base md:text-lg text-[#111111] opacity-70 mt-4">
            Verified interviews, public appearances, and third-party coverage are available at:
          </p>

          <a
            href="/press"
            className="mt-4 inline-flex font-inter text-sm md:text-base uppercase font-semibold text-[#1A3470]"
          >
            anilmathews.com/press →
          </a>
        </section>

        {/* Notes */}
        <section className="max-w-[980px] mt-10 md:mt-12">
          <h2 className="font-charter text-2xl md:text-3xl uppercase text-[#111111]">
            Notes for Reference
          </h2>

          <ul className="mt-5 space-y-3 font-inter text-base md:text-lg text-[#111111] opacity-70 list-disc pl-5">
            <li>Dates reflect publicly listed professional timelines</li>
            <li>Descriptions are factual and non-promotional</li>
            <li>
              This document is intended as a neutral reference for editorial, research, and background use
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Page;
