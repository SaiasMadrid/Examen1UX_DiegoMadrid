import "./MovieCard.css";
import ProgressBar from "../atoms/ProgressBar";

/* recibe movie de parametro que le da toda la info 
necesaria para mostrar la peli en la tarjeta */
function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={movie.image}
        alt={movie.title}
        className="movie-card__image"
      />
      <div className="movie-card__overlay">
        {movie.progress && <ProgressBar progress={movie.progress} />}
      </div>
    </div>
  );
}

export default MovieCard;