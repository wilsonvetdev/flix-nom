import React from 'react'
import { Button } from 'semantic-ui-react'

const Movie = props => {

    const { Title, Year } = props.movie

    const handleClick = (event) => {
        props.getNomination(props.movie)
    }

    return (
        <>
            <p>
                {Title} ({Year}) 
                <Button floated='right' size='tiny' onClick={handleClick}>
                    Nominate
                </Button> 
            </p>
        </>
    )
}

export default Movie