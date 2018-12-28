class RenameColumnBodyFromDocumentsToContent < ActiveRecord::Migration[5.1]
  def change
    rename_column :documents, :body, :content
  end
end
