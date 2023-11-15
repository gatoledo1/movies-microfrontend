import { MovieData } from "../types/MovieData";
import { useLocalStorage } from "./useLocalStorage";

export const useFavourites = () => {
  const [favourites, setFavourites] = useLocalStorage("fav", []);

  const addToFavourites = (movie: MovieData) => {
    const isOnArray = favourites.some((fav: MovieData) => fav.id === movie.id);

    if (isOnArray) {
      setFavourites((prevFavourites: MovieData[]) => prevFavourites.filter((fav: MovieData) => fav.id !== movie.id));
    } else {
      setFavourites((prevFavourites: MovieData[]) => [...prevFavourites, movie]);
    }
  };

  const isFav = (id: number) => {
    return !favourites.some((fav: MovieData) => fav.id === id);
  };

  return { isFav, favourites, addToFavourites };
};
