class CreateTamaCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :tama_characters do |t|
      t.string :name
      t.integer :hunger
      t.integer :attention
      t.boolean :sick
      t.float :weight
      t.float :height

      t.timestamps
    end
  end
end
