import React from 'react';

const LikeDislike = ({ LikeDislike, onLikeDislike }) => (
  <div>
    <i className="fa fa-thumbs-o-up" aria-hidden="true" onClick={() => onLikeDislike(LikeDislike)}></i>
    <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
  </div>
)

export default LikeDislike;
