import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./MovieContext";
import Details from "./pages/details";
import ContainerMovies from "./pages/home";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Routes>
          <Route path="/" element={<ContainerMovies header="Populares" filter="movie/popular" />} />
          <Route path="/exibicao" element={<ContainerMovies header="Em exibição" filter="movie/now_playing" />} />
          <Route path="/top" element={<ContainerMovies header="Top filmes" filter="movie/top_rated" />} />
          <Route path="/em-breve" element={<ContainerMovies header="Em breve" filter="movie/upcoming" />} />
          <Route path="/movie/:movieId" element={<Details />} />
        </Routes>
      </MovieProvider>
    </div>
  );
}

export default App;
