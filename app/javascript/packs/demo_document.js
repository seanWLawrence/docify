import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';

let DemoDocument = lazy(() => import('../frontend/src/pages/Documents/Demo'));

let root = document.getElementById('root');

render(
  <Suspense fallback={<h1>Loading...</h1>}>
    <DemoDocument />
  </Suspense>,
  root
);
