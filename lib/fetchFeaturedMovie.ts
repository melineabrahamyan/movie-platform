import data from '../data/data.json';
import { Movie } from '../types/Movie';

export const fetchFeaturedMovie = async (id: string): Promise<Movie | null> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const movie = data.TendingNow.find((movie) => movie.Id === id);
    return movie || null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
