import { api } from "./connect";

const controller = new AbortController();

export const searchMovies = async (path: string, query: string) => {
  try {
    const response = await api.get(path + `?api_key=${process.env.REACT_APP_API}&language=pt-BR&query=${query}&page=1&include_adult=false`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404 || error.message === "Network Error") {
      controller.abort();
    }
  }
};
