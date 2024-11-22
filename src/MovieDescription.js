import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { id } = useParams(); // Récupérer l'ID du film depuis l'URL
  const movie = movies.find((movie) => movie.id === parseInt(id)); // Trouver le film correspondant

  if (!movie) {
    return <h2>Film introuvable</h2>;
  }

  return (
    <div className="movie-description">
      <h2>{movie.title}</h2>
      <img src={movie.posterURL} alt={movie.title} />
      <p>{movie.description}</p>
      <p>Note : {movie.rating} / 10</p>
      <iframe src={movie.videoURL} title={movie.title}></iframe>
      {/* Lien pour retourner à la page d'accueil */}
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
};

export default MovieDescription;
