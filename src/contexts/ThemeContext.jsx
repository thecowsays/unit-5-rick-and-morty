import { useState, createContext, useEffect } from 'react'

// create context
export const ThemeContext = createContext()

export default function ThemeContextProvider(props) {
    // create the global state
    const [darkMode, setDarkMode] = useState(false)

    // Local storage code

    useEffect(
        () => {
            // check when page loads
            const storedDarkMode = localStorage.getItem('darkMode')
            // if there was a stored value
            if (storedDarkMode) {
                setDarkMode(JSON.parse(storedDarkMode))
            }
        }, []
    )

    useEffect(
        () => {
            // Save current state to localStorage
            localStorage.setItem('darkMode', JSON.stringify(darkMode))
        }, [darkMode] // runs when darkMode is changed
    )


    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {props.children}
        </ThemeContext.Provider>
    )
}