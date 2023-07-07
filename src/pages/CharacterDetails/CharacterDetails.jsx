import React from 'react'
import './CharacterDetails.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function CharacterDetails() {

    // this page shows details of a specific character
    // what character ?
    // the id is in the url
    // get the parameter

    const { characterId } = useParams()

    // create state to hold data from api
    const [character, setCharacter] = React.useState('')


    // I want to see character details when page loads
    // https://rickandmortyapi.com/api/character/2

    React.useEffect(
        () => {
            //make api call to get the data
            axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
                .then(res => {
                    console.log(res.data)
                    // I have the data, what do I do with it?
                    // store it in state
                    setCharacter(res.data)
                })
                .catch(err => console.log(err))

        }, [] // dependency array
    )

    return (
        <div className="details-container">
            <img src={character?.image} />
            <div className="container-info">
                <p>Name: {character?.name}</p>
                <p>Gender: {character?.gender}</p>
                <p>Location: {character?.location?.name}</p>
                <p>Species: {character?.species}</p>
            </div>


        </div>
    )
}

export default CharacterDetails