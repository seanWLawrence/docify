import React, { CSSProperties } from 'react'

interface Props {
  children: React.ReactNodeArray
}

let styles: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: 'max-content',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  boxShadow: '0 1px 9px #ddd',
  position: 'fixed',
  right: 0,
  backgroundColor: '#fff',
  zIndex: 2,
}

let Toolbar = ({ children }: Props) => (
  <div
    style={styles}
  >
    {children}
  </div>
);

export default Toolbar;
