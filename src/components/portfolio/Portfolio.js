import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './portfolio.sass'

const Portfolio = ({projects}) => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
          });
    }, [])

    return (
        <div className='portfolio'>
            <div className="container">
                {projects.projects.map((card, i) => (
                    <div className="card" key={i}>
                        <div className="card-header">
                            <img src={card.img} alt="card" />
                        </div>
                       <div className="card-info-container">
                            <h2 className="card-title">{card.title}</h2>
                            <p className="card-desc">{card.desc.substr(0, 150)}...</p>
                       </div>
                        <div className='link-container' ><Link to='#' className='card-link' >Learn more</Link></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio
