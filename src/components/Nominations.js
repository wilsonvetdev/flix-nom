import React from 'react'
import { List } from 'semantic-ui-react'
import NominatedMovie from './NominatedMovie'

const Nominations = props => {

    const movies = props.nominatedMovies.map(movie => {
        return (
            <List.Item key={movie.imdbID}>
                <NominatedMovie
                    movie={movie}
                    removeNomination={props.removeNomination}
                />
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