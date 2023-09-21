import React from 'react'
import Navbar from './Navbar';
import ImageSlide from './ImageSlide';
import WelcomeBox from './WelcomeBox';
import Principal from './Principal';
import Course from './Course';
import StickyNavbar from './StickyNavbar';
import Events from './Events';
import Footer from './Footer';
const HomePage = () => {
  return (
    <>
      <Navbar/>
      <StickyNavbar/>
      <ImageSlide/>
      <WelcomeBox/>
      <Principal/>
      <Course/>
      <Events/>
      <Footer/>
    </>
  )
}

export default HomePage
