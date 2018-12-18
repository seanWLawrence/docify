class Types::Query < Types::Base
  field :document, Types::Document, null: true do
    argument :document_id, ID, required: true
  end

  def document(document_id:)
    if ::Document.find(document_id).user.id == current_user.id
      ::Document.find(document_id)
    end
  end

  field :viewer, Types::User, null: true

  def viewer
    current_user
  end
end
