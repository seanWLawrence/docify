module Types
  class Query < Types::Base
    field :document, Types::Document, null: true do
      argument :document_id, ID, required: true
    end

    def document(document_id:)
      ::User.find(current_user.id).documents.find(document_id)
    end

    field :viewer, Types::User, null: true

    def viewer
      current_user
    end
  end
end
