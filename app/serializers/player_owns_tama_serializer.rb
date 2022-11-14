class PlayerOwnsTamaSerializer < ActiveModel::Serializer
  attributes :id, :bio, :relationship
  has_one :player
  has_one :tama_character
end
