class Player < ApplicationRecord
    has_secure_password

    validates :name, presence: true
    validates :name, length: {minimum: 2}

    validates :password, length: {minimum: 6}
end
