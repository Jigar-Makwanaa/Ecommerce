import React from 'react'
import Header from '../../Components/Header/Header'
import Carousel from '../../Components/Home/Carousel'
import About from '../../Components/Home/About'
import TopCat from '../../Components/Home/TopCat'
import Popular from '../../Components/Home/Popular'
import Cloth from '../../Components/Home/Cloth'
import Elect from '../../Components/Home/Elec'
import Kitchen from '../../Components/Home/Kitchen'
import Blog from '../../Components/Home/Blog'
import Footer from '../../Components/Footer/Footer'

const Homepage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <About />
      <TopCat />
      <Popular />
      <Cloth />
      <Elect />
      <Kitchen />
      <Blog />
      <Footer />
    </>
  )
}

export default Homepage