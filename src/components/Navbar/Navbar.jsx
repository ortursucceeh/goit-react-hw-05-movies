import styles from './Navbar.module.css'

import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.navLink}>Home</NavLink>
      <NavLink to="/movies" className={styles.navLink}>Movies</NavLink>
    </nav>
  )
}

export default Navbar
