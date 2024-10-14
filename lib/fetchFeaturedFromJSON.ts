import { IMovie, NullableType } from '@/common';
import featuredMovie from '../data/movies/featured.json';

export const fetchFeaturedFromJSON = async (): Promise<NullableType<IMovie>> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return featuredMovie;
  } catch (error) {
    console.error(error);
    return null;
  }
};
