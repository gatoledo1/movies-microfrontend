import React, { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

import { searchMovies } from "../services/searchMovies";

const Search = ({setNewData}) => {
  const [value, setValue] = useState("");

  const onKeyUp = async (event) => {
    if (event.key === "Enter" && value !== "") {
      const query = value.trim();
      if (query !== "") {
        const newList = await searchMovies("search/movie", query);
        setNewData(newList)
      }
      setValue("");
    }
  };

  return (
    <div className="search-movies">
      <RiSearchLine />
      <input
        type="text"
        id="search"
        placeholder="Search for movies"
        onKeyDown={(e) => onKeyUp(e)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Search;
