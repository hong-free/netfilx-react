import React from "react";
import AppLayout from "../../Layout/AppLayout";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import TopRatedSlide from "./components/TopRatedSlide/TopRatedSlide";
import UpcomingMovieSlide from "./components/UpcomingMovieSlide/UpcomingMovieSlide";
import Footer from "./components/Footer/Footer";

//1. 배너-popular movie 영화를 들고와서 첫번째 아이템을 보여주자
//2.popular movie
//3.top rated movie
//4.upcoming movie

const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
      <UpcomingMovieSlide />
      <TopRatedSlide />
    </div>
  );
};

export default Homepage;
