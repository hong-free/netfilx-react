import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import { Alert, Spinner } from "react-bootstrap";
import "./Banner.style.css";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log("AAAAA", data);
  if (isLoading) {
    <Spinner animation="border" variant="danger" role="status"></Spinner>;
  }
  if (isError) {
    <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div
      className="banner"
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data?.results[0].poster_path}` +
          ")",
      }}
    >
      <div className="banner-area">
        <h1>{data?.results[0].title}</h1>
        <h4>{data?.results[0].overview}</h4>
      </div>
    </div>
  );
};

export default Banner;
