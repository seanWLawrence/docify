import gql from 'graphql-tag';

export default gql`
  query documentQuery {
    document(documentId: $documentId) {
      title
      body
      isPrivate
    }
  }
`;