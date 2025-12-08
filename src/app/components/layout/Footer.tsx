import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" pb-4 lg:pb-7">
      <Image
        src="/images/home/footer.png"
        width={1913}
        height={260}
        alt="footer image"
        className="w-full"
      />
      <div className="max-w-[1330px] mx-auto lg:mx-auto text-center px-3  w-[95%] min-h-[304px] bg-[#1A1A1A] rounded-[14px] lg:rounded-[24px] flex flex-col  gap-[30px] items-center justify-center mt-[-40px]">
        <p className="text-base lg:text-[24px] font-inter bg-[#E8DCCB]/60 bg-clip-text text-transparent mt-[40px] w-full lg:w-[428px]">
          For interviews, speaking, or <br className="lg:hidden" />
          partnerships, reach out on LinkedIn.
        </p>

        <p className="text-[#F7F4F1] text-base lg:text-lg font-inter ">
          <Link
            href="https://www.linkedin.com/in/anilmathews"
            target="_blank"
            rel="noopener"
          >
            LinkedIn{" "}
          </Link>
          |
          <Link href="https://x.com/anilmatt" target="_blank" rel="noopener">
            {" "}
            X{" "}
          </Link>
          |
          <Link
            href=" https://thestartswitch.com"
            target="_blank"
            rel="noopener"
          >
            {" "}
            The Start Switch{" "}
          </Link>
          |
          <Link
            href="https://www.amazon.com/author/anilmathews"
            target="_blank"
            rel="noopener"
          >
            {" "}
            Amazon Author{" "}
          </Link>
          |
          <Link
            href="https://www.bloomberg.com/news/videos/2023-03-24/near-intelligence-s-mathews-on-spac-deal-video"
            target="_blank"
            rel="noopener"
          >
            {" "}
            Bloomberg TV{" "}
          </Link>
          |
          <Link
            href="https://www.forbes.com/councils/forbestechcouncil/people/anilmathews/"
            target="_blank"
            rel="noopener"
          >
            {" "}
            Forbes{" "}
          </Link>
          |
          <Link
            href="https://www.crunchbase.com/person/anil-mathews"
            target="_blank"
            rel="noopener"
          >
            {" "}
            Crunchbase{" "}
          </Link>
          |
          <Link href="https://www.alphabyte.com" target="_blank" rel="noopener">
            {" "}
            Alphabyte{" "}
          </Link>
        </p>
      
        <Image src="/images/footer.png" width={168} height={26} alt="footer text" className="mt-[30px] md:mt-[40px] mb-2" />
      </div>
    </div>
  );
};

export default Footer;
