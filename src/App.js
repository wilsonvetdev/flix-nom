import React, { useState } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import axios from 'axios'
import SearchForm from './components/SearchForm'
import Movies from './components/Movies'
import Nominations from './components/Nominations'

function App() {

  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

  const [ data, setData ] = useState([])
  const [ nominatedMovies, setNomination ] = useState([])

  const doSearch = async(input) => {
    if(input){
      try {
        let response = await axios.get(`http://www.omdbapi.com/?&apikey=${API_KEY}&type=movie&s=${input}`)
        setData(response.data)
      } catch(error) {
        console.error('Error fetching and parsing data', error)
      }
    }
  }

  const isMovieInNomination = movieObj => {
    let result = nominatedMovies.find(movie => {
      return movie.imdbID === movieObj.imdbID
    })

    return result
  }

  const getNomination = (movieObj) => {
    if(!isMovieInNomination(movieObj)) {
      setNomination([...nominatedMovies, movieObj])
    }
  }

  const removeNomination = (movieObjID) => {
    let filteredNominations = nominatedMovies.filter(movie => {
      return movie.imdbID !== movieObjID
    })

    setNomination(filteredNominations)
  }

  return (
    <Container textAlign='center' style={{marginTop: '5rem'}}>

      <h1>Flix Noms</h1>

      <SearchForm doSearch={doSearch} />

      <Grid columns={2} divided stackable>

        <Grid.Row>
          <Grid.Column>
            <Movies movies={data} getNomination={getNomination} />
          </Grid.Column>

          <Grid.Column>
            <Nominations nominatedMovies={nominatedMovies} removeNomination={removeNomination} />
          </Grid.Column>
        </Grid.Row>

      </Grid>

    </Container>
  )
}

export default App;
