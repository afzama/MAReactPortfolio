import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer(props) {

    return (
        <footer>
            <a href="https://github.com/Afzama" className='social-icon'>
                <FontAwesomeIcon icon={faGithub} style={{ padding: '20px' }} />
            </a>
            <a href="https://www.linkedin.com/in/mariaafzal/" className='social-icon'>
                <FontAwesomeIcon icon={faLinkedin} style={{ padding: '20px' }}  />
            </a>
        </footer>
    )
}

export default Footer;