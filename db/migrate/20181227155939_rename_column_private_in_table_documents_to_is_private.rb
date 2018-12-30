class RenameColumnPrivateInTableDocumentsToIsPrivate < ActiveRecord::Migration[5.1]
  def change
    rename_column :documents, :private, :is_private
  end
end
