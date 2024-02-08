import React from 'react';
import './style.css'

function NavBar({setActiveSection}) {
    const handleClick = (e, section) => {
        e.preventDefault();
        console.log(`Clicked on ${section}`);
        setActiveSection(section);
      };
    return (
        <nav>
            <a className="navbar-link" onClick={(e)=>handleClick(e, 'about')}>About Me</a>
            <a className="navbar-link" onClick={(e)=>handleClick(e, 'portfolio')}>Portfolio</a>
            <a className="navbar-link" onClick={(e)=>handleClick(e, 'contact')}>Contact</a>
            <a className="navbar-link" onClick={(e)=>handleClick(e, 'resume')}>Resume</a>
        </nav>

    )
}

export default NavBar;