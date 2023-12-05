import React from 'react'
import "./index.scss"
import { Link, NavLink } from 'react-router-dom'
import logoS from "../../assets/images/logo-s.png"
import logoSubtitle from "../../assets/images/logo_sub.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'


export default function Sidebar() {
  return (
    <>
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={logoS} alt='logo'/>
                <img src={logoSubtitle} alt='logo_Sub'/>

            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="work-link" to="/work">
                    <FontAwesomeIcon icon={faBriefcase} color='#4d4d4e' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/yogesh-sharma-243a2117b/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel="noreferrer" href='https://github.com/YogeshSharma01'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/yogesh-sharma-243a2117b/'>
                        <FontAwesomeIcon icon={faYoutube} color='#4d4d4e'/>
                    </a>
                </li>
            </ul>
        </div>
    </>
  )
}
