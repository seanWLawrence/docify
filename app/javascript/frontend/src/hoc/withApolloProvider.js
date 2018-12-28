import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';

import getDisplayName from './getDisplayName';
import apolloClient from '../config/apolloClient';

export default function withApollo(WrappedComponent) {
  class WithApollo extends Component {
    render() {
      return (
        <ApolloProvider client={apolloClient}>
          <WrappedComponent />
        </ApolloProvider>
      );
    }
  }

  WithApollo.displayName = `WithApolloProvider(${getDisplayName(
    WrappedComponent
  )})`;

  return WithApollo;
}
