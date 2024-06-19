import React from 'react';
import { Row } from 'react-bootstrap';
import MovieBox from './MovieBox';

/**
 * MovieList Component
 * This component is responsible for rendering a list of movies.
 * It takes an array of movie objects as a prop and maps over it to create MovieBox components.
 * If no movies are found, it displays a message.
 * 
 * @param {Array} movies - An array of movie objects to be displayed.
 * @returns {JSX.Element} The rendered component.
 */
const MovieList = ({ movies }) => {
  return (
    <Row>
      {/* Check if there are movies to display */}
      {movies.length > 0 ? (
        // Map over the movies array and render a MovieBox for each movie
        movies.map((movieReq) => <MovieBox key={movieReq.id} {...movieReq} />)
      ) : (
        // Display a message if no movies are found
        <h2>Sorry !! No Movies Found</h2>
      )}
    </Row>
  );
};

export default MovieList;