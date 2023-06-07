import React from 'react'
import TopBar from '../../components/navigation/Topbar'
import NavBar from '../../components/navigation/NavBar'
import Background from '../../components/navigation/Background'
import ThirdPart from '../../components/ThirdPart'
import LatestProperties from '../../components/LatestProperties'
import Compromise from '../../components/Compromise'

const Home = () => {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Background />
      <ThirdPart />
      <LatestProperties />
      <Compromise />
    </div>
  )
}

export default Home
