class Types::User < Types::Base
  field :id, ID, null: false
  field :email, String, null: false
  field :created_at, Scalars::TimeStamp, null: false
  field :updated_at, Scalars::TimeStamp, null: false
  field :encrypted_password, String, null: false
  field :reset_password_token, String, null: true
  field :reset_password_sent_at, Scalars::TimeStamp, null: true
  field :remember_created_at, Scalars::TimeStamp, null: true
  field :documents, [Types::Document.connection_type], null: true
end
