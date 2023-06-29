import { Suspense, lazy, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import styles from './MovieSearch.module.css'
import { useMovies } from 'contexts/MoviesContext';
import Spinner from 'UI/Spinner/Spinner';

const MovieSearchList = lazy(() => import("./MovieSearchList/MovieSearchList"));

function MovieSearch() {
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchMovie, searchMovies } = useMovies();

  const query = searchParams.get('query');

  useEffect(function () {
    if (query) {
      setSearchValue(query)
      searchMovie(query);
    }
  }, [searchParams, query, searchMovie])

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParams({ query: searchValue })
  }

  return (
    <div className={styles.searchPage}>
      <form className={ styles.form} onSubmit={handleSubmit}>
        <label htmlFor="search" className={styles.label}>Search movie</label>
        <input id="search" className={styles.input} type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)}/>
        <button type="submit" className={styles.button}>Search</button>
      </form>
      <Suspense fallback={<Spinner/>}>
        {query && searchMovies.length > 0 && <MovieSearchList />}
      </Suspense>
    </div>    
  )
}

export default MovieSearch
