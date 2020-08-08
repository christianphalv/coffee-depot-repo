import React from 'react';
import './Hero.css';

//import ImageReveal from '../../components/imageReveal/ImageReveal.js';
//import HeroBW from '../../images/photos/hero-depot-bw-1366x768.jpg';
//import HeroColor from '../../images/photos/hero-depot-color-1366x768.jpg';

import FadeIn from '../../containers/fadeIn/FadeIn.js';
import SlideIn from '../../containers/slideIn/SlideIn.js';


import HeroMessage from '../../images/icons/hero-message-white.png';
import HeroTracks from '../../images/icons/hero-tracks-gold.png';


//<ImageReveal backImage={HeroColor} frontImage={HeroBW} />

//<img className="hero-image" src={HeroBW} alt="Hero" />

const Hero = () => {
    return (
        <div id="hero">
            <p>Hello</p>
            <div className="jumbotron">
                <div className="hero-message-container">
                    <SlideIn position={"onload"} delay={500} direction="left">
                        <img className="hero-tracks-one" src={HeroTracks} alt="Hero Tracks" />
                    </SlideIn>
                    <div className="hero-message">
                        <FadeIn position={"onload"} delay={0} direction="up">
                            <img src={HeroMessage} alt="Hero Message" />
                        </FadeIn>
                    </div>
                    <SlideIn position={"onload"} delay={500} direction="right">
                        <img className="hero-tracks-two" src={HeroTracks} alt="Hero Tracks" />
                    </SlideIn>
                </div>
            </div>
        </div>
    );
}

export default Hero;