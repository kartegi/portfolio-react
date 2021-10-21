import React from 'react'

const Project = ({projects, id}) => {
    const poject = projects.filter(project => project.id === id)
    return (
        <div className='project' >
            <div className="container">
                {}
                <div className="project-info">
                    <div className="project-image">
                        <img src={project.img} alt="project img" />
                    </div>
                    <div className="project-links">
                        <a href={project.gitLink}>Github</a>
                        <a href={project.demoLink}>Demo</a>
                    </div>
                </div>
                <div className="project-description">
                    <h1>{project.title}</h1>
                    <p>{project.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Project
