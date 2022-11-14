class CreatePlayerOwnsTamas < ActiveRecord::Migration[7.0]
  def change
    create_table :player_owns_tamas do |t|
      t.references :player, null: false, foreign_key: true
      t.references :tama_character, null: false, foreign_key: true
      t.string :bio
      t.integer :relationship

      t.timestamps
    end
  end
end
