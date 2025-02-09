import React from 'react'
import NavManu from './components/NavManu'
import Banner from './components/Banner'
import HotLocation from './components/HotLocation'
import TopDevelopers from './components/TopDevelopers'
import TrendingProject from './components/TrendingProject'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
    <NavManu/>
    <Banner/>
    <TrendingProject/>
    <HotLocation/>
    <TopDevelopers/>
    <Footer/>
    </div>
  )
}

export default App