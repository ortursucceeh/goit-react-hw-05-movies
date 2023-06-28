import { Link, useLocation } from 'react-router-dom';
import styles from './BackButton.module.css'

function BackButton() {
  const location = useLocation();
  const backLinkHref = location.state?.from || "/";

  return (
    <Link to={backLinkHref}><button className={styles.back}>&larr; Back</button></Link>
  )
}

export default BackButton
