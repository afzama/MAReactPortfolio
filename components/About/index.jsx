import React from 'react'
import './style.css'
import profilePic from '../../assets'

function About(props) {

    return (
        <div className='about-div'>
            <h2>About Me</h2>
            <img src={profilePic} alt="Profile Picture" />
            <p>
            Hello! Thank you for stopping by!
            Maria Afzal here, earned her Bachelors in business administration from the Webster University and went into find a fulfilling
            career in technology sales. Over the past 13+ years acquired leadership, sales presentation, negotiation, and various other 
            soft skills to become an avid sales professional and went onto acquire multiple technology certificates, including AWS Cloud Practitioner.

            This led me to learn more about cloud, become immersed and excited and find a path to an AWS presales specialist.
            I will be graduating with certificate in Full Stack Web Development from the University of Toronto and am passionate about
            contributing to the existing developer community and learning from those who came before me!
            
            My resume is available to download, and includes my contact information.
            I look forward to getting in touch with you!
            </p>
        </div>

    )
}

export default About;