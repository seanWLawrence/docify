class Types::Mutation < Types::Base
  field :update_document, mutation: Mutations::UpdateDocument
  field :update_document_title, mutation: Mutations::UpdateDocumentTitle
  field :update_document_body, mutation: Mutations::UpdateDocumentBody
  field :update_document_private, mutation: Mutations::UpdateDocumentPrivate
end
