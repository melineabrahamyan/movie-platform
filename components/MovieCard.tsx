import { useFeaturedMovie } from '@/context/FeaturedMovieContext';
import { IMovie } from '@/common';

interface IMovieCardProps {
  movie: IMovie;
}

const MovieCard = ({ movie }: IMovieCardProps) => {
  const { setFeaturedMovie } = useFeaturedMovie();
  const handleClick = () => {
    sessionStorage.setItem('featuredMovie', movie.Id);
    setFeaturedMovie(movie);
  };

  return (
    <div
      className="movie-card h-full cursor-pointer bg-cover bg-center p-1"
      style={{
        backgroundImage: `url(cover-photos/${movie.CoverImage})`,
      }}
      onClick={handleClick}
    ></div>
  );
};

export default MovieCard;
