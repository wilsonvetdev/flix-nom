import React, { useState } from 'react'
import { List, Button } from 'semantic-ui-react'

const Nominations = props => {

    const [ clicked, setClick ] = useState(false)

    const handleClick = (event) => {
        setClick(true)
    }

    const movies = props.nominatedMovies.map(movie => {
        return (
            <List.Item key={movie.imdbID}>
                <p>
                    {movie.Title} ({movie.Year})
                    <Button disabled={clicked} floated='right' size='tiny' onClick={handleClick}>
                        Remove
                    </Button> 
                </p>
            </List.Item>
        )
    })

    return (
        <>
            <h1>Nominations</h1>
            <List divided verticalAlign='middle'>
                    {movies}
            </List>
        </>
    )
}

export default Nominations