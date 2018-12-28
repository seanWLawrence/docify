class Types::Document < Types::Base
  field :id, ID, null: false
  field :content, String, null: true
  field :created_at, Scalars::TimeStamp, null: false
  field :updated_at, Scalars::TimeStamp, null: false
  field :user, Types::User, null: false
end
