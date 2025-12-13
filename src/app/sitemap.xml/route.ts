import { NextResponse } from 'next/server';

export const GET = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.anilmathews.com/</loc></url>
  <url><loc>https://www.anilmathews.com/about-anil-mathews</loc></url>
  <url><loc>https://www.anilmathews.com/press</loc></url>
  <url><loc>https://www.anilmathews.com/speaking</loc></url>
  <url><loc>https://www.anilmathews.com/ventures</loc></url>
  <url><loc>https://www.anilmathews.com/articles</loc></url>
  <url><loc>https://www.anilmathews.com/interview/bloomberg-spac</loc></url>
  <url><loc>https://www.anilmathews.com/interview/schwab-trading-debut</loc></url>
  <url><loc>https://www.anilmathews.com/interview/nasdaq-behind-the-bell</loc></url>
  <url><loc>https://www.anilmathews.com/interview/absolute-return-231</loc></url>
</urlset>`;

  return new NextResponse(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
