import React, { useRef, useEffect } from 'react';
import './FadeIn.css';

import { useScrollPosition } from '../../functions/useScrollPosition.js';


const FadeIn = (props) => {

    const { position, delay, direction } = props;

    const fadeInEl = useRef(null);

    useScrollPosition(
        ({ currPos }) => {
            if (currPos.y <= -position) {
                setTimeout(() => {
                    if (fadeInEl.current !== null) {
                        fadeInEl.current.setAttribute("class", `${direction} after-fade`); 
                    }
                }, delay);
            }
        },
        [],
        false,
        false,
        0,
    );

    useEffect(() => {
        if (position === "onload") {
            setTimeout(() => {
                if (fadeInEl.current !== null) {
                    fadeInEl.current.setAttribute("class", `${direction} after-fade`); 
                }
            }, delay);
        }
    });


    return (
        <div ref={fadeInEl} className={`${direction}`}>
            {props.children}
        </div>
    )
}

export default FadeIn;