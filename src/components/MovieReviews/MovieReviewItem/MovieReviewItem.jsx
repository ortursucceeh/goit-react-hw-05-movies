import { formatDate } from "functions";
import styles from './MovieReviewItem.module.css'

function MovieReviewItem({ review }) {

  const { author, content, created_at: created } = review;

  return (
    <li className={styles.review}>
      <h3>{author}</h3>
      <h6>{formatDate(created || null)}</h6>
      <div>{content }</div>
    </li>
  )
}

export default MovieReviewItem
