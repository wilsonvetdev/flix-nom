import React from 'react'
import { Button } from 'semantic-ui-react'

const NominatedMovie = props => {

    const { Title, Year } = props.movie

    const handleClick = (event) => {
        props.removeNomination(props.movie.imdbID)
    }

    return (
        <>
            <p>
                {Title} ({Year})
                <Button floated='right' size='tiny' onClick={handleClick}>
                    Remove
                </Button> 
            </p>
        </>
    )

}

export default NominatedMovie