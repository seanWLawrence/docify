import gql from 'graphql-tag';

export default gql`
  query documentQuery {
    viewer {
      documents {
        title
        body
      }
    }
  }
`;
