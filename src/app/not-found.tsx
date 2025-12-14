import Header from "./components/layout/Header";
import Image from "next/image";
import Link from "next/link";
import Footer from "./components/layout/Footer";

export const metadata = {
  title: "Page Not Found | Anil Mathews",
  description:
    "This page doesn’t exist. Explore other sections of the site including About, Press, and Ventures.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.anilmathews.com/404",
  },
  openGraph: {
    type: "website",
    url: "https://www.anilmathews.com/404",
    title: "Page Not Found | Anil Mathews",
    description:
      "This page doesn’t exist. Explore other sections of the site including About, Press, and Ventures.",
    images: ["https://www.anilmathews.com/images/og/og-home-1200x630.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Not Found | Anil Mathews",
    description:
      "This page doesn’t exist. Explore other sections of the site including About, Press, and Ventures.",
    images: ["https://www.anilmathews.com/assets/og/og-home-1200x630.jpg"],
  },
};

const NotFound = () => {
  return (
    <div className="bg-[#F7F4F1]">
      <Header />

      <div className="flex flex-col gap-6 lg:gap-8 items-center justify-center py-12 lg:py-16 px-4 md:px-[50px] lg:px-0 w-full text-center lg:w-[700px] mx-auto ">
        <h1 className="font-charter text-xl lg:text-5xl text-[#1A1A1A] opacity-25">
          Page Not Found | Anil Mathews
        </h1>

        <p
          className="font-charter text-[#111111] text-[120px] lg:text-[188px] opacity-50 leading-[100px] lg:leading-[141px]"
          aria-label="404"
        >
          404
        </p>

        <Image
          src="/images/about/404.png"
          width={393}
          height={298}
          alt="404 illustration"
          className="saturate-0"
        />

        <p className="text-base lg:text-xl font-inter text-[#111111] opacity-65">
          This page doesn’t exist. Explore other sections of the site including
          About, Press, and Ventures.
        </p>
      </div>

      <div className="bg-[#111111]/5 w-full mb-[50px] lg:mb-[150px]">
        <div className="flex flex-col gap-6 items-center justify-center py-[52px] lg:py-[83px] px-4 md:px-[50px] lg:px-0 w-full text-center lg:w-[800px] mx-auto ">
          <h2 className="font-charter text-[36px] lg:text-[64px] leading-[36px] lg:leading-[64px] text-[#1A1A1A] ">
            You’ve reached a place that doesn’t exist.
          </h2>

          <p className="text-base lg:text-xl font-inter text-[#111111] opacity-65">
            It’s either been moved or never built. The rest of the site is still
            here — About, Press, or Ventures.
          </p>

          <div className="flex items-center gap-4 lg:gap-8 justify-center">
            <Link
              href="/"
              className="font-inter font-medium text-xs lg:text-sm underline text-[#111111] uppercase"
            >
              Home
            </Link>
            <span className="h-[16px] border border-[#111111] opacity-25 "></span>
            <Link
              href="/about-anil-mathews"
              className="font-inter font-medium text-xs lg:text-sm underline text-[#111111] uppercase"
            >
              About
            </Link>
            <span className="h-[16px] border border-[#111111] opacity-25 "></span>
            <Link
              href="/press"
              className="font-inter font-medium text-xs lg:text-sm underline text-[#111111] uppercase"
            >
              Press
            </Link>
            <span className="h-[16px] border border-[#111111] opacity-25 "></span>
            <Link
              href="/ventures"
              className="font-inter font-medium text-xs lg:text-sm underline text-[#111111] uppercase"
            >
              Ventures
            </Link>
          </div>

          <p className="text-sm lg:text-lg font-inter text-[#111111]">
            Every good idea starts somewhere. This one just isn’t here.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
