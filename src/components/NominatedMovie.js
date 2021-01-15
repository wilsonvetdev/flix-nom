import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

const NominatedMovie = props => {

    const { Title, Year } = props.movie
    const [ clicked, setClick ] = useState(false)

    const handleClick = (event) => {
        props.removeNomination(props.movie.imdbID)
        setClick(true)
    }

    return (
        <>
            <p>
                {Title} ({Year})
                <Button disabled={clicked} floated='right' size='tiny' onClick={handleClick}>
                    Remove
                </Button> 
            </p>
        </>
    )

}

export default NominatedMovie