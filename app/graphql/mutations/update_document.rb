class Mutations::UpdateDocument < Mutations::Base
  argument :document_id, ID, required: true, loads: Types::Document
  argument :title, String, required: false
  argument :body, String, required: false
  argument :private, Boolean, required: false

  field :document, Types::Document, null: false
  field :errors, [String], null: false

  def resolve(document_id:, title:, body:, private:)
    document = ::Document.find(document_id).where(user_id: current_user.id)
    document.build(title: title, body: body, user_id: current_user.id)

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
