import gql from 'graphql-tag';

export default gql`
  mutation CreateDocument(
    $title: String!
    $body: String!
    $isPrivate: Boolean
  ) {
    createDocument(title: $title, body: $body, isPrivate: $isPrivate) {
      document {
        title
        body
        isPrivate
      }
    }
  }
`;
