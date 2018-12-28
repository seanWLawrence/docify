import gql from 'graphql-tag';

export default gql`
  mutation UpdateDocumentIsPrivate($documentId: ID!, $isPrivate: Boolean!) {
    updateDocumentIsPrivate(documentId: $documentId, isPrivate: $isPrivate) {
      document {
        id
        isPrivate
      }
    }
  }
`;
