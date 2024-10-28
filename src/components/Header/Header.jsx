import { useState } from "react"
import "./Header.css"

function Header() {
    const [darkMode, setDarkMode]=useState(false)

    const handleClick=()=>{
        setDarkMode(!darkMode)
    }
    
    return (
        <header>
            <button onClick={handleClick} className={!darkMode ? 'darkMode': 'lightMode'}>
                {!darkMode ? 'Dark Mode': 'Light Mode'}
            </button>
        </header>
    )
}

export default Header