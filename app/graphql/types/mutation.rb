class Types::Mutation < Types::Base
  field :create_document, mutation: Mutations::CreateDocument
  field :update_document_title, mutation: Mutations::UpdateDocumentTitle
  field :update_document_body, mutation: Mutations::UpdateDocumentBody
  field :update_document_private, mutation: Mutations::UpdateDocumentPrivate
end
