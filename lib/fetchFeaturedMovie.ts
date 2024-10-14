import { IMovie, NullableType } from '@/common';
import tendingNow from '../data/movies/trending.json';

export const fetchFeaturedMovie = async (id: string): Promise<NullableType<IMovie>> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const movie = tendingNow.find((movie) => movie.Id === id);
    return movie || null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
