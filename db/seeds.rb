# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#   
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
apartments = [
  {
    street: "12345 Generic Street Name"
    city: "A place"
    state: "Somewhere"
    manager: "A Shady Company"
    email: "54321generic@gmail.com"
    price: "Tree Fiddy"
    bedrooms: 1
    bathrooms: 1
    pets: "Nothing exotic"
    user_id: 1
  },
  {
    street: "3001 Esperanza Crossing Ste 1001"
    city: "Austin"
    state: "TX"
    manager: "A Deplorable Company"
    email: "59485badcompany@gmail.com"
    price: "2000"
    bedrooms: 1
    bathrooms: 1
    pets: "No pets"
    user_id: 1
  },
]

apartments.each do |each_apartment|
    Apartment.create each_apartment
    puts "creating apartments #{each_apartment}"
  end