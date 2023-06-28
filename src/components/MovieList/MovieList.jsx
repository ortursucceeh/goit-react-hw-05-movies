import { useMovies } from 'contexts/MoviesContext'
import styles from './MovieList.module.css'
import Spinner from 'components/Spinner/Spinner';
import MovieItem from 'components/Movie/MovieItem/MovieItem';

function MovieList() {
  const { movies, isLoading } = useMovies()
  
  if (isLoading) return <Spinner/>
  return (
    <ul className={styles.list}>
      {movies.map(movie => <MovieItem movie={movie} key={movie.id} />)}
    </ul>
  )
}

export default MovieList
