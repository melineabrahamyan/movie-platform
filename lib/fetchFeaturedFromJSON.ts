import data from '../data/data.json';
import { Movie } from '../types/Movie';

export const fetchFeaturedFromJSON = async (): Promise<Movie | null> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const featuredMovie = data.Featured;
    return featuredMovie || null;
  } catch (error) {
    console.error(error);
    return null;
  }
};
