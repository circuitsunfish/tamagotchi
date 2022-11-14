rails g resource gm_responses response --no-test-framework
rails g resource player name password_digest --no-test-framework
rails g resource tama_character name hunger:integer attention:integer sick:boolean weight:float height:float --no-test-framework
rails g resource sprite image_path --no-test-framework
rails g resource Player_Has_Food player:references sprite:references quantity:integer --no-test-framework
rails g resource Tama_Has_Sprite sprite:belongs_to tama_character:belongs_to --no-test-framework
rails g resource Player_Friends_Tama player:belongs_to tama_character:belongs_to guestbook --no-test-framework
rails g resource Player_Owns_Tama player:references tama_character:references bio relationship:integer --no-test-framework