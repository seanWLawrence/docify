import React from 'react';
import { render } from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import App from '../frontend/src/App';

const client = new ApolloClient({
  uri: '/graphql',
});

let root = document.getElementById('root');

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  root
);
