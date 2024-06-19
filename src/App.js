import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import MovieList from './components/MovieList';
import LoadingSpinner from './components/LoadingSpinner';
import { Container } from 'react-bootstrap';

// API URL to fetch popular movies from TMDB
const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=e7302e09244b40ccd8f190889d0f45d8";

function App() {
  // State to store movies data
  const [movies, setMovies] = useState([]);
  // State to store the search query input by the user
  const [query, setQuery] = useState("");
  // State to store the debounced query for API calls
  const [debouncedQuery, setDebouncedQuery] = useState("");
  // State to handle the loading status
  const [loading, setLoading] = useState(true);

  // useEffect to fetch popular movies when the component mounts
  useEffect(() => {
    fetchMovies(API_URL);
  }, []);

  // useEffect to debounce the query input to avoid excessive API calls
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500); // debounce delay as needed

    return () => {
      clearTimeout(timerId);
    };
  }, [query]);

  // useEffect to trigger the movie search whenever the debounced query changes
  useEffect(() => {
    if (debouncedQuery) {
      searchMovie(debouncedQuery);
    }
  }, [debouncedQuery]);

  // Function to fetch movies from the given API URL
  const fetchMovies = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      // Filter out movies with missing essential data
      const filteredData = data.results.filter(movie => movie.title && movie.poster_path && movie.overview);
      setMovies(filteredData);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  // Function to search for movies based on the query
  const searchMovie = async (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=e7302e09244b40ccd8f190889d0f45d8&query=${query}`;
    fetchMovies(url);
  };

  // Function to handle changes in the search input field
  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      {/* Navbar Component with search functionality */}
      <NavbarComponent query={query} changeHandler={changeHandler} searchMovie={searchMovie} />
      
      {/* Container for movie list and loading spinner */}
      <Container className="mt-4">
        {loading ? (
          // Show loading spinner while fetching data
          <LoadingSpinner />
        ) : (
          // Show movie list once data is fetched
          <MovieList movies={movies} />
        )}
      </Container>
    </>
  );
}

export default App;
