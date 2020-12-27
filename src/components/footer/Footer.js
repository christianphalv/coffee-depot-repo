import React from 'react';
import './Footer.css';

import fullTracks from '../../images/icons/footer-tracks-medgray-full.png';
import edgeEventsLogo from '../../images/icons/edgeevents-adj.png';

import SlideIn from '../../containers/slideIn/SlideIn.js';

const Footer = ({ route }) => {


    if (route === 'home') {
        return (
            <footer id="footer">
                 <SlideIn position={1700} delay={250} direction="left"><img className="footer-full-tracks" src={fullTracks} alt="tracks" /></SlideIn>
    
                <div className="footer-content-container">
                    <div className="footer-content">
                        <h5>HOURS</h5>
                        <h5>Mon-Fri : 5:30 am - 4:30 pm</h5>
                        <h5>Sat : 7:00 am - 3:00 pm</h5>
                    </div>
    
                    <div className="footer-content">
                        <a className="address" href="https://goo.gl/maps/tkNN6qgEyNW6w1Wi7" target="_blank" rel="noopener noreferrer"><h5>20 South Main Street | Edgerton | WI | 53534</h5></a>
                        <a className="email" href="mailto:hello@coffeedepotedge.com"><h5>hello@coffeedepotedge.com</h5></a>
                        <h6>2020 The Coffee Depot. All rights reserved.</h6>
                    </div>
    
                    <div className="footer-content">
                        <a href="https://www.facebook.com/pg/depotbyedge/photos/" target="_blank" rel="noopener noreferrer"><img src={edgeEventsLogo} alt="Edge Events Logo" /></a>
                    </div>
                </div>
            </footer>
        );
    } else {
        return (
            <footer id="footer">
                <img className="footer-full-tracks" src={fullTracks} alt="tracks" />
    
                <div className="footer-content-container">
                    <div className="footer-content">
                        <h5>HOURS</h5>
                        <h5>Mon-Fri : 5:30 am - 4:30 pm</h5>
                        <h5>Sat : 7:00 am - 3:00 pm</h5>
                    </div>
    
                    <div className="footer-content">
                    <a className="address" href="https://goo.gl/maps/tkNN6qgEyNW6w1Wi7" target="_blank" rel="noopener noreferrer"><h5>20 South Main Street | Edgerton | WI | 53534</h5></a>
                        <a className="email" href="mailto:hello@coffeedepotedge.com"><h5>hello@coffeedepotedge.com</h5></a>
                        <h6>2020 The Coffee Depot. All rights reserved.</h6>
                    </div>
    
                    <div className="footer-content">
                        <a href="https://www.facebook.com/pg/depotbyedge/photos/" target="_blank" rel="noopener noreferrer"><img src={edgeEventsLogo} alt="Edge Events Logo" /></a>
                    </div>
                </div>
            </footer>
        );
    }
   


}

export default Footer;