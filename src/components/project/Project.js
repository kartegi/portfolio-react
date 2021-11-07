import './project.sass'
import React, { useEffect } from 'react'
import { projectList } from '../../data/data'

const Project = (props) => {
    const id = props.match.params.id
    const project = projectList.projects.filter(project => project.id === +id)[0]

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
          });
    }, [])

    return (
        <div className='project'>
            <div className="container">
                <div className="project__info">
                    <div className="project__img">
                        <img src={project.img} alt="project" />
                    </div>
                    <div className="project__links">
                        <a href={project.gitLink}>Github</a> <br />
                        <a href={project.demoLink}>Demo</a>
                    </div>
                </div>
                <div className="project__descr">
                    <h1 className="project__title">{project.title}</h1>
                    <p>
                        {project.desc}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Project
