module Types
  class Document < Types::Base
    field :id, ID, null: false
    field :content, String, null: true do
      argument :format,
               Enums::DocumentContentFormat,
               required: false,
               default_value: :html
    end
    field :created_at, Scalars::TimeStamp, null: false
    field :updated_at, Scalars::TimeStamp, null: false
    field :user, Types::User, null: false

    def content(format:)
      if format == :html
        object.content
      else
        Kramdown::Document.new(object.content, html_to_native: true).to_kramdown
      end
    end
  end
end
