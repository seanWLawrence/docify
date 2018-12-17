import { graphql } from 'react-relay';

export default graphql`
  query viewerQuery {
    viewer {
      id
      email
    }
  }
`;

