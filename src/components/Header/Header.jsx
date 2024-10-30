import { useState } from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

function Header() {
    const [darkMode, setDarkMode]=useState(false)

    const handleClick=()=>{
        setDarkMode(!darkMode)
    }
    
    return (
        <header>
            <nav>
                {/* Primera forma */}
                {/* <Link to="/">Home</Link>
                <Link to="/characters">Personajes</Link> */}
                {/* Segunda forma */}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/characters">Personajes</NavLink>
            </nav>
            <button onClick={handleClick} className={!darkMode ? 'darkMode': 'lightMode'}>
                {!darkMode ? 'Dark Mode': 'Light Mode'}
            </button>
        </header>
    )
}

export default Header