module Types
  class Document < Types::Base
    field :id, ID, null: false
    field :content, Scalars::SlateValue, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :user, Types::User, null: false
  end
end
