import React from 'react'
import './style.css'
import NavBar from '../Navbar'

function Header({setActiveSection}) {

    return (
        <header>
            {/* <img src={profilePic} alt="Profile Picture" /> */}
            <h1>Maria Afzal</h1>
            <NavBar setActiveSection={setActiveSection} />
        </header>
    )
}


export default Header;