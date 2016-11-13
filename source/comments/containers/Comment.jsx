import React, { PropTypes } from 'react';

import styles from './Comment.css';


function Comment(props) {
  return (
    <article id={`comment-${props.id}`} className={styles.comment}>
      <p className={styles.body}>
        {props.body}
      </p>

      <div className={styles.meta}>
        By: <a href={`mailto:${props.email}`}>{props.name}</a>
      </div>
    </article>
  );
}


Comment.propTypes = {
  id: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};


export default Comment;
