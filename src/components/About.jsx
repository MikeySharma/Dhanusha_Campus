import React from 'react'
import './css/about.css'
import Navbar from './Navbar';
import StickyNavbar from'./StickyNavbar';
import Footer from './Footer';
import NoticeBoard from'./NoticeBoard';
const aboutIntroduction =(`Inspired by higher ideal of moulding the careers of blossoming youth and after detailed discussion with  the intelligentsia,experienced university professionals and well wishers veered around to the field of education which witnessed the genesis of an intermediate course on graduation X class,we proposed the name Dhanusha Science Campus,which issued fourth in the year 2054 B.S.The campus has been housed in a palatial buildind which proved to be adequate in terms of the plinth area required for classrooms and other facilities along with a large compound.It is located beside the parikrama road east of the town near Girija Cinema Hall.It is situated in a calm and serene locale,far from the hustle and bustle of the cramped town life.Its pmposing and majestic stuctures surrounded by bountiful gardens add special splendour to the campus.Its has all physical infrastuctures along with its extensive play-ground for all the games,library and well-equipped laboratories.it has succumbed to a very high disciplined and sound educational environment.The campus aims at the balanced personality growth of the students and endeavors to various extra currcular activities.`)
const About = () => {
  return (

    <>
    <Navbar/>
    <StickyNavbar/>
    <section className="about-page">
        <div className="container-about-page">
            <div className="about-introduction">Introduction</div>
            <div className="img-about-holder">
                <img src="https://sxc.edu.np/uploads/page/page-20210307024349-314.jpg" alt="..." />
            </div>
            <div className="about-section"><span>{aboutIntroduction}</span><br/><br/><span> The campus has a team of qualified competent and committed university professionals who are motivated to provide education and training to student builinding up their self-confidence and preparing for career.They evience in formulating novel methods in mouiding the young to be of service of the society.</span></div>
        </div>
        <NoticeBoard head={'about us'}/>
    </section>
    
    <Footer/>
    </>
  )
}

export default About
