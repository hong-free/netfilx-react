import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./MovieDetailPage.style.css";
import Reviews from "./components/Reviews";
import { useParams } from "react-router";
import { useMovieDetailQuery } from "../../hooks/useMovieDetail";
import { BsCaretRightFill, BsFillInfoCircleFill } from "react-icons/bs";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useMovieDetailQuery(id);

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
    <section className="movie-detail">
      <div className="movieDetail-banner-bg">
        <div
          className="movieDetail-banner"
          style={{
            backgroundImage:
              "url(" +
              `https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data?.poster_path}` +
              ")",
          }}
        ></div>
      </div>
      <div className="container detail-area">
        <div className="row detail-top">
          <div className="col detail-poster-area" lg={6}>
            <img
              className="w-80"
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data?.poster_path}`}
            />
          </div>
          <div className="col detail-info-area" lg={6}>
            {/* <h1 className="movie-title">{data?.title}</h1>
            <h4>{data?.overview}</h4> */}
            <h1 className="movie-title">{data?.title}</h1>
            {data?.popularity}
            {data?.vote_average}
            <div>{data?.overview}</div>

            <div className="banner-btn">
              <button className="btn-play">
                <BsCaretRightFill />
                예고편재생
              </button>
              {/* <button>
                <BsFillInfoCircleFill />
                Info
              </button> */}
            </div>
          </div>
        </div>

        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Info">
            <p>장르</p>
            <p>감독</p>
            <p>출연자</p>
            <p>Release Date: {data?.release_date}</p>
            <p>RunTime: {data?.runtime}분</p>
          </Tab>
          <Tab eventKey="profile" title=" Review">
            <Reviews id={id} />
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default MovieDetailPage;
