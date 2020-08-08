import React from 'react';
import './MenusList.css';

import MenuCard from '../menuCard/MenuCard.js';

const MenusList = ({ menus }) => {

    const menusArray = menus.map((menus, i) => {
        return (
            <MenuCard image={menus[i].image} name={menus[i].name} description={menus[i].description} />
        );
    })

    return (
        <div>
            {menusArray}
        </div>
    );


}

export default MenusList;