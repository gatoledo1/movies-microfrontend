import React, { useEffect, useState } from "react";
import dataMenu from "../../dataMenu";
import { BiArrowFromRight } from "react-icons/bi";
import { MdMoreHoriz } from "react-icons/md";
import "./styles.scss";
import { DataRequest } from "../../types/DataRequest";

interface ComponentTypes {
  setNewData: React.Dispatch<React.SetStateAction<DataRequest>>;
  data: React.MutableRefObject<DataRequest>;
  activeGenre: number;
  setActiveGenre: React.Dispatch<React.SetStateAction<number>>;
}

const Filter = ({ setNewData, data, activeGenre, setActiveGenre }: ComponentTypes) => {
  const [moreGenres, setMoreGenres] = useState(false);

  useEffect(() => {
    if (data?.current) {
      if (activeGenre === 0) {
        setNewData(data.current);
      } else {
        const filtered = data.current.results?.filter((movie) => movie.genre_ids.includes(activeGenre));
        setNewData({ ...data, results: filtered });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeGenre, data?.current]);

  return (
    <div className="filter-container">
      <button className={activeGenre === 0 ? "active" : null} onClick={() => setActiveGenre(0)}>
        Todos
      </button>
      <button className={activeGenre === 28 ? "active" : null} onClick={() => setActiveGenre(28)}>
        Ação
      </button>
      <button className={activeGenre === 12 ? "active" : null} onClick={() => setActiveGenre(12)}>
        Aventura
      </button>
      {moreGenres &&
        dataMenu.map((genre) => (
          <button key={genre.id} className={activeGenre === genre.id ? "active" : null} onClick={() => setActiveGenre(genre.id)}>
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
