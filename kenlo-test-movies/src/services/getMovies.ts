import { api } from "./connect";

const controller = new AbortController();

export const getMovies = async (path: string, page: number) => {
  try {
    const response = await api.get(path + `?api_key=${process.env.REACT_APP_API}&language=pt-BR&page=${page ? page : 1}`);
    return response.data;
    
  } catch (error) {
    if(error.response?.status === 404 || error.message === "Network Error") {
      controller.abort()
    }
  }
};