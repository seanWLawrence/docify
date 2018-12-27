class Mutations::CreateDocument < Mutations::Base
  argument :title, String, required: true
  argument :body, String, required: true
  argument :is_private, Boolean, required: false, default_value: false

  field :document, Types::Document, null: false
  field :errors, [String], null: true

  def resolve(title:, body:, is_private:)
    document = current_user.documents.build(title: title, body: body, is_private: is_private, user_id: current_user.id)

    if document.save
      {
        document: document,
        errors: nil
      }
    else
      {
        document: nil,
        errors: document.errors.full_messages
      }
    end
  end
end
