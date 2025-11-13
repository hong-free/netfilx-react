import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";
import { BsFillHeartFill, BsFillHandThumbsUpFill } from "react-icons/bs";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import { Link } from 'react-router';

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();
  const showGenre = (genreIdList) => {
    if (!genreData) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genreData.find((genre) => genre.id == id);
      return genreObj.name;
    });

    return genreNameList;
  };
  return (
    <Link to={`/movies/${movie.id}`} className="movie-card-area">
      <div
        style={{
          backgroundImage: `url(https://media.themoviedb.org/t/p/original${movie.poster_path})`,
        }}
        className="movie-card"
      >
        <div className="movieCard-info">
          <h1 className="movie-title">{movie.title}</h1>
          <div>
            {showGenre(movie.genre_ids).map((id, index) => (
              <Badge bg="danger " key={index} className="badge-genre">
                {id}
              </Badge>
            ))}
          </div>
          <button className="movieCard-detail"> 상세정보 </button>
              
          
          <div className="vote_average text-warning">
            <span>
              <BsFillHeartFill />
            </span>

            {movie.vote_average}
          </div>
          <div className="popularity text-danger">
            <span>
              <BsFillHandThumbsUpFill />
            </span>
            {movie.popularity}
          </div>
          <div className="adult-badge">
            {movie.adult ? (
              <Badge bg="danger">"18"</Badge>
            ) : (
              <Badge bg="success py-2 mb-1 ">ALL</Badge>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
