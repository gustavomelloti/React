import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader/PostHeader';
import './Post.css';

const Post = props => (
  <div className="postBox">
    <PostHeader post={props.post} />
    <span className="postMessage">
      {props.post.message}
    </span>
  </div>
);

Post.defaultProps = {
  post: {
    id: 0,
  },
};

// Post.propTypes = {
//   post: [
//     PropTypes.object.isRequired,
//     PropTypes.shape({
//       id: PropTypes.integer,
//       author: PropTypes.string,
//       avatar: PropTypes.string,
//       minutesAgo: PropTypes.integer,
//       message: PropTypes.string,
//     }),
//   ],
// };

export default Post;
