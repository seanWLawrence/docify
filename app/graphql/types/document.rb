class Types::Document < Types::Base
  field :id, ID, null: false
  field :title, String, null: false
  field :private, Boolean, null: false
  field :user_id, ID, null: false
  field :created_at, Scalars::TimeStamp, null: false
  field :updated_at, Scalars::TimeStamp, null: false
  field :user, Types::User.connection_type, null: false
end
