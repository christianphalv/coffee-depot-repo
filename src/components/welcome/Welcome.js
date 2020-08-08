import React from 'react';
import './Welcome.css';

import SlideIn from '../../containers/slideIn/SlideIn.js';
import FadeIn from '../../containers/fadeIn/FadeIn.js';

import fullTracks from '../../images/icons/welcome-tracks-ltgray-full.png';
import smallTracks from '../../images/icons/welcome-tracks-ltgray.png';
import coffeeImage from '../../images/photos/dripcoffee-dpyellow-filter2.jpg';

const Welcome = () => {

    return (
        <section id="welcome">
            <div className="welcome-images">
                <SlideIn position={500} delay={250} direction="left" pace="ease"><img className="history-image" src={coffeeImage} alt="Coffee" /></SlideIn>
            </div>
            <div className="welcome-spacer"></div>
            <div className="welcome-text">
                <FadeIn position={500} delay={0} direction="up">
                <h3>Welcome</h3>
                <img className="small-tracks" src={smallTracks} alt="small tracks" />
                <p>
                    Here at the Coffee Depot, our family looks forward to serving you superior coffee and teas, smoothies and pastries. Enjoy the ambience of Edgerton’s historic train depot or relax outside on our spacious deck. If you are on the go, <a href="http://get.joe.coffee/" target="_blank" rel="noopener noreferrer">order ahead</a> and pick up your items from the convenience of your vehicle. Like the locomotives of the past, allow us to provide you the steam to keep you going! We also understand the value of margin—come over and rest, enjoy conversation like folks who waited for their train years ago.    
                </p>
                <p>Jim and Denise Salimes</p>
                </FadeIn>
            </div>
            <div className="welcome-full-tracks-container">
                <SlideIn position={500} delay={1000} direction="right"><img className="full-tracks" src={fullTracks} alt="full tracks" /></SlideIn>
            </div>
        </section>
    )
}

export default Welcome;