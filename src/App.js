import React, { useState, useEffect } from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'
import axios from 'axios'
import SearchForm from './components/SearchForm'
import Movies from './components/Movies'

function App() {

  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

  const [data, setData] = useState([])

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

  return (
    <Container>
      <Header as='h1' style={{padding: '1rem'}}>Flix Noms</Header>
      <SearchForm doSearch={doSearch}/>
      <Movies movies={data}/>
    </Container>
  )
}

export default App;
