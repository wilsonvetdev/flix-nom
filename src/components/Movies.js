import React from 'react'
import Movie from './Movie'

const Movies = props => {
    const movieResults = props.movies.Search
    const response = props.movies.Response
    
    let movies;
    if(response === 'True') {
        movies = movieResults.map(movie => {
            return (
                    <li key={movie.imdbID}>
                        <Movie movie={movie} />
                    </li>
            )
        })
    }

    return (
        <div>
            <h1>Movie Results</h1>
            <ul>
                {movies}
            </ul>
        </div>
    )
}

export default Movies