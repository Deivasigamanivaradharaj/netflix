import React from 'react'
import './Home.css';
import HomeHeader from './HomeHeader'
import HomeSection2 from './HomeSection2'
import HomeSection3 from './HomeSection3'
import HomeSection4 from './HomeSection4'
import HomeSection5 from './HomeSection5'
import Faq from './Faq'
import Footer from './Footer'

function Home() {
  return (
    <>
    <HomeHeader></HomeHeader>
    <HomeSection2></HomeSection2>
    <HomeSection3></HomeSection3>
    <HomeSection4></HomeSection4>
    <HomeSection5></HomeSection5>
    <Faq></Faq>
    <Footer></Footer>
    </>

  )
}

export default Home