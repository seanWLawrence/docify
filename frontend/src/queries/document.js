import { graphql } from 'react-relay';

export default graphql`
  query documentQuery {
    viewer {
      documents {
        title
        body
      }
    }
  }
`;

