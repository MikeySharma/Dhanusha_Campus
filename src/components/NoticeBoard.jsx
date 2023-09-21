import React from 'react';
import './css/notice-board.css';
import { motion } from 'framer-motion';
const Notice = [{
    title: 'Bachelor Level Admission Information',
    publishedAt: 'August 16, 2023'
}, {
    title: 'BA BBS Orientation Program 2023',
    publishedAt: 'September 16, 2023'
}, {
    title: 'BBS 4th Year Class Start Notice',
    publishedAt: 'July 19, 2023'
}, {
    title: 'MBS 4th Semester Class Start Notice',
    publishedAt: 'July 19, 2023'
}, {
    title: 'Happy lgnatius Day',
    publishedAt: 'June 18, 2023'
}
]


const NoticeBoard = (props) => {
    return (

        <div className="Container">
            <div className="board-head"><span>{props.head}</span></div>
            {Notice.map((element, index) => (
                <motion.div
                    initial={{ x: 0, y: -100 }}
                    whileInView={{ x: 0, y: 0 }}
                    transition={{ duration: .5 }} className="board-body" key={index}>
                    <small>{element.publishedAt}</small>
                    <div className="title">{element.title}</div>
                </motion.div>
            ))
            }
            <motion.div
                initial={{ x: 0, y: -100 }}
                whileInView={{ x: 0, y: 0 }}
                transition={{ duration: .5 }}
                className="board-body br-n">
                <div className="title">View All Notices<ion-icon name="arrow-forward-outline"></ion-icon></div>
            </motion.div>
        </div>
    )
}

export default NoticeBoard
