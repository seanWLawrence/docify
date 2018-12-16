class Document < ApplicationRecord
  belongs_to :user

  def all
    Document.all
  end
end
