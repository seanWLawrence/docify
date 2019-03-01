module Types
  class User < Types::Base
    field :id, ID, null: false
    field :email, Scalars::Email, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :documents, [Types::Document], null: true
  end
end
