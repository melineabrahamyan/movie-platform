import data from '../data/data.json';
import { Movie } from '../types/Movie';

export const fetchTrendingMovies = async (): Promise<Movie[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return data.TendingNow;
  } catch (error) {
    console.error(error);
    return [];
  }
};
