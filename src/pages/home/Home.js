import React from 'react';
import './Home.css';

import Hero from '../../components/hero/Hero.js';
import Welcome from '../../components/welcome/Welcome.js';
import HomeMenu from '../../components/homeMenu/HomeMenu.js';





const Home = ({ onRouteChange, onMenuChange }) => {
    return (
        <div id="home">
            <Hero />
            <Welcome />
            <div className="home-parallax"></div>
            <HomeMenu onRouteChange={onRouteChange} onMenuChange={onMenuChange} />
        </div>
    )
}

export default Home;