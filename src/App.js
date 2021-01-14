import React, { useState, useEffect } from 'react'
import { Container, Header } from 'semantic-ui-react'
import axios from 'axios'
import SearchForm from './components/SearchForm'

function App() {

  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

  const [query, setQuery] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    searchMovies(query)
  }, [query])

  const doSearch = input => setQuery(input)

  const searchMovies = async(input) => {
    if(input){
      try {
        let response = await axios.get(`http://www.omdbapi.com/?&apikey=${API_KEY}&type=movie&s=${input}`)
        setData(response.data)
        console.log(input, response.data)
        console.log(data)
      } catch(error) {
        console.error('Error fetching and parsing data', error)
      }
    }
  }

  return (
    <Container>
      <Header as='h1' style={{padding: '1rem'}}>Flix Noms</Header>
      <SearchForm doSearch={doSearch}/>
    </Container>
  );
}

export default App;
