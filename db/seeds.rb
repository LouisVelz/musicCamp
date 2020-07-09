# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Song.destroy_all
Album.destroy_all

new_artist = User.create(
email: "new_artist@gmail.com",
 password: "hunter12",
 username: "Guitar Player"
 description: "Lorem ipsum dolor sit amet,
 consectetur adipisicing elit. Delectus quod, placeat accusamus.")

 new_artist_photo = open('')