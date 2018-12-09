json.extract! document, :id, :title, :body, :private, :user_id, :created_at, :updated_at
json.url document_url(document, format: :json)
