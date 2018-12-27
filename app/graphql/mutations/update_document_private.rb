class Mutations::UpdateDocumentPrivate < Mutations::Base
  argument :document_id, ID, required: true, loads: Types::Document
  argument :private, Boolean, required: true

  field :document, Types::Document, null: false
  field :errors, [String], null: false

  def resolve(document_id:, private:)
    document = ::Document.find(document_id).where(user_id: current_user.id)
    document.build(private: private)

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