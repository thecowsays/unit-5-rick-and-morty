import React, { useEffect, useState } from 'react'
import './Homepage.css'
import axios from 'axios'
import CharacterCard from '../../components/CharacterCard/CharacterCard'

function Homepage() {

    // Show the characters when the page loads
    // Create state to hold the characters
    const [characters, setCharacters] = useState([])

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
        <div className="homepage-container">
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