import React, { useContext, useEffect, useState } from 'react'
import './Homepage.css'
import axios from 'axios'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import Search from '../../components/Search/Search'
import { ThemeContext } from '../../contexts/ThemeContext'

function Homepage() {

    // Show the characters when the page loads
    // Create state to hold the characters
    const [characters, setCharacters] = useState([])

    // Change to use global state from context
    //NOTE: {} NOT []
    const { darkMode, setDarkMode } = useContext(ThemeContext)

    useEffect(
        () => {
            console.log("homepage loaded")
            // make api call to get data (axios)
            axios.get(`https://rickandmortyapi.com/api/character`)
                .then(res => {
                    console.log(res.data.results)
                    // I have the data, what do I do with it?
                    // Store it in state!
                    setCharacters(res.data.results)
                })
                .catch(err => console.log(err))
        }, [] // runs once only when page loads
    )
    // Where do I get the data?

    return (
        <div className={darkMode ? "home-container home-dark" : "home-container"}>
            <Search setCharacters={setCharacters} />
            <h1>Main Characters</h1>
            <div className="characters-container">
                {
                    characters.map(item => <CharacterCard key={item.id} character={item} />)
                    // characters.map(item => <p>{item.name}</p>)
                }
            </div>
        </div>
    )
}

export default Homepage