module Mutations
  class CreateDocument < Mutations::Base
    field :document, Types::Document, null: false
    field :errors, [String], null: true


    def resolve
      default_content_hash = {
        document: {
          nodes: [
            {
              object: 'block',
              type: 'paragraph',
              nodes: [
                {
                  object: 'text',
                  leaves: [
                    {
                      text: 'Write your content here...'
                    }
                  ]
                }
              ]
            }
          ]
        }
      }

      default_content = JSON.generate(default_content_hash)

      document = current_user.documents.build(
        content: default_content, user_id: current_user.id
      )

      if document.save
        {
          document: document,
          errors: nil
        }
      else
        {
          document: nil,
          errors: document.errors.full_messages
        }
      end
    end
  end
end
