import "./MovieCard.css";
import ProgressBar from "../atoms/ProgressBar";

/*Recibe la info de las peliculas con progress opcional por si acaso es null*/
function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={movie.image}
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