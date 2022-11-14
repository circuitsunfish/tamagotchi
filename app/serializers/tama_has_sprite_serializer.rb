class TamaHasSpriteSerializer < ActiveModel::Serializer
  attributes :id
  has_one :sprite
  has_one :tama_character
end
