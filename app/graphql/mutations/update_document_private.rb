class Mutations::UpdateDocumentPrivate < Mutations::Base
  argument :document_id, ID, required: true
  argument :is_private, Boolean, required: true

  field :document, Types::Document, null: false
  field :errors, [String], null: false

  def resolve(document_id:, is_private:)
    document = ::Document.find(document_id).where(user_id: current_user.id)
    document.build(is_private: is_private)

    if document.save
      {
        document: document,
        documents: ::Document.all.where(user_id: current_user.id),
        errors: [],
      }
    else
      {
        document: nil,
        documents: nil,
        errors: document.errors.full_messages,
      }
    end
  end
end