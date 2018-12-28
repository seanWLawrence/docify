import gql from 'graphql-tag';

export default gql`
  mutation CreateDocument {
    createDocument {
      document {
        id
      }
    }
  }
`;
