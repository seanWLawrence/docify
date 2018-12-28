import React from 'react';
import { Query } from 'react-apollo';

export default function withQuery(WrappedComponent) {
  class WithQuery extends Component {
    render() {
      let { queryProps, otherProps } = this.props;

      return (
        <Query {...queryProps}>
          {({ data, loading, error }) => {
            if (loading) {
              return <h1>Loading....</h1>;
            }
            if (error) {
              return <h1>Error...</h1>;
            }

            return <WrappedComponent data={data} {...otherProps} />;
          }}
        </Query>
      );
    }
  }

  WithQuery.displayName = `WithQuery(${getDisplayName(WrappedComponent)})`;

  return WithQuery;
}
