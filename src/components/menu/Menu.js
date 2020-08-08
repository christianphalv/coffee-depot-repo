import React from 'react';
import './Menu.css';

import MenuCard from '../menuCard/MenuCard.js';

import smallTracks from '../../images/icons/welcome-tracks-ltgray.png';

const Menu = ({ menu, items }) => {

    const itemsArray = items.map((item, i) => {
        
        return (
            <MenuCard name={items[i].name} options={items[i].options} key={i} />
        );
    })

    return (
        <div className="menu-container">
            <h3>{menu}</h3>
            <img className="menu-tracks" src={smallTracks} alt="Drink Tracks" />
            <div className="menu-items">
                {itemsArray}
            </div>
        </div>
    );


}

export default Menu;