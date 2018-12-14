import React, { CSSProperties } from 'react';

interface Props {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

let styles: CSSProperties = {
  border: 0,
  padding: '10px 15px',
  maxWidth: 'max-content',
  margin: 10,
  cursor: 'pointer',
  color: 'cornflowerblue',
  backgroundColor: 'rgba(240, 240, 240, 1)'
}

let Button = ({ text, onClick }: Props) => (
  <button
    onClick={onClick}
    style={styles}
  >
    {text}
  </button>
);

export default Button;
