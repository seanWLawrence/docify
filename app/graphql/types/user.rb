class Types::User < Types::Base
  field :id, ID, null: false
  field :email, String, null: false
  field :created_at, Scalars::TimeStamp, null: false
  field :updated_at, Scalars::TimeStamp, null: false
  field :documents, [Types::Document], null: true
end
