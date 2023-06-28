import { useMovies } from 'contexts/MoviesContext'
import styles from './MovieSearchList.module.css'
import Spinner from 'components/Spinner/Spinner';
import MovieItem from 'components/Movie/MovieItem/MovieItem';

function MovieSearchList() {
  const { searchMovies, isLoading } = useMovies()

  if (isLoading) return <Spinner />
  
  return (
    <ul className={styles.list}>
      {searchMovies.map(movie => <MovieItem movie={movie} key={movie.id} />)}
    </ul>
  )
}

export default MovieSearchList
