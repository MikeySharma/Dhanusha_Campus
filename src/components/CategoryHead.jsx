import React from 'react'
import './css/course.css'
import {motion} from 'framer-motion';
const CategoryHead = (props) => {
  return (
    <section> 
       <motion.div
       initial={{x: 0, y: 70}}
       whileInView={{x: 0, y: 0}}
       transition={{duration: .5}}
       className="category-head">
                    <div className="category-head-left">
                        <div className="category-head-up">
                            <span>|</span> <span>{props.title}</span>
                        </div>
                        <div className="category-head-down">
                            {props.description}
                        </div>
                    </div>
                    <div className="category-head-right"><ion-icon className="btn" name="arrow-forward-circle"></ion-icon></div>
                </motion.div>
    </section>
  )
}

export default CategoryHead
