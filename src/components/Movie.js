import React from 'react'

const Movie = props => {

    const { Title, Year } = props.movie

    return (
        <p>{Title} ({Year})</p>
    )
}

export default Movie