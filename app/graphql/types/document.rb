class Types::Document < Types::Base
  field :id, ID, null: false
  field :content, String, null: true do
    argument :truncate,
             Enums::DocumentContentTruncate,
             required: false,
             default_value: :none
  end
  field :created_at, Scalars::TimeStamp, null: false
  field :updated_at, Scalars::TimeStamp, null: false
  field :user, Types::User, null: false

  def content(truncate:)
    if truncate == :none
      object.content
    else
      first_section, second_section = object.content.split('>')
      "#{first_section}>#{second_section}>"
    end
  end
end
