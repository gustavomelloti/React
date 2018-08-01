import React from 'react';
import './PostHeader.css';

const PostHeader = props => (
  <div className="postHeader">
    <span>
      <img className="avatar" src={props.post.avatar} alt="Avatar" />
    </span>
    <span className="author">
      {props.post.author}
    </span>
    <span className="minutes">
      {`há ${props.post.minutesAgo} min`}
    </span>
  </div>
);

export default PostHeader;
