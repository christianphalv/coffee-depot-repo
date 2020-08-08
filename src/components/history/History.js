import React from 'react';
import './History.css';

import SlideIn from '../../containers/slideIn/SlideIn.js';

const History = () => {

    return (
        <section className="history">
            <div className="history-images">
                <div className="history-grid-item-one">
                    <SlideIn position={500} delay={250} direction="left"><img className="history-image" src="https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg" alt="pictureOne" /></SlideIn>
                </div>
                
                <div className="history-grid-item-two">
                    <SlideIn position={500} delay={500} direction="left"><img className="history-image" src="https://images.pexels.com/photos/414645/pexels-photo-414645.jpeg" alt="pictureTwo" /></SlideIn>
                </div>
                
                <div className="history-grid-item-three">
                    <SlideIn position={500} delay={0} direction="left"><img className="history-image" src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg" alt="pictureThree" /></SlideIn>
                </div>
            </div>

            <div className="history-text">
                <h3>History</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus eleifend diam ornare commodo. Donec fringilla nisi sed ipsum euismod viverra. Praesent eros urna, egestas sed dolor non, facilisis efficitur nunc. Aliquam eget ipsum at ipsum bibendum pharetra. Aenean et ante vitae risus euismod accumsan at fermentum ipsum. Nunc feugiat, eros convallis cursus viverra, tellus arcu lacinia nibh, non tristique eros sem vel tellus. Donec vitae magna nibh. Mauris metus purus, ornare a tortor et, pretium euismod massa. Vestibulum gravida ultrices purus in fermentum. Nunc varius felis ante, eu ultricies sapien finibus vitae. Pellentesque malesuada ante nec vehicula porta.
                </p>
            </div>
        </section>
    )
}

export default History;