class TamaCharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :hunger, :attention, :sick, :weight, :height
end
