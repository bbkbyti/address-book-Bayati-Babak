class Person < ApplicationRecord
  has_many :addresses, dependent: :delete_all
  has_many :emails, dependent: :delete_all
  has_many :phones, dependent: :delete_all
end
