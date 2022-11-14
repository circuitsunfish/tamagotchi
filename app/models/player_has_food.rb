class PlayerHasFood < ApplicationRecord
  belongs_to :player
  belongs_to :sprite
end
