rails g scaffold gm_responses response --no-test-framework
rails g scaffold player name password_digest --no-test-framework
rails g scaffold tama_character name hunger:integer attention:integer sick:boolean weight:float height:float --no-test-framework
rails g scaffold sprite image_path --no-test-framework
rails g scaffold Player_Has_Food player:references sprite:references quantity:integer --no-test-framework
rails g scaffold Tama_Has_Sprite sprite:references tama_character:references --no-test-framework
rails g scaffold Player_Friends_Tama player:references tama_character:references guestbook --no-test-framework
rails g scaffold Player_Owns_Tama player:references tama_character:references bio relationship:integer --no-test-framework