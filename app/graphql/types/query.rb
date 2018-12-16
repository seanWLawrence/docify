class Types::Query < Types::Base
  field :document, Types::Document, null: false do
    description "Find a specific document by id"
    argument :id, ID, required: true
  end

  field :documents, [Types::Document], null: false do
    description "Find all documents for a specific user"
    argument :user_id, ID, required: true
  end

  field :node, field: GraphQL::Relay::Node.field, null: true

  field :nodes, field: GraphQL::Relay::Node.plural_field

  field :user, Types::User, null: false do
    description "Find a specific user by id"
    argument :user_id, ID, required: true
  end

  field :users, [Types::User], null: false

  field :viewer, Types::User, null: true

  def documents(user_id:)
    Document.all.where(user_id: user_id)
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

  def document(id:)
    Document.find(id)
  end
end
