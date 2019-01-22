import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import Spinner from '../src/components/Spinner';
import client from '../src/config/apolloClient';

let Routes = lazy(() => import('../src/config/Routes'));

let root = document.getElementById('root');

render(
  <Suspense fallback={<Spinner isLoading />}>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </Suspense>,
  root
);
