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

 new_artist_photo = open('https://musiccamp-seeds.s3.amazonaws.com/music.jpg')
 new_artist.photo.attach(io: new_artist_photo, filename: "music.jpeg")

new_artist_1 = User.create(
email: "new_artist24@gmail.com",
 password: "hunter12",
 username: "Singer"
 description: "Lorem ipsum dolor sit amet,
 consectetur adipisicing elit. Delectus quod, placeat accusamus.")

 new_artist_photo_1 = open('https://musiccamp-seeds.s3.amazonaws.com/guitar.jpg')
 new_artist_1.photo.attach(io: new_artist_photo_1, filename: "guitar.jpeg")

new_artist_2 = User.create(
email: "new_artist54@gmail.com",
 password: "hunter12",
 username: "Experienced Musician"
 description: "Lorem ipsum dolor sit amet,
 consectetur adipisicing elit. Delectus quod, placeat accusamus.")

 new_artist_photo_2 = open('https://musiccamp-seeds.s3.amazonaws.com/list5.png')
 new_artist_2.photo.attach(io: new_artist_photo_2, filename: "list5.png")

new_artist_3 = User.create(
email: "new_artist74@gmail.com",
 password: "hunter12",
 username: "Guitar Player Girl"
 description: "Lorem ipsum dolor sit amet,
 consectetur adipisicing elit. Delectus quod, placeat accusamus.")

 new_artist_photo_3 = open('https://musiccamp-seeds.s3.amazonaws.com/girl1.jpg')
 new_artist_3.photo.attach(io: new_artist_photo_3, filename: "girl1.jpg")

new_artist_4 = User.create(
 email: "new_artist95@gmail.com",
 password: "hunter12",
 username: "Guitar Player Guy",
 description: "Lorem ipsum dolor sit amet,
 consectetur adipisicing elit. Delectus quod, placeat accusamus.")

 new_artist_photo_4 = open('https://musiccamp-seeds.s3.amazonaws.com/guitar2.jpg')
 new_artist_4.photo.attach(io: new_artist_photo_4, filename: "guitar2.jpg")

 album01 = Album.create(
   title: "Lorem Ipsum"
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit."
  artist_id: new_artist.id
 )
 album01_photo = open('https://musiccamp-seeds.s3.amazonaws.com/girl_radio.jpg')
 album01.photo.attach(io: album01_photo, filename: "girl_radio.jpg")

 album02 = Album.create(
   title: "Lorem Ipsum"
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit."
  artist_id: new_artist.id
 )

 album02_photo = open('https://musiccamp-seeds.s3.amazonaws.com/red_lights.jpg')
 album02.photo.attach(io: album02_photo, filename: "red_lights.jpg")

 album03 = Album.create(
   title: "Lorem Ipsum"
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit."
  artist_id: new_artist.id
 )

 album03_photo = open('https://musiccamp-seeds.s3.amazonaws.com/you_are_what.jpg')
 album03.photo.attach(io: album03_photo, filename: "you_are_what.jpg")

 album04 = Album.create(
   title: "Lorem Ipsum"
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit."
  artist_id: new_artist.id
 )

 album04_photo = open('https://musiccamp-seeds.s3.amazonaws.com/cassette2.jpg')
 album04.photo.attach(io: album04_photo, filename: "cassette2.jpg")

 album05 = Album.create(
   title: "Lorem Ipsum"
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit."
  artist_id: new_artist_1.id
 )

 album05_photo = open('https://musiccamp-seeds.s3.amazonaws.com/headphones.jpg')
 album05.photo.attach(io: album05_photo, filename: "headphones.jpg")

 album06 = Album.create(
   title: "Lorem Ipsum"
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit."
  artist_id: new_artist_1.id
 )

 album06_photo = open('https://musiccamp-seeds.s3.amazonaws.com/headphones.jpg')
 album06.photo.attach(io: album06_photo, filename: "headphones.jpg")

 album07 = Album.create(
   title: "Lorem Ipsum"
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit."
  artist_id: new_artist_1.id
 )

 album07_photo = open('https://musiccamp-seeds.s3.amazonaws.com/nice_guitar.jpg')
 album07.photo.attach(io: album07_photo, filename: "nice_guitar.jpg")

 album08 = Album.create(
   title: "Lorem Ipsum"
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit."
  artist_id: new_artist_2.id
 )

 album08_photo = open('https://musiccamp-seeds.s3.amazonaws.com/vinyl.jpg')
 album08.photo.attach(io: album08_photo, filename: "vinyl.jpg")

 album09 = Album.create(
   title: "Lorem Ipsum"
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit."
  artist_id: new_artist_2.id
 )

 album09_photo = open('https://musiccamp-seeds.s3.amazonaws.com/drumset.jpg')
 album09.photo.attach(io: album09_photo, filename: "drumset.jpg")

 album10 = Album.create(
   title: "Lorem Ipsum"
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit."
  artist_id: new_artist_3.id
 )

 album10_photo = open('https://musiccamp-seeds.s3.amazonaws.com/black_and_white.jpg')
 album10.photo.attach(io: album10_photo, filename: "black_and_white.jpg")

 album11 = Album.create(
   title: "Lorem Ipsum"
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit."
  artist_id: new_artist_3.id
 )

 album11_photo = open('https://musiccamp-seeds.s3.amazonaws.com/playing_guitar.jpg')
 album11.photo.attach(io: album11_photo, filename: "playing_guitar.jpg")

 album12 = Album.create(
   title: "Lorem Ipsum"
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit."
  artist_id: new_artist_3.id
 )

 album12_photo = open('https://musiccamp-seeds.s3.amazonaws.com/guitars3.jpg')
 album12.photo.attach(io: album12_photo, filename: "guitars3.jpg")

 album13 = Album.create(
   title: "Lorem Ipsum"
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit."
  artist_id: new_artist_4.id
 )

 album13_photo = open('https://musiccamp-seeds.s3.amazonaws.com/pink_headphones.jpg')
 album13.photo.attach(io: album13_photo, filename: "pink_headphones.jpg")

 album14 = Album.create(
   title: "Lorem Ipsum"
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit."
  artist_id: new_artist_4.id
 )

 album14_photo = open('https://musiccamp-seeds.s3.amazonaws.com/fire_guitar.jpg')
 album14.photo.attach(io: album14_photo, filename: "fire_guitar.jpg")

 album15 = Album.create(
   title: "Lorem Ipsum"
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit."
  artist_id: new_artist_4.id
 )

 album15_photo = open('https://musiccamp-seeds.s3.amazonaws.com/other_cassette.jpg')
 album15.photo.attach(io: album15_photo, filename: "other_cassette.jpg")

song01 = Song.create(
  
)

