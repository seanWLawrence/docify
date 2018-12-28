import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function Button({
  children,
  onClick,
  isActive,
  isInternalLink,
  isExternalLink,
  to,
}) {
  let buttonStyles = isActive ? styles['Base--Active'] : styles.Base;

  return (
    <button onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};
