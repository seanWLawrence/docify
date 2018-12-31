module Mutations
  class UpdateDocumentContent < Mutations::Base
    argument :document_id, ID, required: true
    argument :content, String, required: true

    field :document, Types::Document, null: false
    field :errors, [String], null: false

    def resolve(document_id:, content:)
      document = User.find(current_user.id).documents.find(document_id)
      html_sanitizer = Rails::Html::WhiteListSanitizer.new

      document.update(content: html_sanitizer.sanitize(content))

      if document.save
        {
          document: document,
          errors: []
        }
      else
        {
          document: nil,
          errors: document.errors.full_messages
        }
      end
    end
  end
end
