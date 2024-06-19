import { useEffect, useState } from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Container, Form, FormControl, Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=e7302e09244b40ccd8f190889d0f45d8";

function App() {

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
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

  const searchMovie = async(query) => {
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=e7302e09244b40ccd8f190889d0f45d8&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Navbar bg='dark' expand='lg' variant='dark'>
        <Container fluid>
          <NavbarBrand href='/home'>MovieDb App</NavbarBrand>
          <NavbarBrand href='/home'>Trending</NavbarBrand>
          <NavbarToggle aria-controls='navbarScroll'></NavbarToggle>
          <NavbarCollapse id='navbarScroll'>
            <Nav className='me-auto my-2 my-lg-3' style={{ maxHeight: '100px' }} navbarScroll></Nav>
            <Form className='d-flex'>
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
      <div>
        {movies.length > 0 ? (
          <div className="container">
            <div className="grid">
              {movies.map((movieReq) => <MovieBox key={movieReq.id} {...movieReq} />)}
            </div>
          </div>
        ) : (<h2>Sorry !! No Movies Found</h2>)}
      </div>
    </>
  );
}

export default App;
