import React from 'react';
import './HomeMenu.css';

import FadeIn from '../../containers/fadeIn/FadeIn.js';

import menuTracks from '../../images/icons/menuheader-tracks.png';
import HMDrinksIcon from '../../images/icons/drinks-gold.png';
import HMFoodIcon from '../../images/icons/eats-gold.png';

import HMDrinksTracks from '../../images/icons/drinks-tracks-ltgray.png';
import HMFoodTracks from '../../images/icons/eats-tracks-ltgray.png';




const HomeMenu = ({ onRouteChange, onMenuChange }) => {

    return (
        <div className="home-menu">
            <div className="hm-header">
                <img src={menuTracks} alt="Menu Tracks" />
                <h2>MENU</h2>
                <img src={menuTracks} alt="Menu Tracks" />
            </div>

            <div className="hm-options-container">

                    <div className="hm-option" onClick={() => [onRouteChange('menu'), onMenuChange('drinks')]}>
                        <FadeIn position={1500} delay={0} direction="up">
                            <img className="hm-icon" src={HMDrinksIcon} alt="Drinks" />
                            <div className="hm-option-title">
                                <img src={HMDrinksTracks} alt="Menu Tracks" />
                                <h3>DRINKS</h3>
                                <img src={HMDrinksTracks} alt="Menu Tracks" />
                            </div>
                        </FadeIn>
                    </div>


        
                    <div className="hm-option" onClick={() => [onRouteChange('menu'), onMenuChange('food')]}>
                        <FadeIn position={1500} delay={0} direction="up">
                            <img className="hm-icon" src={HMFoodIcon} alt="Eats" />
                            <div className="hm-option-title">
                                <img src={HMFoodTracks} alt="Menu Tracks" />
                                <h3>EATS</h3>
                                <img src={HMFoodTracks} alt="Menu Tracks" />
                            </div>
                        </FadeIn>
                    </div>
                
            </div>
        </div>
    )
}

export default HomeMenu;