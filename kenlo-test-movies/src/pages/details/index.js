import React, { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { BsStarHalf } from "react-icons/bs";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMovie } from '../../services/getMovie'
import defaultImage from "../../assets/no-image.jpg";

const Details = () => {
  let navigate = useNavigate();
  
  const [movie, setMovie] = useState();

  useEffect(() => {
    const regex = /([^/]+)\/?$/;
    const pathname = regex.exec(window.location.pathname)

    async function fetchMovie(id) {
      const data = await getMovie("movie", id);
      setMovie(data);
    }
    fetchMovie(pathname[0]);
  }, []);

  return (
    <div>
      <div className="back" role="button" aria-pressed="false" onClick={() => navigate(-1)}>
        <MdArrowBack />
      </div>
      {movie && (
        <div className="container details">
          <h1 className="section-title">{movie.original_title}</h1>
          {movie.poster_path !== null ? (
            <img
              alt="cover"
              className="img-bg"
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            />
          ) : (
            <img className="img-bg" src={defaultImage} alt="cover" />
          )}
          <div>
            <h4>Overview</h4>
            <p>{movie.overview}</p>
          </div>
          <div>
            <h4>Rating</h4>
            <p id="rate">
              <BsStarHalf />
              {movie.vote_average}
            </p>
          </div>
          <div>
            <h4>Film genres</h4>
            <ul>
              {movie.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Production companies</h4>
            <ul>
              {movie.production_companies.map((company) => (
                <li key={company.id}>{company.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Production countries</h4>
            <ul>
              {movie.production_countries.map((prod, index) => (
                <li key={index}>{prod.name}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Release</h4>
            <p>{movie.release_date}</p>
          </div>
          <div>
            <a href={movie.homepage}>
              <span> Film page </span>
              <FiExternalLink />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;