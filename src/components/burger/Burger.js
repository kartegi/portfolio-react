import React from 'react'
import Nav from '../nav/Nav'
import './burger.sass'

const Burger = ({scroll ,show, handleBurgerClick}) => {
    return (
        <div>
            <div className={`burger-container ${show && 'burger-show'}`}>
                <div className="close-container">
                    <div className="burger-close" onClick={handleBurgerClick}>
                        <div className="close-line"></div>
                    </div>
                </div>
                <div className='burger'>
                    <Nav column='nav-column' handleBurgerClick={handleBurgerClick} />
                </div>
            </div>
                <div className={`${show && 'burger-wrapper'}`} onClick={handleBurgerClick}></div>
        </div>
    )
}

export default Burger
