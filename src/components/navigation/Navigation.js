import React, { useRef, useState } from 'react';
import './Navigation.css';

import {useScrollPosition} from '../../functions/useScrollPosition.js';

import CoffeeDepotLogo from '../../images/icons/logo-golden.png';
import facebookLogo from '../../images/icons/icons8-facebook-48.png';
import instagramLogo from '../../images/icons/icons8-instagram-52.png';
import joeLogo from '../../images/icons/Joe-Logo-Badge_BW.png';
import menuHamburger from '../../images/icons/icons8-menu-48.png';


const Navigation = ({ route, onRouteChange }) => {

    const navEl = useRef(null);

    const [menuToggle, setMenuToggle] = useState(null);

    useScrollPosition(
        ({ currPos }) => {
            if (route === "home" && navEl.current !== null) {
                if (currPos.y <= -100) {
                
                    navEl.current.setAttribute("class", "solid-nav");
                    
                } else {
                    navEl.current.setAttribute("class", "");
                }
            }
        },
        [],
        false,
        false,
        0,
    )

    const toggleMenu = () => {
        if (menuToggle === null) {
            setMenuToggle("nav-menu-open");
        } else {
            setMenuToggle(null);
        }
    }

    const menuClose = () => {
        setMenuToggle(null);
    }

    if (route === "home") {
        return (
            <nav id="navigation" ref={navEl}>
                <div className="nav-container">
    
                    <div className="nav-element-container-logo">
                        <img className="nav-logo" onClick={() => {onRouteChange('home'); menuClose();}} src={CoffeeDepotLogo} alt="logo" />
                    </div>

                    <div className="nav-element-container-social">
                        <a href="https://www.facebook.com/coffeedepotedge" target="_blank" rel="noopener noreferrer"><img className="nav-icon" src={facebookLogo} alt="facebook" /></a>
                        <a href="https://www.instagram.com/coffeedepotedge" target="_blank" rel="noopener noreferrer"><img className="nav-icon" src={instagramLogo} alt="instagram" /></a>
                        
                        <a href="http://get.joe.coffee/" target="_blank" rel="noopener noreferrer" className="nav-joe-icon">
                            <img className="nav-icon" src={joeLogo} alt="joe" /><h4>order curbside</h4>
                        </a>
                    </div>

    
                    <div className="nav-element-container-menu">
                        <img className="nav-icon" src={menuHamburger} alt="menu" onClick={() => toggleMenu()}/>
                    </div>

                </div>
                <div className={`nav-menu ${menuToggle}`}>
                    <a href="http://get.joe.coffee/" target="_blank" rel="noopener noreferrer"><h4 className="nav-menu-item" >ORDER CURBSIDE</h4></a>
                    <h4 className="nav-menu-item" onClick={() => {onRouteChange('home'); toggleMenu();}}>HOME</h4>
                    <h4 className="nav-menu-item" onClick={() => {onRouteChange('menu'); toggleMenu();}}>MENU</h4>

                    <div className="nav-menu-hours">
                        <h4>HOURS</h4>
                        <h4>Mon-Fri</h4>
                        <h4>5:30 am - 4:30 pm</h4>
                        <h4>Sat</h4>
                        <h4>7:00 am - 3:00 pm</h4>
                    </div>

                </div>
            </nav>
        );
    } else {
        return (
            <nav id="navigation" className="solid-nav">
                <div className="nav-container">
    
                    <div className="nav-element-container-logo">
                        <img className="nav-logo" onClick={() => {onRouteChange('home'); menuClose();}} src={CoffeeDepotLogo} alt="logo" />
                    </div>

                    <div className="nav-element-container-social">
                        <a href="https://www.facebook.com/coffeedepotedge" target="_blank" rel="noopener noreferrer"><img className="nav-icon" src={facebookLogo} alt="facebook" /></a>
                        <a href="https://www.instagram.com/coffeedepotedge" target="_blank" rel="noopener noreferrer"><img className="nav-icon" src={instagramLogo} alt="instagram" /></a>
                        
                        <a href="http://get.joe.coffee/" target="_blank" rel="noopener noreferrer" className="nav-joe-icon">
                            <img className="nav-icon" src={joeLogo} alt="joe" /><h4>order curbside</h4>
                        </a>
                    </div>


                    <div className="nav-element-container-menu">
                        <img className="nav-icon" src={menuHamburger} alt="menu" onClick={() => toggleMenu()}/>
                    </div>

                </div>
                <div className={`nav-menu ${menuToggle}`}>
                    <a href="http://get.joe.coffee/" target="_blank" rel="noopener noreferrer" ><h4 className="nav-menu-item" >ORDER CURBSIDE</h4></a>
                    <h4 className="nav-menu-item" onClick={() => {onRouteChange('home'); toggleMenu();}}>HOME</h4>
                    <h4 className="nav-menu-item" onClick={() => {onRouteChange('menu'); toggleMenu();}}>MENU</h4>

                    <div className="nav-menu-hours">
                        <h4>HOURS</h4>
                        <h4>Mon-Fri</h4>
                        <h4>5:30 am - 4:30 pm</h4>
                        <h4>Sat</h4>
                        <h4>7:00 am - 3:00 pm</h4>
                    </div>

                </div>
            </nav>
        );
    }


}

export default Navigation;