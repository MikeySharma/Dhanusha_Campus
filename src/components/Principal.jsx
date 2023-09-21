import React from 'react';
import './css/principal.css';
import { motion } from 'framer-motion';
const Principal = () => {
  return (
    <section className="page3" >
      <div className="principal">
        <motion.div
          initial={{ x: -180, y: 0 }}
          whileInView={{ x: 0, y: 0 }}
          transition={{ duration: .8 }}
          className="principal-img"><div className="img"></div></motion.div>
        <motion.div
          initial={{ x: 0, y: 180 }}
          whileInView={{ x: 0, y: 0 }}
          transition={{ duration: .8 }}
          className="about-principal">
          <h1>Fr. Augustine Thomas, S.J.</h1>
          <h3>Principal</h3>
          <br />
          <p>As a kid, I took pride in going to the church with my dad, holding his hand. My dad would pace fast to reach the church on time, and I had to run with him. Regardless of the rush walk, I would keep blabbering my silly stories to him, panting as I tried to catch up with him. One day, when he slowed down all of a sudden, I ask.....</p>
          <button type="button" className="btn">Read More</button>
        </motion.div>
      </div>

    </section>
  )
}

export default Principal
