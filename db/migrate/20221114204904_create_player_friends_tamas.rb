class CreatePlayerFriendsTamas < ActiveRecord::Migration[7.0]
  def change
    create_table :player_friends_tamas do |t|
      t.references :player, null: false, foreign_key: true
      t.references :tama_character, null: false, foreign_key: true
      t.string :guestbook

      t.timestamps
    end
  end
end
