class Types::Mutation < Types::Base
  field :create_document, mutation: Mutations::CreateDocument
  field :update_document_content, mutation: Mutations::UpdateDocumentContent
end
