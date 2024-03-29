import { Container, Grid, Typography } from '@mui/material';
import Form from './components/Form';
import NewsList from './components/NewsList';
import { NewsProvider } from './context/NewsProvider';

function App() {
  

    return (
      <NewsProvider>
        <Container>
            <header>
                <Typography 
                    align='center'
                    marginY={5}
                    component='h1'
                    variant='h3'
                >
                    News Search Engine
                </Typography>
            </header>

            <Grid
                container
                direction='row'
                justifyContent='center'
                alignItems='center'
            >
                <Grid
                    item
                    md={6}
                    xs={12}
                    lg={4}
                >
                    <Form />
                </Grid>
            </Grid>
            <NewsList />
        </Container>
      </NewsProvider>
    )
}

export default App
