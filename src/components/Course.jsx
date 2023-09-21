import React from 'react'
import './css/course.css';
import wave from './wave.svg';
import { motion } from "framer-motion"
import CategoryHead from './CategoryHead';

const devStyle = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'flex-start',
    height: '15rem'
}
const collegeCategory = [
    {
        name: 'A-Level',
        description: `A Levels at St. Xavier's College...`,
        url: '/a-level',
        imageUrl: 'https://sxc.edu.np/uploads/program/alevel1-file-20220407051243-27.JPG'
    }, {
        name: 'Plus-Two',
        description: `NEB affiliated Plus Two ...`,
        url: '/plus-two',
        imageUrl: 'https://sxc.edu.np/uploads/program/IMG_1893-file-20220407051442-975.JPG'
    }, {
        name: 'BSC CSIT (TU)',
        description: 'B.Sc. CSIT (Bachelor of Science...',
        url: '/bsc-csit',
        imageUrl: 'https://sxc.edu.np/uploads/program/Screenshot_37-file-20230817130526-99.png'
    }, {
        name: 'Bachelors in Arts (TU)',
        description: 'An intrinsic section of St. Xav...',
        url: '/bachelors-in-arts',
        imageUrl: 'https://sxc.edu.np/uploads/program/program-20210305031354-678.JPG'
    }, {
        name: 'BIM (TU)',
        description: `Tribhuvan University's Bachelors...`,
        url: '/bim',
        imageUrl: 'https://sxc.edu.np/uploads/program/Screenshot_32-file-20230817104830-954.png'
    }, {
        name: 'BSW (KU)',
        description: 'Department of Social Work ....',
        url: '/bsw',
        imageUrl: 'https://sxc.edu.np/uploads/program/P1045902-file-20220407050850-165.JPG'
    }, {
        name: 'BBS (TU)',
        description: 'Enable students to be the entr...',
        url: '/bbs-tu',
        imageUrl: 'https://sxc.edu.np/uploads/program/IMG_6633-file-20230807154004-283.JPG'
    }, {
        name: "BSC Microbiology (TU)",
        description: 'Bachelors of Science-Microbiology...',
        url: '/bsc-microbiology',
        imageUrl: 'https://sxc.edu.np/uploads/program/_MG_6049-file-20230828100000-448.JPG'
    }, {
        name: 'BSC Physics (TU)',
        description: "Bachelors of Science in Physic...",
        url: '/bsc-physics',
        imageUrl: 'https://sxc.edu.np/uploads/program/5-file-20230815125739-578.JPG'
    }
]

const Course = () => {
    return (
        <section className="page4" style={{ height: 'fit-content', position: 'relative', marginTop: '3vw' }}>
            <CategoryHead title='Course' description='Browse Our Course Category'/>
            <div className="grid-rows-columns">
                {collegeCategory.map((element, index) => (
                    <motion.div
                        initial={{ x: 0, y: 70}}
                        whileInView={{ x: 0, y: 0 }}
                        transition={{ duration: .8 }}
                        key={index} className="card">
                        <div className="img-holder">
                            <motion.div className="imgHolder" style={{ ...devStyle, backgroundImage: `url(${element.imageUrl})` }} whileHover={{ scale: 1.2, rotate: -10 }} transition={{ duration: .8 }} >
                            </motion.div>
                            <img src={wave} alt="..." className="wave" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{element.name}</h5>
                            <p className="card-text">{element.description}</p>
                            <button type='button' className="btn-card">Read More</button>
                        </div>
                    </motion.div>
                ))
                }
            </div>
        </section>
    )
}

export default Course
