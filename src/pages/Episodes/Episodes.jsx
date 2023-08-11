import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CharacterCard from './../../components/CharacterCard/CharacterCard';

import './Episodes.css'

function Episodes() {

    // when I select an episode, I want to see the chars within same
    // https://rickandmortyapi.com/api/episode
    // I need to create the UI, how many eps when page loads?

    // create state to hold the new array
    const [options, setOptions] = useState([])
    // create state for option selected by user
    const [selectedOption, setSelectedOption] = useState(1)
    // state for data from this episode
    const [selectedEpisode, setSelectedEpisode] = useState('')
    // state for the characters
    const [characterList, setCharacterList] = useState([])


    useEffect(
        () => {
            //make api call to find out # of eps
            axios.get(`https://rickandmortyapi.com/api/episode`)
                .then(res => {
                    // console.log(res.data.info.count)
                    // create an array of numbers from 1 to this value
                        // so you can use .push
                    const newOptions = [];
                    for (let i = 1; i <= res?.data?.info?.count; i++) {
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

    // need to get data each time a user selects episode
    useEffect(() => {
        // console.log("get data for selected episode", selectedOption)
        // call function to get data
        fetchEpisodeData()
        //   return () => {
        //     second
        //   }
    }, [selectedOption]) // runs anytime this value changes

    const fetchEpisodeData = async () => {
        // console.log('make api calls');
        try {
            // make api call to get data for this episode
            const res = await axios.get(`https://rickandmortyapi.com/api/episode/${selectedOption}`)
            // console.log(res.data);
            setSelectedEpisode(res?.data)
            // console.log(res.data.characters);
            // we need to make all these API calls to get char data
            const episodeCharacters = await Promise.all(
                res.data.characters.map(url => {
                    return axios.get(url)
                        .then(res => res.data)
                })
            )
            // console.log(episodeCharacters);
            setCharacterList(episodeCharacters)

        } catch (err) {
            // any errors from api calls will go here
            console.log(err);
        }
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
            </div>
            <div>
                <div className="episode-info">
                    <p>Episode Name: {selectedEpisode.name}</p>
                    <p>Air Date: {selectedEpisode.air_date}</p>
                </div>
                <div className="character-container">
                    {
                        characterList?.map(item => <CharacterCard key={item.id} character={item} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Episodes