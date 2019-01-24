module ViewerDocuments = [%graphql
  {|
    query documentsQuery {
      viewer {
        documents {
          id
          content
          createdAt
          updatedAt
        }
      }
    }
  |}
];

module Query = ReasonApollo.CreateQuery(ViewerDocuments);