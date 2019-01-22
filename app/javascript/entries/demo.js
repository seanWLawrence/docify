import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';

import Spinner from '../src/components/Spinner';
let DemoDocument = lazy(() => import('../src/pages/Documents/Demo'));

let root = document.getElementById('root');

render(
  <Suspense fallback={<Spinner isLoading />}>
    <DemoDocument />
  </Suspense>,
  root
);
