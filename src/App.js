import { Container, Grid, Header } from 'semantic-ui-react'

function App() {

  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

  return (
    <Container>
      <Header as='h1' style={{padding: '1rem'}}>Flix Noms</Header>
    </Container>
  );
}

export default App;
