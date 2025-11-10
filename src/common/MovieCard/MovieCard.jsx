import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";
import { BsFillHeartFill, BsFillHandThumbsUpFill } from "react-icons/bs";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({ movie }) => {
  const { data: genreData } = useMovieGenreQuery();
  const showGenre=(genreIdList)=>{
    if(!genreData) return []
    const genreNameList=genreIdList.map((id)=>{
      const genreObj=genreData.find((genre)=>genre.id==id)
      return genreObj.name;
    })
    
    return genreNameList;
  }
  return (
    <div className="movie-card-area">
      <div
        className="movie-card "
        style={{
          backgroundImage:
            "url(" +
            `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${movie.poster_path}` +
            ")",
        }}
      >
        <div className="movieCard-info">
          <h1 className="movie-title">{movie.title}</h1>
          <div>
            {showGenre(movie.genre_ids).map((id, index) => (
              <Badge bg="danger" key={index}>
                {id}
              </Badge>
            ))}
          </div>
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
              <Badge bg="success py-3 mb-2 fs-6">ALL</Badge>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
