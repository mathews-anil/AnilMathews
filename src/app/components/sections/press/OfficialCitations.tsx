import Link from 'next/link'
import React from 'react'

const OfficialCitations = () => {
    return (
        <div className='bg-[#E8DCCB] py-[40px] md:py-[100px] xl:py-[153px] w-full'>
            <div className='flex flex-col items-start gap-4 lg:gap-8 px-4 md:px-[50px] xl:px-[100px] 2xl:px-[130px] vision_section_padding max-w-[1920px] mx-auto w-full'>
                <h2 className='font-charter text-[36px] lg:text-[64px] leading-[36px] lg:leading-[64px] text-[#111111]' style={{ letterSpacing: "-2px" }}>Official citations</h2>
                <p className='text-[#111111] opacity-65 font-inter text-base lg:text-xl'>All coverage and interviews are verifiable through the following primary sources:</p>
                <ul className='list-disc font-charter text-[#111111] text-lg lg:text-[24px] xl:text-[28px] 2xl:text-[32px] leading-[28px] xl:leading-[40px] 2xl:leading-[48px] ml-[20px] lg:ml-[50px]' style={{letterSpacing:"-1px"}}>
                    <li>Bloomberg TV segment — <Link href="https://www.bloomberg.com/news/videos/2023-03-24/near-intelligence-s-mathews-on-spac-deal-video" target='_blank'  rel="nofollow noopener" className='underline'>Near Intelligence’s Mathews on SPAC Deal</Link></li>
                    <li>Schwab Network interview with Nicole Petallides — <Link href="https://www.facebook.com/schwabnetwork/videos/near-nir-ceo-anir-mathews-with-a-company-overview/239237531816869/" target='_blank'  rel="nofollow noopener" className='underline'>Anil Mathews with a company overview</Link></li>
                    <li>Nasdaq MarketSite — <Link href="https://www.nasdaq.com/videos/near-intelligence-rings-the-nasdaq-stock-market-opening-bell" target='_blank'  rel="nofollow noopener" className='underline'>Near Intelligence rings the Nasdaq Opening Bell</Link></li>
                    <li>Absolute Return Podcast #231 —<Link href="https://absolutereturn.podbean.com/e/231-enterprise-software-with-near-ceo-anil-mathews/" target='_blank'  rel="nofollow noopener" className='underline'>Enterprise Software with Near CEO Anil Mathews</Link></li>
                    <li>Reuters — <Link href="https://www.reuters.com/markets/deals/data-intelligence-firm-near-go-public-via-1-billion-spac-deal-2022-05-19/" target='_blank'  rel="nofollow noopener" className='underline'>Data intelligence firm Near to go public via $1 billion SPAC deal</Link></li>
                    <li>TechCrunch — <Link href="https://techcrunch.com/2022/05/19/data-intelligence-startup-near-with-1-6b-anonymized-user-ids-lists-on-nasdaq-via-spac-at-a-1b-market-cap-raises-100m/" target='_blank'  rel="nofollow noopener" className='underline'>Data intelligence startup Near lists on Nasdaq via SPAC at a $1B marketcap</Link></li>
                    <li>TechCrunch — <Link href="https://techcrunch.com/2020/11/19/near-acquires-teemo/" target='_blank'  rel="nofollow noopener" className='underline'>Near acquires Teemo</Link></li>
                    <li>TechCrunch — <Link href="https://techcrunch.com/2021/04/28/near-acquires-ubermedia/" target='_blank'  rel="nofollow noopener" className='underline'>Near acquires UberMedia</Link></li>
                    <li>Business Times — <Link href="https://www.businesstimes.com.sg/startups-tech/technology/spore-mobile-ad-startup-raises-record-series-b" target='_blank'  rel="nofollow noopener" className='underline'>Singapore mobile ad startup raises record Series B</Link></li>
                    <li>Tech in Asia — <Link href="https://www.techinasia.com/indias-30-highest-funded-tech-startups-2014" target='_blank'  rel="nofollow noopener" className='underline'>India’s 30 highest funded tech startups 2014</Link></li>
                    <li>Entrepreneur — <Link href="https://www.entrepreneur.com/en-in/technology/the-big-daddy-of-data/353257" target='_blank'  rel="nofollow noopener" className='underline'>The Big Daddy of Data</Link></li>
                    <li>YourStory — <Link href="https://yourstory.com/2020/07/data-analytics-startup-near-adtech-pivot-saas-singapore" target='_blank'  rel="nofollow noopener" className='underline'>Near’s pivot from adtech to SaaS</Link></li>
                    <li>Arab News — <Link href="https://www.arabnews.com/node/1956431/media" target='_blank'  rel="nofollow noopener" className='underline'>Near invests in MEmob+</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default OfficialCitations
