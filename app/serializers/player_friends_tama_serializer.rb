class PlayerFriendsTamaSerializer < ActiveModel::Serializer
  attributes :id, :guestbook
  has_one :player
  has_one :tama_character
end
