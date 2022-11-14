# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_11_14_204905) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "gm_responses", force: :cascade do |t|
    t.string "response"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "player_friends_tamas", force: :cascade do |t|
    t.bigint "player_id", null: false
    t.bigint "tama_character_id", null: false
    t.string "guestbook"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["player_id"], name: "index_player_friends_tamas_on_player_id"
    t.index ["tama_character_id"], name: "index_player_friends_tamas_on_tama_character_id"
  end

  create_table "player_has_foods", force: :cascade do |t|
    t.bigint "player_id", null: false
    t.bigint "sprite_id", null: false
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["player_id"], name: "index_player_has_foods_on_player_id"
    t.index ["sprite_id"], name: "index_player_has_foods_on_sprite_id"
  end

  create_table "player_owns_tamas", force: :cascade do |t|
    t.bigint "player_id", null: false
    t.bigint "tama_character_id", null: false
    t.string "bio"
    t.integer "relationship"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["player_id"], name: "index_player_owns_tamas_on_player_id"
    t.index ["tama_character_id"], name: "index_player_owns_tamas_on_tama_character_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sprites", force: :cascade do |t|
    t.string "image_path"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tama_characters", force: :cascade do |t|
    t.string "name"
    t.integer "hunger"
    t.integer "attention"
    t.boolean "sick"
    t.float "weight"
    t.float "height"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tama_has_sprites", force: :cascade do |t|
    t.bigint "sprite_id", null: false
    t.bigint "tama_character_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["sprite_id"], name: "index_tama_has_sprites_on_sprite_id"
    t.index ["tama_character_id"], name: "index_tama_has_sprites_on_tama_character_id"
  end

  add_foreign_key "player_friends_tamas", "players"
  add_foreign_key "player_friends_tamas", "tama_characters"
  add_foreign_key "player_has_foods", "players"
  add_foreign_key "player_has_foods", "sprites"
  add_foreign_key "player_owns_tamas", "players"
  add_foreign_key "player_owns_tamas", "tama_characters"
  add_foreign_key "tama_has_sprites", "sprites"
  add_foreign_key "tama_has_sprites", "tama_characters"
end
