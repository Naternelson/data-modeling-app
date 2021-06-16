class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :status
      t.string :model
      t.string :attachment
      t.belongs_to :user

      t.timestamps
    end
  end
end
