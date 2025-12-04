import React from 'react'
import ArticlesHero from '../components/sections/articles/ArticlesHero'
import Essays from '../components/sections/articles/Essays'
import Editorial from '../components/sections/articles/Editorial'
import Footer from '../components/layout/Footer'

const page = () => {
  return (
    <div>
      <ArticlesHero />
      <Essays />
      <Editorial />
      <Footer />
    </div>
  )
}

export default page
