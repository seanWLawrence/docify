import gql from 'graphql-tag';

export default gql`
  mutation UpdateDocumentContent($documentId: ID!, $content: String!) {
    updateDocumentBody(documentId: $documentId, content: $content) {
      document {
        id
        content
      }
    }
  }
`;
