import React, { useState, useEffect } from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'
import SearchForm from './components/SearchForm'

function App() {

  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

  const [query, setQuery] = useState('')
  const [data, setData] = useState([])

  return (
    <Container>
      <Header as='h1' style={{padding: '1rem'}}>Flix Noms</Header>
      <SearchForm />
    </Container>
  );
}

export default App;
