import React, { useEffect, useRef } from 'react';
import './MenuPage.css';

import Menu from '../../components/menu/Menu.js';

import { DrinkMenus, FoodMenus } from '../../data/Menus.js';

import FadeIn from '../../containers/fadeIn/FadeIn.js';

import drinkMenuIcon from '../../images/icons/drinks-gold.png';
import foodMenuIcon from '../../images/icons/eats-gold.png';
import coffeeBeanPhoto from '../../images/photos/coffeeBeanPhoto.jpg';

const MenuPage = ({ menu, onMenuChange }) => {

    const drinksMenuTypeEl = useRef(null);
    const foodMenuTypeEl = useRef(null);

    const drinkMenusArray = DrinkMenus.map((menu, i) => {
        return (
            <FadeIn position={"onload"} delay={i * 300} direction="up" key={i}>
                <Menu menu={DrinkMenus[i].menu} items={DrinkMenus[i].items} />
            </FadeIn>
        );
    })

    const foodMenusArray = FoodMenus.map((menu, i) => {
        return (
            <FadeIn position={"onload"} delay={i * 200} direction="up" key={i}>
                <Menu menu={FoodMenus[i].menu} items={FoodMenus[i].items} />
            </FadeIn>
        );
    })
    
    const selectMenu = (newMenu) => {
        onMenuChange(newMenu);

        if (newMenu === "drinks") {
            drinksMenuTypeEl.current.setAttribute("class", "mp-menu-type mp-menu-type-selected");
            foodMenuTypeEl.current.setAttribute("class", "mp-menu-type");
        } else {
            drinksMenuTypeEl.current.setAttribute("class", "mp-menu-type");
            foodMenuTypeEl.current.setAttribute("class", "mp-menu-type mp-menu-type-selected");
        }
    }

    useEffect(() => {
        selectMenu(menu);
    }, [])

    return (
        <div>
            <div className="mp-coffee-img">
                <img src={coffeeBeanPhoto} alt="coffeeBeanPhoto" />
            </div>

             <div className="mp-container">

                <div className="mp-menu-type-container">

                    <div ref={drinksMenuTypeEl} onClick={() => selectMenu("drinks")} className="mp-menu-type mp-menu-type-selected">
                        <img src={drinkMenuIcon} alt="Drinks" />
                        <h3>DRINKS</h3>
                    </div>

                    <div className="mp-menu-type-spacer"></div>

                    <div ref={foodMenuTypeEl} onClick={() => selectMenu("food")} className="mp-menu-type mp-menu-type-spacer">
                        <img src={foodMenuIcon} alt="Eats" />
                        <h3>EATS</h3>
                    </div>

                </div>

                <p className="mp-top-sentence">We use fresh beans from local roasters, <a href="https://www.mochamoment.com/" target="_blank" rel="noopener noreferrer">Mocha Moment</a>.</p>

                { menu === 'drinks' &&
                <div>
                    <p className="mp-top-sentence">Milk Options: Whole | Almond | Oat</p>
                    <div className="mp-menus-container">
                        {drinkMenusArray}
                    </div>
                </div>
                }

                { menu === 'food' &&
                        <div className="mp-menus-container">
                            {foodMenusArray}
                        </div>
                }
            </div>
        </div>
    );
}

export default MenuPage;