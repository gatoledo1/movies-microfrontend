import React, { useEffect, useState } from "react";
import dataMenu from "../dataMenu";
import { BiArrowFromRight } from "react-icons/bi";
import { MdMoreHoriz } from "react-icons/md";

const Filter = ({setNewData, data}) => {

  const [moreGenres, setMoreGenres] = useState(false);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    if(data?.current) {
      if (activeGenre === 0) {
        setNewData(data.current)
      } else {
        const filtered = data.current.results?.filter((movie) =>
          movie.genre_ids.includes(activeGenre)
        );
        setNewData({...data, results: filtered})
      }
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeGenre, data?.current]);

  return (
    <div className="filter-container">
      <button
        className={activeGenre === 0 ? "active" : null}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={activeGenre === 28 ? "active" : null}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
      <button
        className={activeGenre === 12 ? "active" : null}
        onClick={() => setActiveGenre(12)}
      >
        Adventure
      </button>
      {moreGenres &&
        dataMenu.map((genre) => (
          <button
            key={genre.id}
            className={activeGenre === genre.id ? "active" : null}
            onClick={() => setActiveGenre(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      <button className="more" onClick={() => setMoreGenres(!moreGenres)}>
        {moreGenres ? <BiArrowFromRight /> : <MdMoreHoriz />}
      </button>
    </div>
  );
};

export default Filter;
