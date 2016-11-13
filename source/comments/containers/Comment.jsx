import React, { PropTypes } from 'react';
import { FormattedHTMLMessage } from 'react-intl';

import styles from './Comment.css';


function Comment(props) {
  return (
    <article id={`comment-${props.id}`} className={styles.comment}>
      <p className={styles.body}>
        {props.body}
      </p>

      <div className={styles.meta}>
        <FormattedHTMLMessage
          id="comment.meta.author"
          values={{
            name: props.name,
            email: props.email,
          }}
        />
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
