import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

const Movie = props => {

    const { Title, Year } = props.movie
    const [ clicked, setClick ] = useState(false)

    const handleClick = (event) => {
        setClick(true)
        props.getNomination(props.movie)
    }

    return (
        <>
            <p>
                {Title} ({Year}) 
                <Button disabled={clicked} floated='right' size='tiny' onClick={handleClick}>
                    Nominate
                </Button> 
            </p>
        </>
    )
}

export default Movie