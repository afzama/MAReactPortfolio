import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'
import Resume from './components/Resume'
import BoardGameCafe from './assets/Boardgamecafe.png'
import GeekyMovieWizard from './assets/GeekyMovieWizard.jpeg'
import PictionarEH from './assets/Pictionar-EH.png'


function App() {
  const [activeSection, setActiveSection] = useState('about');
  const projects = [
    {
      imgSrc: GeekyMovieWizard,
      deployedLink: 'https://ryanpersaud03.github.io/geekymoviewizard/',
      heading: 'Geeky Movie Wizard',
      githubLink: 'https://github.com/RyanPersaud03/geekymoviewizard',
      techs: 'HTML, CSS, Javascript, IMDB Web API'
    },
    {
      imgSrc: BoardGameCafe,
      deployedLink: 'https://boardgame-cafe-1166881584c8.herokuapp.com/profile',
      heading: 'Board Game Cafe',
      githubLink: 'https://github.com/r-basu/boardgame-cafe',
      techs: 'Express, MySQL, Sequelize, Handlebars'
    },
    {
      imgSrc: PictionarEH,
      deployedLink: 'https://pictionar-eh.netlify.app/',
      heading: 'Pictionar-eh!',
      githubLink: 'https://github.com/LoganLagrange/pictionar-eh',
      techs: 'Socket.io, React, Sequelize, Express, Bcrypt, MySQL, CORS'
    }

]

  return (
    <>
    <Header setActiveSection={setActiveSection} />
    {activeSection === 'about' && <About />}
    {activeSection === 'portfolio' && 
    <div className='portfolio-div'>
        {projects.map((project, index) => {
            console.log(project);
            return <Project key={index} project={project} />
        })}
    </div>
    }
    {activeSection === 'contact' && <Contact/>}
    {activeSection === 'resume' && <Resume />}
    <Footer />
    </>
  )
}

export default App
