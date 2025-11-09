import React from "react";
import "./MovieSlider.style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "./../../common/MovieCard/MovieCard";

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div>
      <div className="container">
        <h1 className="MovieSlider-title">{title}</h1>
        <Carousel
          partialVisible={true}
          className="carousel"
          infinite={true}
          // centerMode={true}
          itemClass="movie-slider p-1"
          containerClass="carousel-container"
          responsive={responsive}
          focusOnSelect={true}
        >
          {movies.map((movie, index) => (
            <MovieCard movie={movie} key={index} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MovieSlider;
