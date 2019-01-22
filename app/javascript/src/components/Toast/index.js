import React from 'react';
import Types from 'prop-types';

import styles from './index.module.scss';

export default function Toast({ message, isVisible }) {
  let containerStyles = isVisible
    ? styles['Container--Visible']
    : styles.Container;

  return (
    <div className={containerStyles}>
      <div className={styles.Container__Inner}>{message}</div>
    </div>
  );
}

Toast.propTypes = {
  message: Types.string.isRequired,
  isVisible: Types.bool.isRequired,
};
