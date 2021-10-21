import React from 'react'
import Navbar from './navbar/navbar'

function Header({handleBurgerClick, getScroll}) {
    return (
        <header className='header'>
            <Navbar getScroll={getScroll}  handleBurgerClick={handleBurgerClick}/>
        </header>
    )
}

export default Header
