import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function({ text, onClick, isActive }) {
  let buttonStyles = isActive ? styles['Base--Active'] : styles.Base;

  return (
    <button onClick={onClick} className={buttonStyles}>
      {text}
    </button>
  );
}
