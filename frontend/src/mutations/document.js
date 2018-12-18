import { commitMutation, graphql } from 'react-relay';

let mutation = graphql`
  mutation updateDocument($input: UpdateDocumentMutationInput!) {
    updateDocument(input: $input) {
      document {
        title
        body
      }
    }
  }
`;

let updateDocument = ({ environment, documentId, title, body }) =>
  commitMutation(environment, {
    variables: { documentId, title, body },
    onCompleted: (response, errors) => console.log('done!'),
    onError: () => console.log('failuer', errors),
  });

export default updateDocument;
