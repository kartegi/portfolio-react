import React, { useEffect, useState } from 'react'
import Nav from '../nav/Nav'
import './navbar.sass'

function NavBar({handleBurgerClick}) {
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", function handleScroll() {
            if (window.scrollY > 10)
                setScroll(true)
            else
                setScroll(false)
            return () => {
                window.removeEventListener("scroll", handleScroll)
            }
        })
    }, [])

    return (
        <div className={`navbar ${scroll && "navbar__bg"}`}>
            <div className="container flex">
                <div className={`logo ${scroll && "logo__black"}`}>
                    Aslan's Portfolio
                </div>
                <Nav scroll={scroll} />
                <div onClick={handleBurgerClick} className="icon-container">
                    <div className={`burger-icon ${scroll && 'icon-black'}`}></div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
