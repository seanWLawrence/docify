class Types::Document < Types::Base
  field :id, ID, null: false
  field :title, String, null: false
  field :body, String, null: true
  field :private, Boolean, null: false
  field :created_at, Scalars::TimeStamp, null: false
  field :updated_at, Scalars::TimeStamp, null: false
  field :user, Types::User, null: false
end
