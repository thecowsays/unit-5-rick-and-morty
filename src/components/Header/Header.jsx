import React from 'react'
import './Header.css'

function Header() {
    // create variable to control darkMode
    // const darkMode = false;

    // create state to control darkMode
    const [darkMode, setDarkMode] = React.useState(false)

    return (
        <div className={darkMode ? "header-container header-dark" : "header-container"}>
            <div>
                <a href="/" style={{ marginRight: "10px" }}>Home</a>
                <a href="/about" style={{ marginRight: "10px" }}>About</a>
                <a href="/episodes">Episodes</a>
            </div>
            <button className={darkMode ? "theme-button theme-button-dark" : "theme-button"}
                onClick={() => setDarkMode(!darkMode)}>
                {
                    darkMode ? "Light Mode" : "Dark Mode"
                }
            </button>
        </div>
    )
}

export default Header