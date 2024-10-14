'use client';

import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { fetchTrendingMovies } from '@/lib/fetchTrendingMovies';
import { IMovie } from '@/common';

const swiperOptions = {
  spaceBetween: 15,
  slidesPerView: 3,
  loop: true,
  breakpoints: {
    1280: {
      slidesPerView: 8,
    },
    1024: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 4,
    },
    480: {
      slidesPerView: 2,
    },
  },
};

const TrendingNow = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const trendingMovies = await fetchTrendingMovies();
      setMovies(trendingMovies);
    };

    getTrendingMovies();
  }, []);

  return (
    <div className="trending-now flex h-full flex-col bg-background">
      <h2 className="py-1 text-xl text-white">Trending Now</h2>
      <div className="flex h-full w-full">
        <Swiper {...swiperOptions}>
          {movies?.map((movie) => (
            <SwiperSlide key={movie?.Id}>
              <MovieCard movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingNow;
