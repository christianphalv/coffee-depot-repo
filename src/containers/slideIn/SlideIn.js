import React, { useRef, useEffect } from 'react';
import './SlideIn.css';

import { useScrollPosition } from '../../functions/useScrollPosition.js';


const SlideIn = (props) => {

    const { position, delay, direction, pace } = props;


    let slidePace = "after-slide-linear";

    if (pace === "ease") {
        slidePace = "after-slide-ease";
    }

    const slideInEl = useRef(null);

    useScrollPosition(
        ({ currPos }) => {
            if (currPos.y <= -position) {
                setTimeout(() => {
                    if (slideInEl.current !== null) {
                        slideInEl.current.setAttribute("class", `${direction} ${slidePace}`); 
                    }
                }, delay);
            }
        },
        [],
        false,
        false,
        0,
    )

    useEffect(() => {
        if (position === "onload") {
            setTimeout(() => {
                if (slideInEl.current !== null) {
                    slideInEl.current.setAttribute("class", `${direction} ${slidePace}`); 
                }
            }, delay);
        }
    });

    return (
        <div ref={slideInEl} className={`${direction}`}>
            {props.children}
        </div>
    )
}

export default SlideIn;