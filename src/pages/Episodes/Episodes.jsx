import React, { useEffect, useState } from 'react'
import './Episodes.css'
import axios from 'axios'

function Episodes() {

    // when I select an episode, I want to see the chars within same
    // https://rickandmortyapi.com/api/episode
    // I need to create the UI, how many eps when page loads?

    // create state to hold the new array
    const [options, setOptions] = useState([])
    // create state for option selected by user
    const [selectedOption, setSelectedOption] = useState(1)

    useEffect(
        () => {
            //make api call to find out # of eps
            axios.get(`https://rickandmortyapi.com/api/episode`)
                .then(res => {
                    // console.log(res.data.info.count)
                    // create an array of numbers from 1 to this value
                        // so you can use .push
                    const newOptions = [];
                    for (let i = 1; i <= res.data.info.count; i++) {
                        newOptions.push(i)
                    }
                    // console.log(newOptions)
                    setOptions(newOptions)
                })
                .catch(err => console.log(err))
        }, [] // run once, dependency array
    )

    const handleSelectEpisode = (e) => {
        // console.log('select episode')
        // console.log(e.target.value)
        setSelectedOption(e.target.value)
    }

    return (
        <div className="episodes-container">
            <div>
                <label htmlFor="select-episode">Select an episode: </label>
                <select id="select-episode" onChange={handleSelectEpisode}>

                    {
                        options.map(num => <option key={num} value={num}>{`Episode ${num}`}</option>)
                    }

                </select>
                <div>
                    Episode data goes here
                </div>
            </div>
        </div>
    )
}

export default Episodes