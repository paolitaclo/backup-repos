import React from 'react';
import MovieInfo from './movie_info';
import LikeDislike from './like_dislike';

const MovieDetail = ({ movie, likeDislike }) => (
    <div>
      <MovieInfo movie={movie}/>
      <a href={movie.trailer}>
      PLay trailer on YouTube
      </a>
      <LikeDislike likeDislike={likeDislike}/>
      <div>
        {movie.raitings.map((raiting) => <div key={raiting.source}><a href={raiting.source}>{raiting.url}</a></div>)}
      </div>
    </div>
  );

export default MovieDetail;
