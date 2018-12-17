import React from 'react';

let styles = {
  border: 0,
  padding: '10px 15px',
  maxWidth: 'max-content',
  margin: 10,
  cursor: 'pointer',
  color: 'cornflowerblue',
  backgroundColor: 'rgba(240, 240, 240, 1)'
}

let Button = ({ text, onClick }) => (
  <button
    onClick={onClick}
    style={styles}
  >
    {text}
  </button>
);

export default Button;
