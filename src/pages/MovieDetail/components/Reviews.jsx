import React from "react";
import { useMovieReviewsQuery } from "../../../hooks/useMovieReviews";
import ReviewBox from "./ReviewBox";

const Reviews = ({ id }) => {
  const { data } = useMovieReviewsQuery(id);
  console.log(data);
  return (
    <div>
      <h3>Reviews!!</h3>

      {data?.data.results.length === 0 ? (
        <div>0</div>
      ) : (
        data?.data.results.map((review, index) => (
          <ReviewBox review={review} key={index} />
        ))
      )}
    </div>
  );
};

export default Reviews;
