'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchFeaturedFromJSON } from '@/lib/fetchFeaturedFromJSON';
import { fetchFeaturedMovie } from '@/lib/fetchFeaturedMovie';
import { FeaturedMovieProviderError, IMovie, NullableType, TChildren } from '@/common';

interface FeaturedMovieContextType {
  featuredMovie: NullableType<IMovie>;
  setFeaturedMovie: (movie: NullableType<IMovie>) => void;
}

const FeaturedMovieContext = createContext<FeaturedMovieContextType | undefined>(undefined);

export const FeaturedMovieProvider: React.FC<TChildren> = ({ children }) => {
  const [featuredMovie, setFeaturedMovie] = useState<NullableType<IMovie>>(null);

  useEffect(() => {
    const movieId = sessionStorage.getItem('featuredMovie');
    const fetchMovie = async () => {
      if (movieId) {
        const movieData = await fetchFeaturedMovie(movieId);
        setFeaturedMovie(movieData);
      } else {
        const featuredMovie = await fetchFeaturedFromJSON();
        setFeaturedMovie(featuredMovie);
      }
    };

    fetchMovie();
  }, []);

  return (
    <FeaturedMovieContext.Provider value={{ featuredMovie, setFeaturedMovie }}>
      {children}
    </FeaturedMovieContext.Provider>
  );
};

export const useFeaturedMovie = () => {
  const context = useContext(FeaturedMovieContext);
  if (!context) {
    throw new FeaturedMovieProviderError();
  }
  return context;
};
