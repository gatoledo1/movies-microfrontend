import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import defaultImage from "../../assets/no-image.jpg";
import "./styles.scss";
import { MovieData } from "../../types/MovieData";

interface ComponentTypes {
  movie: MovieData;
  detailsPage?: boolean | null;
  addToFavorites?: (movie: MovieData) => void;
  isFav?: (id: number) => boolean;
}

function Movie({ movie, isFav, addToFavorites, detailsPage = null }: ComponentTypes) {
  return (
    <div className="movie">
      {isFav(movie.id) ? 
        <AiOutlineStar onClick={() => addToFavorites(movie)} /> 
        : 
        <AiFillStar onClick={() => addToFavorites(movie)} />
      }
      <Link to={`/movie/${movie.id}`} key={movie.id}>
        {!detailsPage && <div className="shadow"></div>}
      </Link>
      {movie.poster_path !== null ? (
        <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt="movie-cover" />
      ) : (
        <img src={defaultImage} alt="movie-cover" />
      )}
      {!detailsPage && <h2>{movie.title}</h2>}
    </div>
  );
}

export default Movie;
