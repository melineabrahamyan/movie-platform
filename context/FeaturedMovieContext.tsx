'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchFeaturedFromJSON } from '@/lib/fetchFeaturedFromJSON';
import { fetchFeaturedMovie } from '@/lib/fetchFeaturedMovie';
import { Movie } from '@/types/Movie';

interface FeaturedMovieContextType {
  featuredMovie: Movie | null;
  setFeaturedMovie: (movie: Movie | null) => void;
}

const FeaturedMovieContext = createContext<FeaturedMovieContextType | undefined>(undefined);

export const FeaturedMovieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);

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
    throw new Error('useFeaturedMovie must be used within a FeaturedMovieProvider');
  }
  return context;
};
