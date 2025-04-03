import React from "react";
import "../styles.css";

const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="movie-card" onClick={onClick}>
      <img src={movie.image} alt={movie.title} className="movie-image" />
      <div className="overlay">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
      </div>
    </div>
  );
};

export default MovieCard;