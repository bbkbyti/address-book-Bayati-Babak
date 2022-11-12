# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Person.destroy_all
Address.destroy_all
Email.destroy_all
Phone.destroy_all

@admin = User.create!(username: 'zebra', email: 'zebra@email.com', password: '123456')
@admin2 = User.create!(username: 'Elephant', email: 'elephant@email.com', password: '123456')
@admin3 = User.create!(username: 'cat', email: 'cat@email.com', password: '123456')
puts "#{User.count} users created!"

@person = Person.create!(salutation: 'Mr', first_name: 'Simba', last_name: 'King')
@person2 = Person.create!(salutation: 'Mr', first_name: 'Zazu', last_name: 'East')
@person3 = Person.create!(salutation: 'Mr', first_name: 'Pumbaa', last_name: 'North')
puts "#{Person.count} people created!"

Address.create!(
  street: Faker::Address.street_address,
  town: Faker::Address.city,
  zip_code: Faker::Address.zip_code,
  state: Faker::Address.state,
  country: Faker::Address.country,
  user: @admin,
  person: @person
)
Address.create!(
  street: Faker::Address.street_address,
  town: Faker::Address.city,
  zip_code: Faker::Address.zip_code,
  state: Faker::Address.state,
  country: Faker::Address.country,
  user: @admin2,
  person: @person2
)
Address.create!(
  street: Faker::Address.street_address,
  town: Faker::Address.city,
  zip_code: Faker::Address.zip_code,
  state: Faker::Address.state,
  country: Faker::Address.country,
  user: @admin3,
  person: @person3
)
puts "#{Address.count} addresses created!"

Email.create!(email_address: Faker::Internet.email, user: @admin, person: @person)
Email.create!(email_address: Faker::Internet.email, user: @admin2, person: @person2)
Email.create!(email_address: Faker::Internet.email, user: @admin3, person: @person3)
puts "#{Email.count} emails created!"

Phone.create!(phone_number: Faker::PhoneNumber.cell_phone, user: @admin, person: @person)
Phone.create!(phone_number: Faker::PhoneNumber.cell_phone, user: @admin2, person: @person2)
Phone.create!(phone_number: Faker::PhoneNumber.cell_phone, user: @admin3, person: @person3)
puts "#{Phone.count} phone numbers created!"
