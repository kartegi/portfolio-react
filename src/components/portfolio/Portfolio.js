import React, { useEffect } from 'react'
import './portfolio.sass'
import {projectList} from '../../data/data'
import Card from '../card/Card'

const Portfolio = () => {

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
                {
                    projectList.projects.map((card) => (
                    <Card project={card} key={card.id} />
                ))}
            </div>
        </div>
    )
}

export default Portfolio
