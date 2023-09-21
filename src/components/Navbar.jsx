import React, {useState} from 'react'
import './css/navbar.css'
import logo from './college-logo.jpg'
import { RxHamburgerMenu } from 'react-icons/rx';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';

const menuItems = [
    {name:"Home", path: '/'},
    {name:"About", path: '/about'},
    {name:"Contacts", path: '/'},
    {name:"Academics", path: '/'},
    {name:"Notices", path: '/'},
    {name:"Newsletter", path: '/'},
    {name:"Research", path: '/'},
    {name:"Conference", path: '/'},
    {name:"Extensions", path: '/'},
    {name:"IQAC", path: '/'},
    {name:"Gallery", path: '/'},
    {name:"Carrier", path: '/'}]


const Navbar = () => {
    const [menuState, setMenuState] = useState('none');
    const MenuListToggle = () =>{
        if (menuState ==='none'){
            const menu = document.querySelector('.hamburger-menu');
            menu.removeAttribute('id');
            setMenuState('block')
            console.log(menu)
        } else if (menuState === 'block'){
            const menu=document.querySelector('.hamburger-menu');
            menu.setAttribute('id', 'hamburger-display');
            setMenuState('none');
            console.log(menuState);
        }
        
    }
    return (
        <section>
        <nav>
            <div className="nav-left">
                <img id="logo" src={logo} alt="logo" />
                <div id="collegeName">
                    <span>Dhanusha Science Campus</span>
                    <span>Bidya Nagar, Janakpurdham, Nepal</span>
                    <span>Dedicated to excellence, leadership, service</span>
                </div>
            </div>
            <div className="nav-right">
                <ul>
                    <li>BidyaNagar, Janakpur Nepal,</li>
                    <li>jnk@dsc.edu.np,</li>
                    <li>+977 9825850633</li>
                    <li>|</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className="login-btn-mobile" id="mobile">
              <span>Login</span>
              <button type='button' id="menu-icon" onClick={MenuListToggle}><RxHamburgerMenu/></button>
            </div>
            
        </nav>
        <motion.div initial={{y: -200, scale: .1}}
        whileInView={{y: 0, scale: 1}}
        transition={{duration: .3}}
        className="hamburger-menu" id="hamburger-display">
             <ul>
                {menuItems.map((element, index) =>(
                   
                    <li key={index}><Link to={element.path}>{element.name}</Link></li>
                    
                ))}

                </ul>
            </motion.div>
       
        </section>
    )
}

export default Navbar
