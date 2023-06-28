import MovieList from "components/MovieList/MovieList"
import styles from './Homepage.module.css'

function Homepage() {
  
  return (
    <div>
      <h1 className={styles.header}>Trending Today</h1>
      <MovieList/>
    </div>
  )
}

export default Homepage
