import React, { useEffect, useState } from 'react'
import { Container, Grid } from 'semantic-ui-react'
import axios from 'axios'
import SearchForm from './components/SearchForm'
import Movies from './components/Movies'
import Nominations from './components/Nominations'
import Banner from './components/Banner'

function App() {

  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

  const [ data, setData ] = useState([])
  const [ nominatedMovies, setNomination ] = useState([])

  useEffect(() => {
    const json = localStorage.getItem('nominations')
    const savedNominations = JSON.parse(json)
    if(savedNominations) {
      setNomination(savedNominations)
    }
  }, [])

  useEffect(() => {
    const json = JSON.stringify(nominatedMovies)
    localStorage.setItem('nominations', json)
  }, [nominatedMovies])

  const doSearch = async(input) => {
    if(input){
      try {
        let response = await axios.get(`https://www.omdbapi.com/?&apikey=${API_KEY}&type=movie&s=${input}`)
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

    return result !== undefined ? true : false
  }

  const getNomination = (movieObj) => {
    if(!isMovieInNomination(movieObj) && nominatedMovies.length < 5) {
      setNomination([...nominatedMovies, movieObj])
    }
  }

  const removeNomination = (movieObj) => {
    let filteredNominations = nominatedMovies.filter(movie => {
      return movie.imdbID !== movieObj.imdbID
    })

    setNomination(filteredNominations)
  }

  return (
    <Container textAlign='center' style={{marginTop: '5rem'}}>

      <h1>Flix Noms 
        <a href='https://github.com/wilsonvetdev' target='_blank' rel='noreferrer'> By Wilson</a>
        -
        <a href='https://github.com/wilsonvetdev/flix-nom' target='_blank' rel='noreferrer'>GitHub Repo</a>
      </h1>

      <SearchForm doSearch={doSearch} />

      { nominatedMovies.length === 5 ? <Banner /> : null }

      <Grid columns={2} divided stackable>

        <Grid.Row>
          <Grid.Column>
            <Movies 
              movies={data} 
              getNomination={getNomination} 
              isMovieInNomination={isMovieInNomination}
            />
          </Grid.Column>

          <Grid.Column>
            <Nominations 
              nominatedMovies={nominatedMovies} 
              removeNomination={removeNomination}
            />
          </Grid.Column>
        </Grid.Row>

      </Grid>

    </Container>
  )
}

export default App;
