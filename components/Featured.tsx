'use client';
import { formatDuration } from '@/common';
import { useFeaturedMovie } from '@/context/FeaturedMovieContext';
import Image from 'next/image';
import { useRef, useEffect, useState } from 'react';

const Featured = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);
  const { featuredMovie } = useFeaturedMovie();

  useEffect(() => {
    if (videoRef.current && showVideo) {
      handleVideoEnd();
    }
  }, [featuredMovie]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (featuredMovie?.VideoUrl) {
        setShowVideo(true);
        if (videoRef.current) {
          videoRef.current.play();
        }
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [featuredMovie]);

  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  return (
    <div
      className={`featured relative flex h-full flex-col justify-center overflow-hidden bg-cover`}
      style={{
        backgroundImage: `${!showVideo && featuredMovie?.CoverImage ? `url(cover-photos/${featuredMovie.CoverImage})` : ''} `,
      }}
    >
      <div className="z-1 absolute inset-0 bg-gradient-to-tr from-background to-transparent opacity-60"></div>

      {showVideo && (
        <video
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
          ref={videoRef}
          autoPlay
          muted
          onEnded={handleVideoEnd}
        >
          <source src={featuredMovie?.VideoUrl} type="video/mp4" />
        </video>
      )}
      {featuredMovie && (
        <div className="z-1 relative text-white">
          <h3 className="font-semibold uppercase text-[grey]">{featuredMovie.Category}</h3>
          <Image
            src={`/cover-photos/${featuredMovie.TitleImage}`}
            width={600}
            height={74}
            alt="title"
          />
          <div className="my-1 flex gap-2">
            <span>{featuredMovie.ReleaseYear}</span>
            <span>{featuredMovie.MpaRating}</span>
            <span>{formatDuration(Number(featuredMovie.Duration))}</span>
          </div>
          <p className="my-3 max-w-[700px] text-lg">{featuredMovie.Description}</p>
          <div className="flex gap-2">
            <button className="w-[150px] rounded-full bg-white py-2 text-lg font-bold text-black outline-none">
              Play
            </button>
            <button className="w-[150px] rounded-full bg-btn-gradient py-2 text-lg font-bold text-white outline-none">
              More Info
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Featured;
