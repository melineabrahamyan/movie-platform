import { IMovie } from '@/common';
import tendingNow from '../data/movies/trending.json';

export const fetchTrendingMovies = async (): Promise<IMovie[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return tendingNow;
  } catch (error) {
    console.error(error);
    return [];
  }
};
