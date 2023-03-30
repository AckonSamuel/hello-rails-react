class Message < ApplicationRecord
  validates :greeting, presence: true, length: { in: 1..200 }
end
