import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.scss';

export default function Toolbar({ children }) {
  return <div className={styles.Base}>{children}</div>;
}

Toolbar.propTypes = {
  children: PropTypes.node.isRequired,
};
