import React from 'react'
import Movie from './Movie'
import { List } from 'semantic-ui-react'

const Movies = props => {
    const movieResults = props.movies.Search
    const response = props.movies.Response
    
    let movies;
    
    if(response === 'True') {
        movies = movieResults.map(movie => {
            return (
                    <List.Item key={movie.imdbID}>
                        <Movie movie={movie} />
                    </List.Item>
            )
        })
    }

    return (
        <div>
            <h1>Movie Results</h1>
            <List divided verticalAlign='middle'>
                {movies}
            </List>
        </div>
    )
}

export default Movies