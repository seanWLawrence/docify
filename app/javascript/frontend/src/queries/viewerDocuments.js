import gql from 'graphql-tag';

export default gql`
  query documentsQuery {
    viewer {
      documents {
        id
        content
        createdAt
        updatedAt
      }
    }
  }
`;
