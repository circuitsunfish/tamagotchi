class TamaCharacter < ApplicationRecord

    validates :name, presence: true
    validates :name, length: {minimum: 2}
    validates :hunger, numericality: {less_than_or_equal_to: 10}
    validates :hunger, numericality: {greater_than_or_equal_to: 0}
    validates :attention, numericality: {less_than_or_equal_to: 10}
    validates :attention, numericality: {greater_than_or_equal_to: 0}
    validates :height, numericality: {less_than_or_equal_to: 10}
    validates :height, numericality: {greater_than_or_equal_to: 0}
    validates :weight, numericality: {less_than_or_equal_to: 10}
    validates :weight, numericality: {greater_than_or_equal_to: 0}

end
