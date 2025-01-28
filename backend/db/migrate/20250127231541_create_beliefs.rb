class CreateBeliefs < ActiveRecord::Migration[8.0]
  def change
    create_table :beliefs do |t|
      t.string :title
      t.text :description
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
