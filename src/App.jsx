import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MovieProvider } from "contexts/MoviesContext";
import Homepage from "pages/Homepage/Homepage";

import MovieCast from "components/MovieCast/MovieCast";
import MovieReviews from "components/MovieReviews/MovieReviews";
import Navbar from "components/Navbar/Navbar";
import MovieList from "components/MovieList/MovieList";
import Spinner from "components/Spinner/Spinner";

const Movies = lazy(() => import("pages/Movies/Movies"));
const NotFound = lazy(() => import("pages/NotFound/NotFound"));
const MovieDetails = lazy(() => import("pages/MovieDetails/MovieDetails"));


export const App = () => {
  return (
    <Suspense fallback={<Spinner/>}>
      <MovieProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="movies" element={<Movies />}>
              <Route path="?query=:movie" element={<MovieList />}></Route>
            </Route>
            <Route path="movies/:id" element={<MovieDetails />}>
              <Route path="cast" element={<MovieCast />}/>
              <Route path="reviews" element={<MovieReviews />}/>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </MovieProvider>
    </Suspense>
  );
};
