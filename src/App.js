import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieList from './MovieList';
import Filter from './Filter';
import MovieForm from './MoviefFrom'; // Ensure MovieForm is imported correctly
import MovieDescription from './MovieDescription'; // Nouveau composant pour les descriptions
import './App.css';

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'The school for good and evil',
      description: 'A fantasy adventure based on the book series...',
      posterURL: "https://cdn.webshopapp.com/shops/70489/files/416034765/600x600x3/image.jpg",
      rating: 8.5,
      videoURL: 'https://www.youtube.com/embed/aftysDQ4hpI?si=1lrlrLVESWWOfH8P',
    },
    {
      id: 2,
      title: 'Maleficent',
      description: 'As a child she was a good-hearted protector to the Moors...',
      posterURL: "https://lumiere-a.akamaihd.net/v1/images/p_maleficentmistressofevil_payoff-18191_8c0c935b.jpeg",
      rating: 6.9,
      videoURL: 'https://www.youtube.com/embed/jgdtHDXJWm8?si=EiOhTnz0gjKHKv5t',
    },
    {
      id: 3,
      title: 'One Shte',
      description: "An action-packed thriller about a Navy SEAL team...",
      posterURL: "https://fr.web.img3.acsta.net/pictures/21/08/05/18/01/5652597.jpg",
      rating: 8.0,
      
      videoURL: 'https://www.youtube.com/embed/rwF7kTQKXDk?si=ItgTtueiOtDgBlnz',
    },
    {
      id: 4,
      title: 'Viking',
      description: 'This historical drama follows the epic and brutal life of a Viking warrior...',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9DHgDHC3bPBznNQYIY-77U4KKGZ-VCpDqEg&s',
      rating: 8.0,
      
      videoURL: 'https://www.youtube.com/embed/9GgxinPwAGc?si=k1Odjcxh7hX9134j',
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleAddMovie = (newMovie) => {
    const updatedMovies = [...movies, { id: Date.now(), ...newMovie }];
    setMovies(updatedMovies);
    setFilteredMovies(updatedMovies);
  };

  const handleFilterChange = (title, rating) => {
    const filtered = movies.filter((movie) => {
      const matchesTitle = movie.title.toLowerCase().includes(title.toLowerCase());
      const matchesRating = rating ? movie.rating >= parseFloat(rating) : true;
      return matchesTitle && matchesRating;
    });
    setFilteredMovies(filtered);
  };

  return (
    <Router>
      <div className="App">
        <h1>Ma Collection de Films</h1>
        {/* Lien vers la page d'accueil */}
        <Link to="/">Accueil</Link>
        <Routes>
          {/* Route de la page d'accueil */}
          <Route
            path="/"
            element={
              <>
                <Filter onFilterChange={handleFilterChange} />
                <MovieForm onAddMovie={handleAddMovie} />
                <MovieList movies={filteredMovies} />
              </>
            }
          />
          {/* Route pour la description d'un film */}
          <Route
            path="/movie/:id"
            element={<MovieDescription movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
