import React from "react";
import Movie from "../Movie";
import "./styles.scss"
import { MovieData } from "../../types/MovieData";

const MoviesList = ({data}: {data: Array<MovieData>}) => {
  return (
    <div className="popular-movies">
      {data.map((movie, index) => {
        return <Movie key={`${movie.id}-${index}`} movie={movie} detailsPage={false} />;
      })}
    </div>
  );
};

export default MoviesList;
