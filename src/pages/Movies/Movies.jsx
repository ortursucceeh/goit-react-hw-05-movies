import MovieSearch from "components/MovieSearch/MovieSearch"
import { Outlet } from "react-router-dom"

function Movies() {
  return (
    <div>
      <MovieSearch />
      <Outlet/>
    </div>
  )
}

export default Movies
