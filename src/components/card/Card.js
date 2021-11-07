import './card.sass'
import { Link } from 'react-router-dom'

const Card = ({project}) => {
    return (
        <div className="card">
            <div className="card-header">
                <img src={project.img} alt="card" />
            </div>
            <div className="card-info-container">
                    <h2 className="card-title">{project.title}</h2>
                    <p className="card-desc">{project.desc.substr(0, 150)}...</p>
            </div>
            <div className='link-container' >
                <Link to={'project/'+project.id} className='card-link' >Learn more</Link>
            </div>
        </div>
    )
}

export default Card
