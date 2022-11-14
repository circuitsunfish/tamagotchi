class CreateTamaHasSprites < ActiveRecord::Migration[7.0]
  def change
    create_table :tama_has_sprites do |t|
      t.belongs_to :sprite, null: false, foreign_key: true
      t.belongs_to :tama_character, null: false, foreign_key: true

      t.timestamps
    end
  end
end
