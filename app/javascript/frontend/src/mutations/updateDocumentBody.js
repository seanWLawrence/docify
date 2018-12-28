import gql from 'graphql-tag';

export default gql`
  mutation UpdateDocumentBody($documentId: ID!, $body: String!) {
    updateDocumentBody(documentId: $documentId, body: $body) {
      document {
        id
        body
      }
    }
  }
`;
