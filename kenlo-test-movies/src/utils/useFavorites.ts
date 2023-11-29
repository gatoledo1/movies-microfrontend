import { MovieData } from "../types/MovieData";
import { useLocalStorage } from "./useLocalStorage";

export const useFavorites = () => {
  const [FavoriteData, setFavoriteData] = useLocalStorage("fav", []);

  const addToFavorites = (movie: MovieData) => {
    const isOnArray = FavoriteData.some((fav: MovieData) => fav.id === movie.id);

    if (isOnArray) {
      setFavoriteData((prevFavorites: MovieData[]) => prevFavorites.filter((fav: MovieData) => fav.id !== movie.id));
    } else {
      setFavoriteData((prevFavorites: MovieData[]) => [...prevFavorites, movie]);
    }
  };

  const isFav = (id: number) => {
    return !FavoriteData.some((fav: MovieData) => fav.id === id);
  };

  return { isFav, FavoriteData, addToFavorites };
};
