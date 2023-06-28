import { Link, useLocation } from 'react-router-dom'
import styles from './MovieItem.module.css'

function MovieItem({ movie }) {
  const location = useLocation();
  
  const { id, title, name, original_name: originalName} = movie;
  return (
    <Link to={`/movies/${id}`} state={{ from: location}}>
      <li className={styles.item}>
        <span>{title || name || originalName}</span>
      </li>
    </Link>
  )
}

export default MovieItem
