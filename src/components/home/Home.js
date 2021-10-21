import React, { useEffect } from 'react'
import Intro from '../intro/Intro';
import About from '../about/About';
import Contact from '../contact/Contact';

const Home = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
          });
    }, [])

    return (
        <div className='home'>
            <Intro />
            <About />
            <Contact />
        </div>
    )
}

export default Home
