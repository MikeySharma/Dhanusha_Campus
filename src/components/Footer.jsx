import React from 'react'
import './css/footer.css';
import Wave from './wave.svg';
const Footer = () => {
    return (
        <section className="footer" style={{ height: 'fit-content', position: 'relative', marginTop: '3vw' }}>
            <div className="footer-content">
                <div className="footer-content-holder">
                    <div className="footer-about">
                        <div className="about-us-title">About Us</div>
                        <div className="about-us-description">
                            <p>ST. XAVIER’S COLLEGE, Kathmandu, is an educational institution of higher learning established and managed by the Nepal Jesuit Society.</p>
                        </div>
                    </div>
                    <div className="useful-link">
                        <h1>UsefulLink</h1>
                        <h2>SXC NEB</h2>
                        <h2>ST.XAVIER COLLEGE LOYOLA CAMPUS</h2>
                        <h2>SXC (SJMSS)</h2>
                        <h2>TU SXC</h2>
                    </div>
                    <div className="contact-info">
                        <h1>Contact Info</h1>
                        <h2><ion-icon name="location-sharp"></ion-icon>BidyaNagar, Janakpurdham Nepal</h2>
                        <h2><ion-icon name="mail-sharp"></ion-icon>ktm@sxc.edu.np</h2>
                        <h2><ion-icon name="call-sharp"></ion-icon>+977-01-5321365, 5344636</h2>
                    </div>
                </div>
                <div className="copy-right-content">
                    <p>&copy; Copyright 2023 Dhanusha Science College, Janakpurdham All Rights Reserved <span>|<span> Powered by: digital nepal</span></span></p>
                </div>
                <div className="wave-holder">
                    <img src={Wave} alt="wave" />
                </div>
            </div>
        </section>
    )
}

export default Footer
