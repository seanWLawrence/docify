import gql from 'graphql-tag';

export default gql`
  mutation updateDocument($input: UpdateDocumentMutationInput!) {
    updateDocument(input: $input) {
      document {
        title
        body
      }
    }
  }
`;
