module ViewerDocumentById = [%graphql
  {|
    query documentById($documentId: ID!) {
      document(documentId: $documentId) {
        content
      }
    }
  |}
];

module Query = ReasonApollo.CreateQuery(ViewerDocumentById);