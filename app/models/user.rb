class User < ApplicationRecord
  has_secure_password

  has_many :addresses, dependent: :delete_all
  has_many :phones, dependent: :delete_all
  has_many :emails, dependent: :delete_all

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
end
