import './nav.sass'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Nav({scroll, column, handleBurgerClick}) {
    const list = ['Home', 'About me', 'Contact', 'Portfolio']
    // console.log(scroll)

    return (
        <nav className={`menu ${column}`}>
            <ul className={`menu-list ${column}`}>
                {list.map((item, i) => (
                    <li key={i} className={`menu-item ${scroll && "item__white"}`}>
                        {    
                            item === 'Portfolio' ?
                                (<Link onClick={handleBurgerClick} className={`menu-link ${scroll && 'link__black'}`} to='/portfolio'>{item}</Link>) :
                            (<HashLink
                                onClick={handleBurgerClick}
                                className={`menu-link ${scroll && 'link__black'}`}
                                to={"/#"+(item === 'About me' ? 'about' : item.toLocaleLowerCase())}
                            >{item}</HashLink>)
                        }
                    </li>
                ))}
                
            </ul>
        </nav>
    )
}

export default Nav
