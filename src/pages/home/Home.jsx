import React from 'react'
import TopBar from '../../components/navigation/Topbar'
import NavBar from '../../components/navigation/NavBar'
import Background from '../../components/navigation/Background'
import ThirdPart from '../../components/ThirdPart'
import LatestProperties from '../../components/LatestProperties'
import Compromise from '../../components/Compromise'
import PropertiesForSale from '../../components/PropertiesForSale'
import FourthPart from '../../components/FourthPart'
import Agent from '../../components/Agent'
import Counter from '../../components/Counter'
import BlogCard from '../../components/BlogCard'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Background />
      <ThirdPart />
      <LatestProperties />
      <Compromise />
      <PropertiesForSale />
      <FourthPart />
      <Agent />
      <Counter/>
      <BlogCard />
      <Footer />
    </div>
  )
}

export default Home
