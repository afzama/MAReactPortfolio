import React from 'react'
import './style.css'
import profilePic from '../../assets/Me.jpg'
import awsBadge from '../../assets/AWS-CloudCertBadge.png'

function About(props) {

    return (
        <section className='about-section'>
            <h2>About Me</h2>
            <div className="center-image">
            <img src={profilePic} alt="Profile Picture" />
            </div>
            <div>
            <p>
            Hello! Thank you for stopping by.
            <br></br>
            <br></br>
            Maria Afzal, earned her BBA from Webster University and have held various sales roles including Account Executive, Territory Sales Leader, 
            Cloud Pre-Sales specialist and Business Development Manager.
            <br></br>
            <br></br>  
            Over the past 13+ years acquired leadership, sales presentation, negotiation, and various other 
            soft skills and went onto acquire multiple technology certificates, including AWS Cloud Practitioner.
            </p>
            </div>
            <div className="skill-badge">
            <img src={awsBadge} alt="AWS Cloud Practitioner"/>
            </div>
            <div>
            <p>
            This led me to learn more about cloud computing, become immersed and excited and find a path to an AWS presales specialist.
            <br></br>
            <br></br>
            I am a recent bootcamp graduate with certificate in Full Stack Web Development from the University of Toronto.
            I am excited about crafting innovative features & functionality and am most excited to contribute to API Development. 
            More importantly, I hope to be a contributing member of #WomenwhoCode and learn from those who came before me!
            <br></br>
            <br></br>
            My resume is available to download, and includes my contact information.
            I look forward to getting in touch with you!
            </p>
            </div>
        </section>

    )
}

export default About;