import React from 'react'

let styles = {
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

let Toolbar = ({ children }) => (
  <div
    style={styles}
  >
    {children}
  </div>
);

export default Toolbar;
