import "./ContentRow.css";
import MovieCard from "../molecules/MovieCard";

function ContentRow({ category }) {
  const movie0 = category.movies[0];
  const movie1 = category.movies[1];
  const movie2 = category.movies[2];
  const movie3 = category.movies[3];
  const movie4 = category.movies[4];
  const movie5 = category.movies[5];
  const movie6 = category.movies[6];
  const movie7 = category.movies[7];
  const movie8 = category.movies[8];
  const movie9 = category.movies[9];
  const movie10 = category.movies[10];
  const movie11 = category.movies[11];

  return (
    <div className="content-row">
      <h2 className="content-row__title">{category.title}</h2>
      <div className="content-row__slider">
        {movie0 && <MovieCard movie={movie0} />}
        {movie1 && <MovieCard movie={movie1} />}
        {movie2 && <MovieCard movie={movie2} />}
        {movie3 && <MovieCard movie={movie3} />}
        {movie4 && <MovieCard movie={movie4} />}
        {movie5 && <MovieCard movie={movie5} />}
        {movie6 && <MovieCard movie={movie6} />}
        {movie7 && <MovieCard movie={movie7} />}
        {movie8 && <MovieCard movie={movie8} />}
        {movie9 && <MovieCard movie={movie9} />}
        {movie10 && <MovieCard movie={movie10} />}
        {movie11 && <MovieCard movie={movie11} />}
      </div>
    </div>
  );
}

export default ContentRow;