import { useLocalStorage } from "./useLocalStorage"

export const useFavourites = () => {
  const [favourites, setFavourites] = useLocalStorage("fav", []);

  const addToFavourites = (movie: { id: number }) => {
    const isOnArray = favourites.some((fav: { id: number }) => fav.id === movie.id);

    if (isOnArray) {
      setFavourites((prevFavourites: any) => prevFavourites.filter((fav: { id: number }) => fav.id !== movie.id));
    } else {
      setFavourites((prevFavourites: any) => [...prevFavourites, movie]);
    }
  };

  const isFav = (id: number) => {
    return !favourites.some((fav: { id: number }) => fav.id === id);
  };

  return { isFav, favourites, addToFavourites };
};