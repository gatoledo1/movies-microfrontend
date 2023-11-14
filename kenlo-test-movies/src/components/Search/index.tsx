import React from "react";
import { RiSearchLine } from "react-icons/ri";
import { searchMovies } from "../../services/searchMovies";
import "./styles.scss"
import { DataRequest } from "../../types/DataRequest";

interface ComponentTypes {
  setNewData: React.Dispatch<React.SetStateAction<DataRequest>>;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const Search = ({setNewData, value, setValue}: ComponentTypes) => {

  const onKeyUp = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && value !== "") {
      const query = value.trim();
      if (query !== "") {
        const newList = await searchMovies("search/movie", query);
        setNewData(newList)
      }
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
