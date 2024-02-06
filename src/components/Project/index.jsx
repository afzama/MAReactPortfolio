import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Project(props) {
    console.log(props);
    return (
        <div className='project-card'>
            <div className='project-bg-image' style={{backgroundImage: `url(${props.project.imgSrc})`}}></div>
            <div className='project-info-div'>
                <a href={props.project.deployedLink} className='project-social-link'>
                    <h3 className='card-heading'>{props.project.heading}</h3>
                </a>
                <a href={props.project.githubLink} className='project-social-link'>
                    <FontAwesomeIcon icon={faGithub} style={{ padding: '10px' }} className='project-social-icon' />
                </a>
                <p className='project-techs'>{props.project.techs}</p>
            </div>
        </div>
    )
}

export default Project;