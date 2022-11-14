class CreateTamaHasSprites < ActiveRecord::Migration[7.0]
  def change
    create_table :tama_has_sprites do |t|
      t.references :sprite, null: false, foreign_key: true
      t.references :tama_character, null: false, foreign_key: true

      t.timestamps
    end
  end
end
