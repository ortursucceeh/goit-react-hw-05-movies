import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useMovies } from "contexts/MoviesContext"
import MovieReviewItem from "./MovieReviewItem/MovieReviewItem";
import Spinner from "components/Spinner/Spinner";

function MovieReviews() {
  const { id } = useParams();
  const { currentMovie, getMovieReviews, isCastLoading } = useMovies();

  useEffect(function () {
    getMovieReviews(id)
  }, [id, getMovieReviews])

  if (isCastLoading) return <Spinner />;

  const {reviews} = currentMovie
  return (
    <div>
      <h3>Reviews:</h3>
      {reviews?.length > 0
        ? (<ul>{reviews.map(review => <MovieReviewItem key={review.id} review={review}/>)}</ul>)
        : <strong>There is no review yet!</strong>}
    </div>
  )
}

export default MovieReviews
 