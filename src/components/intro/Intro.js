import { Link } from 'react-router-dom'
import './intro.sass'

const Intro = () => {
    return (
        <div className='intro' id='home'>
            <div className="container flex">
                    <div className="terminal">
                        <div className="terminal-menu">
                            <div className="terminal-buttons close"></div>
                            <div className="terminal-buttons minimize"></div>
                            <div className="terminal-buttons zoom"></div>
                        </div>
                        <div className="terminal-screen">
                            <div className='command-before'>
                                <span className="tilda">~$</span>
                                <p className='command-text'>./Aslan_Egiev</p>
                            </div>
                            <div className='output'>
                                <h1>Frontend Developer</h1>
                                <br />
                                <ul>
                                    Key skills:
                                    <li>* Javascript</li>
                                    <li>* ReactJS</li>
                                    <li>* Redux</li>
                                    <li>* Ajax</li>
                                    <li>* HTML</li>
                                    <li>* CSS</li>
                                    <li>* Sass</li>
                                    <li>* Git</li>
                                </ul>
                                <Link to='/portfolio'>Portfolio</Link>
                            </div>
                            <p className={'command-after'}>
                                <span className="tilda cursor">~$</span>
                            </p>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Intro
