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
 username: "Guitar Player",
 description: "Lorem ipsum dolor sit amet,
 consectetur adipisicing elit. Delectus quod, placeat accusamus.")

 new_artist_photo = open('https://musiccamp-seeds.s3.amazonaws.com/music.jpg')
 new_artist.photo.attach(io: new_artist_photo, filename: "music.jpeg")

new_artist_1 = User.create(
email: "new_artist24@gmail.com",
 password: "hunter12",
 username: "Singer",
 description: "Lorem ipsum dolor sit amet,
 consectetur adipisicing elit. Delectus quod, placeat accusamus.")

 new_artist_photo_1 = open('https://musiccamp-seeds.s3.amazonaws.com/guitar.jpg')
 new_artist_1.photo.attach(io: new_artist_photo_1, filename: "guitar.jpeg")

new_artist_2 = User.create(
email: "new_artist54@gmail.com",
 password: "hunter12",
 username: "Experienced Musician",
 description: "Lorem ipsum dolor sit amet,
 consectetur adipisicing elit. Delectus quod, placeat accusamus.")

 new_artist_photo_2 = open('https://musiccamp-seeds.s3.amazonaws.com/list5.png')
 new_artist_2.photo.attach(io: new_artist_photo_2, filename: "list5.png")

new_artist_3 = User.create(
email: "new_artist74@gmail.com",
 password: "hunter12",
 username: "Guitar Player Girl",
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
   title: "Lorem Ipsum",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist.id
 )
 album01_photo = open('https://musiccamp-seeds.s3.amazonaws.com/girl_radio.jpg')
 album01.photo.attach(io: album01_photo, filename: "girl_radio.jpg")

 album02 = Album.create(
   title: "Lorem Ipsum",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist.id
 )

 album02_photo = open('https://musiccamp-seeds.s3.amazonaws.com/red_lights.jpg')
 album02.photo.attach(io: album02_photo, filename: "red_lights.jpg")

 album03 = Album.create(
   title: "Lorem Ipsum",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist.id
 )

 album03_photo = open('https://musiccamp-seeds.s3.amazonaws.com/you_are_what.jpg')
 album03.photo.attach(io: album03_photo, filename: "you_are_what.jpg")

 album04 = Album.create(
   title: "Lorem Ipsum",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist.id
 )

 album04_photo = open('https://musiccamp-seeds.s3.amazonaws.com/cassette2.jpg')
 album04.photo.attach(io: album04_photo, filename: "cassette2.jpg")

 album05 = Album.create(
   title: "Lorem Ipsum",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_1.id
 )

 album05_photo = open('https://musiccamp-seeds.s3.amazonaws.com/headphones.jpg')
 album05.photo.attach(io: album05_photo, filename: "headphones.jpg")

 album06 = Album.create(
   title: "Lorem Ipsum",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_1.id
 )

 album06_photo = open('https://musiccamp-seeds.s3.amazonaws.com/headphones.jpg')
 album06.photo.attach(io: album06_photo, filename: "headphones.jpg")

 album07 = Album.create(
   title: "Lorem Ipsum",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_1.id
 )

 album07_photo = open('https://musiccamp-seeds.s3.amazonaws.com/nice_guitar.jpg')
 album07.photo.attach(io: album07_photo, filename: "nice_guitar.jpg")

 album08 = Album.create(
   title: "Lorem Ipsum",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_2.id
 )

 album08_photo = open('https://musiccamp-seeds.s3.amazonaws.com/vinyl.jpg')
 album08.photo.attach(io: album08_photo, filename: "vinyl.jpg")

 album09 = Album.create(
   title: "Lorem Ipsum",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_2.id
 )

 album09_photo = open('https://musiccamp-seeds.s3.amazonaws.com/drumset.jpg')
 album09.photo.attach(io: album09_photo, filename: "drumset.jpg")

 album10 = Album.create(
   title: "Lorem Ipsum",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_3.id
 )

 album10_photo = open('https://musiccamp-seeds.s3.amazonaws.com/black_and_white.jpg')
 album10.photo.attach(io: album10_photo, filename: "black_and_white.jpg")

 album11 = Album.create(
   title: "Lorem Ipsum",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_3.id
 )

 album11_photo = open('https://musiccamp-seeds.s3.amazonaws.com/playing_guitar.jpg')
 album11.photo.attach(io: album11_photo, filename: "playing_guitar.jpg")

 album12 = Album.create(
   title: "Lorem Ipsum",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_3.id
 )

 album12_photo = open('https://musiccamp-seeds.s3.amazonaws.com/guitars3.jpg')
 album12.photo.attach(io: album12_photo, filename: "guitars3.jpg")

 album13 = Album.create(
   title: "Lorem Ipsum",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_4.id
 )

 album13_photo = open('https://musiccamp-seeds.s3.amazonaws.com/pink_headphones.jpg')
 album13.photo.attach(io: album13_photo, filename: "pink_headphones.jpg")

 album14 = Album.create(
   title: "Lorem Ipsum",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_4.id
 )

 album14_photo = open('https://musiccamp-seeds.s3.amazonaws.com/fire_guitar.jpg')
 album14.photo.attach(io: album14_photo, filename: "fire_guitar.jpg")

 album15 = Album.create(
   title: "Lorem Ipsum",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_4.id
 )

 album15_photo = open('https://musiccamp-seeds.s3.amazonaws.com/other_cassette.jpg')
 album15.photo.attach(io: album15_photo, filename: "other_cassette.jpg")

song01 = Song.create(
    title: "Je voudrais tre un pigeon",
    track_num: 6,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song01_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song01.photo.attach(io: song01_song, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

song02 = Song.create(
    title: "JOn est bien",
    track_num: 8,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song02_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_08_-_On_est_bien_l.mp3')
song02.photo.attach(io: song02_song, filename: "Monplaisir_-_08_-_On_est_bien_l.mp3")

song03 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song03_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song03.photo.attach(io: song03_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song04 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song04_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song04.photo.attach(io: song04_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song05 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song05_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song05.photo.attach(io: song05_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song06 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song06_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song06.photo.attach(io: song06_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song07 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song07_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song07.photo.attach(io: song07_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song08 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song08_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song08.photo.attach(io: song08_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song09 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song09_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song09.photo.attach(io: song09_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song10 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song10_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song10.photo.attach(io: song10_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song11= Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song11_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song11.photo.attach(io: song11_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song12 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song12_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song12.photo.attach(io: song12_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song13 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song13_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song13.photo.attach(io: song13_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song14 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song14_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song14.photo.attach(io: song14_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song15 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song15_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song15.photo.attach(io: song15_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song16 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song16_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song16.photo.attach(io: song16_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song17 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song17_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song17.photo.attach(io: song17_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song18 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song18_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song18.photo.attach(io: song18_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song19 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song19_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song19.photo.attach(io: song19_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song20 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song20_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song20.photo.attach(io: song20_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song21 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song21_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song21.photo.attach(io: song21_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song22 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song22_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song22.photo.attach(io: song22_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song23 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song23_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song23.photo.attach(io: song23_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song24 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song24_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song24.photo.attach(io: song24_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song25 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song25_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song25.photo.attach(io: song25_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song26 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 9,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id
    artist_id: album01.artist_id
)
song26_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song26.photo.attach(io: song26_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")
