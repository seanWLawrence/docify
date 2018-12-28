import gql from 'graphql-tag';

export default gql`
  mutation UpdateDocumentTitle($documentId: ID!, $title: String!) {
    updateDocumentTitle(documentId: $documentId, title: $title) {
      document {
        id
        title
      }
    }
  }
`;
