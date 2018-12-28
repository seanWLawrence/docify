class Mutations::UpdateDocumentTitle < Mutations::Base
  argument :document_id, ID, required: true
  argument :title, String, required: true

  field :document, Types::Document, null: false
  field :errors, [String], null: false

  def resolve(document_id:, title:)
    document = ::Document.find(document_id).where(user_id: current_user.id)
    document.build(title: private)

    if document.save
      {
        document: document,
        errors: [],
      }
    else
      {
        document: nil,
        errors: document.errors.full_messages,
      }
    end
  end
end