import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import LogoT from '../../assets/images/download.png'
import LogoSlogan from '../../assets/images/logo-slogan.png'
import {faHome, faUser, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return(
        <div className='nav-bar'>
            <Link className='logo' to='/'>

                <img className='sub-logo' src={LogoSlogan} alt='slogan'/>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#EAEAEA" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#EAEAEA" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#EAEAEA" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/taiwo-ajomale-121bb619b'>
                        <FontAwesomeIcon icon={faLinkedin} color='#EAEAEA'/>

                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/Vansladd'>
                        <FontAwesomeIcon icon={faGithub} color='#EAEAEA'/>
                    </a>
                </li>
            </ul>
        </div>
    )

}

export default Sidebar