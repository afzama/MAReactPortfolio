import React from 'react'
import './style.css'

export default function Resume() {
  return (
    <div className='resume-div'>
        <h2>Resume</h2>
        <a href="https://drive.google.com/file/d/1YGTTGSy6MIKjI6ixpdtgRs3E8Gokj0EU/view?usp=sharing" download='LoganLagrangeResume.pdf'>Download my resume</a>
        <h2>Proficiencies</h2>
        <ul>
          <h3>Languages</h3>
            <li>Javascript ES6+</li>
            <li>CSS3</li>
            <li>HTML5</li>
            <li>SQL, MySQL</li>
            <li>NoSQL, MongoDB</li>
            <li>Node.js, Express.js</li>
            <li>Handlebars, jQuery</li>
            <li>React</li>
            <li>CSS frameworks: Bootstrap, Bulma, Materialize</li>
          <h3>Applications</h3>
            <li>VS Code</li>
            <li>GitHub and git workflow</li>
            <li>Socket.io</li>
            <li>Heroku,Netlify,GitHub Pages</li>
            <li>Insomnia</li>
            <li>MongoDB Compass</li>
            <li>GitLab</li>
        </ul>
    </div>
  )
}
