import { useFeaturedMovie } from '@/context/FeaturedMovieContext';
import { Movie } from '@/types/Movie';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { setFeaturedMovie } = useFeaturedMovie();
  const handleClick = () => {
    sessionStorage.setItem('featuredMovie', movie.Id);
    setFeaturedMovie(movie);
  };

  return (
    <div
      className="movie-card h-full cursor-pointer bg-cover bg-center p-1"
      style={{
        backgroundImage: `url(${movie.CoverImage})`,
      }}
      onClick={handleClick}
    ></div>
  );
};

export default MovieCard;
