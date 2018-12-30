import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function Button({ children, onClick, isActive, className }) {
  let buttonStyles = isActive ? styles['Base--Active'] : styles.Base;

  return (
    <button onClick={onClick} className={[className, buttonStyles].join(' ')}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  className: PropTypes.string,
};
