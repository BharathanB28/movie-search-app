import { useEffect, useState } from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle, Row, Spinner } from 'react-bootstrap';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=e7302e09244b40ccd8f190889d0f45d8";

function App() {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMovies(API_URL);
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // Adjust the debounce delay as needed

    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  useEffect(() => {
    if (debouncedQuery) {
      searchMovie(debouncedQuery);
    }
  }, [debouncedQuery]);

  const fetchMovies = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      const filteredData = data.results.filter(movie => movie.title && movie.poster_path && movie.overview);
      setMovies(filteredData);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const searchMovie = async (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=e7302e09244b40ccd8f190889d0f45d8&query=${query}`;
    fetchMovies(url);
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Navbar bg='dark' expand='lg' variant='dark'>
        <Container fluid>
          <NavbarBrand href='/home'>Movie Search App</NavbarBrand>
          <NavbarToggle aria-controls='navbarScroll'></NavbarToggle>
          <NavbarCollapse id='navbarScroll'>
            <Nav className='me-auto my-2 my-lg-3' style={{ maxHeight: '100px' }} navbarScroll></Nav>
            <Form className='d-flex' autoComplete='off'>
              <FormControl
                type='search'
                placeholder='Movie Search'
                className='me-2'
                aria-label='search'
                name='query'
                value={query}
                onChange={changeHandler}
              />
              <Button variant='secondary' type='button' onClick={() => searchMovie(query)}>Search</Button>
            </Form>
          </NavbarCollapse>
        </Container>
      </Navbar>
      <Container className="mt-4">
        {loading ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="secondary" />
          </div>
        ) : (
          <Row>
            {movies.length > 0 ? (
              movies.map((movieReq) => <MovieBox key={movieReq.id} {...movieReq} />)
            ) : (
              <h2>Sorry !! No Movies Found</h2>
            )}
          </Row>
        )}
      </Container>
    </>
  );
}

export default App;
