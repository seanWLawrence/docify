import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import Spinner from '../frontend/src/components/Spinner';
import client from '../frontend/src/config/apolloClient';

let Routes = lazy(() => import('../frontend/src/config/Routes'));

let root = document.getElementById('root');

render(
  <Suspense fallback={<Spinner isLoading />}>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </Suspense>,
  root
);
