import React from 'react';

const MovieInfo = ({ movie }) => (
  <div>
    <h3>{movie.title}</h3>
    <h5>{movie.type}</h5>
    <a href={movie.shareUrl}>Share!</a>
  </div>
);

export default MovieInfo;
