import gql from 'graphql-tag';

export default gql`
  query viewerDocumentById($documentId: ID!) {
    document(documentId: $documentId) {
      content
    }
  }
`;
