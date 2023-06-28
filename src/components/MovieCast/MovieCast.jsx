import { useEffect } from "react";
import { useParams } from "react-router-dom";

import MovieCastItem from "./MovieCastItem/MovieCastItem";
import Spinner from "components/Spinner/Spinner";
import { useMovies } from "contexts/MoviesContext";
import styles from './MovieCast.module.css'

function MovieCast() {
  const { id } = useParams();
  const { currentMovie, getMovieCast, isCastLoading } = useMovies();
  useEffect(function () {
    getMovieCast(id)
  }, [id, getMovieCast])

  if (isCastLoading) return <Spinner />;

  return (
    <div>
      <h3>Movie Cast: </h3>
      {currentMovie.cast && (<div className={styles.cast}>{currentMovie.cast.map(actor =>
        <MovieCastItem key={actor.cast_id} actor={actor} />) }</div>)}
    </div>
  )
}

export default MovieCast
