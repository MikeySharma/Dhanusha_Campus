import React from 'react'
import './css/navbar.css';
import {Link} from 'react-router-dom';
window.addEventListener('scroll',() =>{
    const nav2  = document.querySelector('#nav2');
    nav2.classList.toggle('sticky', window.scrollY > 0);
})
const StickyNavbar = () => {
    return (
        <section>
            <div id="nav2">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="/">Academics</Link></li>
                    <li><Link to="/">Notices</Link></li>
                    <li><Link to="/">Newsletter</Link></li>
                    <li><Link to="/">Research</Link></li>
                    <li><Link to="/">Conference</Link></li>
                    <li><Link to="/">Extensions</Link></li>
                    <li><Link to="/">IQAC</Link></li>
                    <li><Link to="/">Gallery</Link></li>
                    <li><Link to="/">Carrer</Link></li>
                </ul>
            </div>

        </section>
    )
}

export default StickyNavbar
