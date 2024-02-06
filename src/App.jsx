import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'
import Resume from './components/Resume'
import BoardGameCafe from './assets/BoardGameCafe'
import GeekyMovieWizard from './GeekyMovieWizard'

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const projects = [
    {
        imgSrc: BoardGameCafe,
        deployedLink: 'https://boardgame-cafe-1166881584c8.herokuapp.com',
        heading: 'BoardGameCafe',
        githubLink: 'https://github.com/r-basu/boardgame-cafe',
        techs: 'Express, MySQL, Sequelize, Handlebars'
    },
    {
      imgSrc: GeekyMovieWizard,
      deployedLink: 'https://ryanpersaud03.github.io/geekymoviewizard/',
      heading: 'GeekyMovieWizard',
      githubLink: 'https://github.com/RyanPersaud03/geekymoviewizard',
      techs: 'HTML, Javascript, CSS'
  },

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
