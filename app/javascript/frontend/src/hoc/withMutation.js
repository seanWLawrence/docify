import React, { Component } from 'react';
import { Mutation } from 'react-apollo';

import getDisplayName from './getDisplayName';

export default function withMutation(WrappedComponent) {
  class WithMutation extends Component {
    render() {
      let { mutationProps, otherProps } = this.props;

      return (
        <Mutation {...mutationProps}>
          {(mutation, { data, loading, error }) => {
            if (loading) {
              return <h1>Loading....</h1>;
            }
            if (error) {
              return <h1>Error...</h1>;
            }

            return (
              <WrappedComponent
                data={data}
                mutation={mutation}
                {...otherProps}
              />
            );
          }}
        </Mutation>
      );
    }
  }

  WithMutation.displayName = `WithMutation(${getDisplayName(
    WrappedComponent
  )})`;

  return WithMutation;
}
