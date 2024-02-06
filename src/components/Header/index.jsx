import React from 'react'
import './style.css'
import NavBar from '../Navbar'
// import profilePic from '../../assets/PXL_20240111_025422342-cropped.jpg'

function Header({setActiveSection}) {

    return (
        <header>
            <h1>Maria Afzal</h1>
            <NavBar setActiveSection={setActiveSection} />
        </header>
    )
}


export default Header;