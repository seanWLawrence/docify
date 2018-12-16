class Types::Query < Types::Base
  field :document, Types::Document, null: false do
    description "Find a specific document by id"
    argument :id, ID, required: true
  end

  field :documents, [Types::Document], null: false do
    description "Find all documents, or all documents for a specific user"
    argument :user_id, ID, required: false, default_value: nil
  end

  field :node, field: GraphQL::Relay::Node.field, null: true

  field :nodes, field: GraphQL::Relay::Node.plural_field

  field :user, Types::User, null: false do
    description "Find a specific user by id"
    argument :user_id, ID, required: true
  end

  field :users, [Types::User], null: false

  field :viewer, Types::User, null: true

  def document(id:)
    Document.find(id)
  end

  def documents(user_id:)
    if user_id != nil
      Document.all.where(user_id: user_id)
    else Document.all     end
  end

  def viewer
    context[:current_user]
  end

  def user(user_id:)
    User.find(user_id)
  end

  def users
    User.all
  end
end
