import React from 'react';
import './css/events.css';
import {motion} from 'framer-motion';
import CategoryHead from './CategoryHead';
const eventList = [
    {
        date: '18',
        month: 'August',
        title: 'Seminar on Researches in Microbiology',
        about: 'One day seminar on "Researches in Microbiology". Theme: Structuring a common plac...'
    },
    {
        date: '12',
        month: 'August',
        title: 'Youth Mela 2023',
        about: 'Embracing this year\'s theme "Journeying with Youth, "St.Xavier\' College teams...'
    },
    {
        date: '11',
        month: 'September',
        title: 'Physics Family Week 2023',
        about: 'We are delighted to announce the commencement of our much-anticipated event, Phy.....'
    },
    {
        date: '31',
        month: 'March',
        title: 'Media Talk Series-XXVI',
        about: 'Media Talk Series-XXVI...'
    }
]
const Events = () => {
    return (
        <section className="page5" style={{ height: 'fit-content', marginTop: '4vw' }} >
            <CategoryHead title='Events' description='Latest Events'/>
            <div className="event-holder">
                {eventList.map((element, index) => (
                    <motion.div
                        initial={{ x: 0, y: 100 }}
                        whileInView={{ x: 0, y: 0 }}
                        transition={{ duration: .5 }}
                        key={index} className="event-box">
                        <div className="date-holder">
                            <span className="date">{element.date}</span>
                            <span className="month">{element.month}</span>
                        </div>
                        <div className="text-holder">
                            <div className="text-head">{element.title}</div>
                            <div className="text-about">{element.about}</div>
                        </div>
                    </motion.div>
                ))
                }
            </div>
        </section>
    )
}

export default Events
