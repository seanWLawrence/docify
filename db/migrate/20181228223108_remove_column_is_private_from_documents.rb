class RemoveColumnIsPrivateFromDocuments < ActiveRecord::Migration[5.1]
  def change
    remove_column :documents, :is_private, :boolean
  end
end
