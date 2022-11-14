class PlayerOwnsTama < ApplicationRecord
  belongs_to :player
  belongs_to :tama_character
end
