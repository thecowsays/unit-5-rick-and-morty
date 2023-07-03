import React from 'react'
import './Search.css'
import { useState } from 'react'
import axios from 'axios'

function Search({ setCharacters }) {
    // Where does my data come from ?
    // https ://rickandmortyapi.com/api/character/?name=beth
    // What is the data ?
    //     an array of objects

    const [query, setQuery] = useState('')

    const handleSubmit = (e) => {
        // stop form from rerendering page, caused by onSubmit
        e.preventDefault()
        // console.log("Search:", query)
        // make an API call to get the matching characters
        axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
            .then(res => {
                console.log(res.data.results)
                // I have the data, what do I do with it?
                // I want to change what is in characters
                setCharacters(res.data.results)
            })
            .catch(err => {
                console.log(err.response.status)
                if (err.response.status === 404) {
                    alert(`No characters named ${query}`)
                }
                    else {
                    console.log(err)
                }
            })
        // clear the textbox
        setQuery('')
}

    return (
        <form className="search-container" onSubmit={handleSubmit}>
            <input type="text" placeholder="Search all characters"
                onChange={(e) => setQuery(e.target.value)} value={query} />
        </form>
    )
}

export default Search