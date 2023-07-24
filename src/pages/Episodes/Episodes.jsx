import React, { useEffect, useState } from 'react'
import './Episodes.css'
import axios from 'axios'

function Episodes() {

    // when I select an episode, I want to see the chars within same
    // https://rickandmortyapi.com/api/episode
    // I need to create the UI, how many eps when page loads?
    useEffect(
        () => {
            //make api call to find out # of eps
            axios.get(`https://rickandmortyapi.com/api/episode`)
                .then(res => {
                    console.log(res.data.info.count)
                    // create an array of numbers from 1 to this value
                    const newOptions = [];
                    for (let i = 1; i <= res.data.info.count; i++) {
                        newOptions.push(i)
                    }
                    const [newOptions, setOptions] = useState([])
                    console.log(newOptions)
                    setOptions(newOptions)
                })
                .catch(err => console.log(err))
        }
    )


    return (
        <div className="episodes-container">
            <div>
                <label htmlFor="select-episode">Select an episode</label>
                <select id="select-episode">

                    {
                        options.map(num => <option>{`Episode ${num}`}</option>)
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