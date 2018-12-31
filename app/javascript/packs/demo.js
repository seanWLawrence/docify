import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';

import Spinner from '../frontend/src/components/Spinner';
let DemoDocument = lazy(() => import('../frontend/src/pages/Documents/Demo'));

let root = document.getElementById('root');

render(
  <Suspense fallback={<Spinner isLoading />}>
    <DemoDocument />
  </Suspense>,
  root
);
