class RemoveColumnTitleFromDocuments < ActiveRecord::Migration[5.1]
  def change
    remove_column :documents, :title, :string
  end
end
