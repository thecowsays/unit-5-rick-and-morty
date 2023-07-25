import { useState, createContext, useEffect } from 'react'

// create context
export const ThemeContext = createContext()

export default function ThemeContextProvider(props) {
    // create the global state
    const [darkMode, setDarkMode] = useState(false)
    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {props.children}
        </ThemeContext.Provider>
    )
}