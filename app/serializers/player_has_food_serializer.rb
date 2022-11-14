class PlayerHasFoodSerializer < ActiveModel::Serializer
  attributes :id, :quantity
  has_one :player
  has_one :sprite
end
