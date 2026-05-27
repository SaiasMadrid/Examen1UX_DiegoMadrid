import "./ContentRow.css";
import MovieCard from "../molecules/MovieCard";

function ContentRow({ category }) {
  const movie0 = category.movies[0];
  const movie1 = category.movies[1];
  const movie2 = category.movies[2];
  const movie3 = category.movies[3];
  const movie4 = category.movies[4];
  const movie5 = category.movies[5];

  return (
    <div className="content-row">
      <h2 className="content-row__title">{category.title}</h2>
      <div className="content-row__slider">
        <MovieCard movie={movie0} />
        <MovieCard movie={movie1} />
        <MovieCard movie={movie2} />
        <MovieCard movie={movie3} />
        <MovieCard movie={movie4} />
        <MovieCard movie={movie5} />
      </div>
    </div>
  );
}

export default ContentRow;