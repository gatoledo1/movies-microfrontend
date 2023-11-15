import { api } from "./connect";

const controller = new AbortController();

export const getMovie = async (path: string, id: string | number) => {
  try {
    const response = await api.get(path + `/${id}?api_key=${process.env.REACT_APP_API}&language=pt-BR`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404 || error.message === "Network Error") {
      controller.abort();
    }
  }
};
