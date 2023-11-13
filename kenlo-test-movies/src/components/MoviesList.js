import React from "react";
import Movie from "./Movie";

import { motion } from "framer-motion";

const MoviesList = ({data}) => {
  return (
    <motion.div layout className="popular-movies">
      {data.map((movie) => {
        return <Movie key={movie.id} movie={movie} />;
      })}
    </motion.div>
  );
};

export default MoviesList;
