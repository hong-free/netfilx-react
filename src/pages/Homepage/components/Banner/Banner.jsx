import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import { Alert, Spinner } from "react-bootstrap";
import "./Banner.style.css";
import Carousel from "react-multi-carousel";
import { BsCaretRightFill, BsFillInfoCircleFill } from "react-icons/bs";

const Banner = () => {
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  console.log(data);
  if (isLoading) {
    return (
      <div
        className="spinner-border position-absolute top-50 start-50  text-danger"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      ></div>
    );
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div
      className="banner  position-relative"
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
        <div className="banner-btn">
          <button>
            <BsCaretRightFill />
            Play
          </button>
          <button>
            <BsFillInfoCircleFill />
            Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
