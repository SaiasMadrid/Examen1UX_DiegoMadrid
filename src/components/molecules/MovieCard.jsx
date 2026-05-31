import "./MovieCard.css";
import ProgressBar from "../atoms/ProgressBar";
import { useState } from "react";

/*Recibe la info de las peliculas con progress opcional por si acaso es null*/
function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="movie-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered && movie.gif ? movie.gif : movie.image}
        alt={movie.title}
        className="movie-card__image"
      />

      <div className="movie-card__overlay">
        <p className="movie-card__title">{movie.title}</p>
        {movie.progress && <ProgressBar progress={movie.progress} />}
      </div>
    </div>
  );
}

export default MovieCard;