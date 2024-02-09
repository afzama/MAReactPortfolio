import React from 'react'
import './style.css'
import boardgamecafe from '../../assets/Boardgamecafe.png'
import geekymoviewizard from '../../assets/GeekyMovieWizard.jpeg'

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
                </a>
                <p className='project-techs'>{props.project.techs}</p>
            </div>
        </div>
    )
}

export default Project;