class CreatePlayerHasFoods < ActiveRecord::Migration[7.0]
  def change
    create_table :player_has_foods do |t|
      t.references :player, null: false, foreign_key: true
      t.references :sprite, null: false, foreign_key: true
      t.integer :quantity

      t.timestamps
    end
  end
end
