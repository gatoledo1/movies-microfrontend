import React from "react";
import Movie from "../Movie";
import "./styles.scss";
import { MovieData } from "../../types/MovieData";
import { useFavorites } from "../../utils/useFavorites";

const MoviesList = ({ data }: { data: Array<MovieData> }) => {
  const { isFav, addToFavorites } = useFavorites();

  return (
    <div className="popular-movies">
      {data.map((movie, index) => {
        return <Movie key={`${movie.id}-${index}`} isFav={isFav} addToFavorites={addToFavorites} movie={movie} detailsPage={false} />;
      })}
    </div>
  );
};

export default MoviesList;
