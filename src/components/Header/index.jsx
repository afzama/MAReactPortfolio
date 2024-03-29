import React from 'react'
import './style.css'
import NavBar from '../Navbar'

function Header({setActiveSection}) {

    return (
        <header>
            <h1>Maria Afzal</h1>
            <NavBar setActiveSection={setActiveSection} />
        </header>
    )
}


export default Header;