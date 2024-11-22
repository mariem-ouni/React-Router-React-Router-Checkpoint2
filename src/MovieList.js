import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <h3>{movie.title}</h3>
          <img src={movie.posterURL} alt={movie.title} />
          <p>Note : {movie.rating} / 10</p>
          {/* Lien vers la page de description */}
          <Link to={`/movie/${movie.id}`}>Voir la description</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
