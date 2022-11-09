class Person < ApplicationRecord
  belongs_to :user

  has_many :addresses, dependent: :destroy
  has_many :emails, dependent: :destroy
  has_many :phones, dependent: :destroy
end
