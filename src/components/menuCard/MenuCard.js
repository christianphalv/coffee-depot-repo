import React from 'react';
import './MenuCard.css';

const MenuCard = ({ name, options }) => {

    
    const optionsArray = options.map((option, i) => {
        
        return (
            <div className="mc-option" key={i}>
                <p>{options[i].option}</p>
            </div>
        );
    })
    


    return (
        <div className="mc-container">
            <h4>{name}</h4>
            <div className="mc-options-container">
                {optionsArray}
            </div>
        </div>
    );


}

export default MenuCard;