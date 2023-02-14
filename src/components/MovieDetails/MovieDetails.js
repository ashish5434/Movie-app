import React, { useEffect } from 'react';
import "./MovieDetails.scss"
import { useParams } from "react-router";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from "../../features/movies/movieSlice";

const MovieDetails = () => {

  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow)
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID))
    return () => {
      dispatch(removeSelectedMovieOrShow())
    }
  }, [dispatch, imdbID]);
  return (
    <div className='Main'>
      <div className="movie-title">
        <p>IMDB Rating : {data.imdbRating}</p>
        <p>IMDB Votes : {data.imdbVotes}</p>
        <p>Runtime : {data.Runtime}</p>
        <span>{data.plot}</span>
      </div>
      <hr/>
      <div className='movie-data'>
        <div>
          <span> Director : </span>
          <span>{data.Director}</span>
        </div>
        <div>
          <span> Stars : </span>
          <span>{data.Actors}</span>

        </div>
        <div>
          <span> Genres : </span>
          <span>{data.Genre}</span>

        </div>
        <div>
          <span>Language : </span>
          <span>{data.Language}</span>
        </div>
        <div>
          <span>Awards : </span>
          <span>{data.Awards}</span>
        </div>
      </div>
      <div className='section-right'>
      <img src={data.Poster} alt={data.Title}/>
      </div>

    </div>
  )

}

export default MovieDetails