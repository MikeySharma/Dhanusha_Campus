import React from 'react'
import './css/welcome-box.css';
import { motion } from "framer-motion"
import NoticeBoard from './NoticeBoard';

const WelcomBox = () => {
  return (
    <section className="page2">
    <motion.div initial={{x: -200, y: 0}}
      whileInView={{x: 0, y: 0}}
      transition={{duration: .8}} className="container">
      <div className="img-box"><motion.div whileHover={{ scale: 1.2, rotate: -10 }} transition={{ duration: .8 }} className="img"></motion.div></div>
      <div  className="welcome-text">
        <div className="text-head">
          <p>Welcome To</p>
          <h2>Dhanusha Science College,</h2>
          <h2>Janakpurdham</h2>
        </div>
        <p className="description">DHANUSHA SCIENCE COLLEGE, Janakpurdham, is an educational institution of higher learning established and managed by the Nepal Jesuit Society. The Jesuits began their educational work in...</p>
        <button type="button" className="btn">Read More</button>
      </div>
    </motion.div>
    <NoticeBoard head ={'notice board'}/>
    </section>
  )
}

export default WelcomBox
