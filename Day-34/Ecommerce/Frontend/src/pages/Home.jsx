import React from 'react'
import Hero from '../components/Hero'
import LatestProfucts from '../components/LatestProfucts'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewesLetterBox from '../components/NewesLetterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestProfucts />
      <BestSeller />
      <OurPolicy />
      <NewesLetterBox />
    </div>
  )
}

export default Home