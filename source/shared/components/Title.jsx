import React, { PropTypes } from 'react';

import styles from './Title.css';


function Title(props) {
  return (
    <h2 className={styles.title}>
      {props.children}
    </h2>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};


export default Title;
