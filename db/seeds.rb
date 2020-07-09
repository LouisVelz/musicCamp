# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Album.destroy_all
Song.destroy_all

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
    track_num: 1,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id,
    artist_id: album01.artist_id
)
song01_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song01.song.attach(io: song01_song, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

song02 = Song.create(
    title: "JOn est bien",
    track_num: 2,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id,
    artist_id: album01.artist_id
)
song02_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_08_-_On_est_bien_l.mp3')
song02.song.attach(io: song02_song, filename: "Monplaisir_-_08_-_On_est_bien_l.mp3")

song03 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 3,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id,
    artist_id: album01.artist_id
)
song03_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song03.song.attach(io: song03_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")

song04 = Song.create(
    title: "Monplaisir #6",
    track_num: 4,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id,
    artist_id: album01.artist_id
)
song04_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_11_-_6.mp3')
song04.song.attach(io: song04_song, filename: "Monplaisir_-_11_-_6.mp3")

song05 = Song.create(
    title: "Theme Song",
    track_num: 5,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id,
    artist_id: album01.artist_id
)
song05_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_01_-_Theme_Song.mp3')
song05.song.attach(io: song05_song, filename: "Monplaisir_-_01_-_Theme_Song.mp3")

song06 = Song.create(
    title: "Traveling in your mind",
    track_num: 1,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album02.id,
    artist_id: album02.artist_id
)
song06_song = open('https://musiccamp-seeds.s3.amazonaws.com/Loyalty_Freak_Music_-_05_-_Traveling_in_your_mind.mp3')
song06.song.attach(io: song06_song, filename: "Loyalty_Freak_Music_-_05_-_Traveling_in_your_mind.mp3")

song07 = Song.create(
    title: "Monarch of the street",
    track_num: 2,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album02.id,
    artist_id: album02.artist_id
)
song07_song = open('https://musiccamp-seeds.s3.amazonaws.com/Loyalty_Freak_Music_-_07_-_Monarch_of_the_street.mp3')
song07.song.attach(io: song07_song, filename: "Loyalty_Freak_Music_-_07_-_Monarch_of_the_street.mp3")

song08 = Song.create(
    title: "People are spinning",
    track_num: 3,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album02.id,
    artist_id: album02.artist_id
)
song08_song = open('https://musiccamp-seeds.s3.amazonaws.com/Loyalty_Freak_Music_-_06_-_People_are_spinning.mp3')
song08.song.attach(io: song08_song, filename: "Loyalty_Freak_Music_-_06_-_People_are_spinning.mp3")

song09 = Song.create(
    title: "Dans le dnide la saturation absolue",
    track_num: 4,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album02.id,
    artist_id: album02.artist_id
)
song09_song = open('https://musiccamp-seeds.s3.amazonaws.com/Frederic_Lardon_feat_Laura_Palme_-_06_-_Dans_le_dnide_la_saturation_absolue.mp3')
song09.song.attach(io: song09_song, filename: "Frederic_Lardon_feat_Laura_Palme_-_06_-_Dans_le_dnide_la_saturation_absolue.mp3")

song10 = Song.create(
    title: "Dans le nid de la gupe massone",
    track_num: 5,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album02.id,
    artist_id: album02.artist_id
)
song10_song = open('https://musiccamp-seeds.s3.amazonaws.com/Frederic_Lardon_feat_Laura_Palme_-_07_-_Dans_le_nid_de_la_gupe_massone.mp3')
song10.song.attach(io: song10_song, filename: "Frederic_Lardon_feat_Laura_Palme_-_07_-_Dans_le_nid_de_la_gupe_massone.mp3")

song11= Song.create(
    title: "Intranet",
    track_num: 1,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album03.id,
    artist_id: album03.artist_id
)
song11_song = open('https://musiccamp-seeds.s3.amazonaws.com/Yung_Kartz_-_03_-_Intranet.mp3')
song11.song.attach(io: song11_song, filename: "Yung_Kartz_-_03_-_Intranet.mp3")

song12 = Song.create(
    title: "One Way",
    track_num: 2,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album03.id,
    artist_id: album03.artist_id
)
song12_song = open('https://musiccamp-seeds.s3.amazonaws.com/Yung_Kartz_-_04_-_One_Way.mp3')
song12.song.attach(io: song12_song, filename: "Yung_Kartz_-_04_-_One_Way.mp3")

song13 = Song.create(
    title: "Picture Perfect",
    track_num: 3,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album03.id,
    artist_id: album03.artist_id
)
song13_song = open('https://musiccamp-seeds.s3.amazonaws.com/MYung_Kartz_-_05_-_Picture_Perfect.mp3')
song13.song.attach(io: song13_song, filename: "MYung_Kartz_-_05_-_Picture_Perfect.mp3")

song14 = Song.create(
    title: "Stranger",
    track_num: 4,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album03.id,
    artist_id: album03.artist_id
)
song14_song = open('https://musiccamp-seeds.s3.amazonaws.com/Yung_Kartz_-_02_-_Stranger.mp3')
song14.song.attach(io: song14_song, filename: "Yung_Kartz_-_02_-_Stranger.mp3")

song15 = Song.create(
    title: "Landline",
    track_num: 1,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album04.id,
    artist_id: album04.artist_id
)
song15_song = open('https://musiccamp-seeds.s3.amazonaws.com/Yung_Kartz_-_08_-_Landline.mp3')
song15.song.attach(io: song15_song, filename: "Yung_Kartz_-_08_-_Landline.mp3")

song16 = Song.create(
    title: "Horizon Ending",
    track_num: 2,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album04.id,
    artist_id: album04.artist_id
)
song16_song = open('https://musiccamp-seeds.s3.amazonaws.com/Soft_and_Furious_-_09_-_Horizon_Ending.mp3')
song16.song.attach(io: song16_song, filename: "Soft_and_Furious_-_09_-_Horizon_Ending.mp3")

song17 = Song.create(
    title: "Tequila Moonrise",
    track_num: 3,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album04.id,
    artist_id: album04.artist_id
)
song17_song = open('https://musiccamp-seeds.s3.amazonaws.com/Tequila_Moonrise_-_09_-_Tequila_Moonrise.mp3')
song17.song.attach(io: song17_song, filename: "Tequila_Moonrise_-_09_-_Tequila_Moonrise.mp3")

song18 = Song.create(
    title: "Lost European",
    track_num: 1,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album05.id,
    artist_id: album05.artist_id
)
song18_song = open('https://musiccamp-seeds.s3.amazonaws.com/The+Beginning+(Of+the+End)+-+Lost+European.mp3')
song18.song.attach(io: song18_song, filename: "The Beginning (Of the End) - Lost European.mp3")

song19 = Song.create(
    title: "Urban Sunrise ",
    track_num: 2,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album05.id,
    artist_id: album05.artist_id
)
song19_song = open('https://musiccamp-seeds.s3.amazonaws.com/Urban+Sunrise+.mp3')
song19.song.attach(io: song19_song, filename: "Urban Sunrise .mp3")

song20 = Song.create(
    title: "Violin Bach",
    track_num: 3,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album05.id,
    artist_id: album05.artist_id
)
song20_song = open('https://musiccamp-seeds.s3.amazonaws.com/Bach.mp3')
song20.song.attach(io: song20_song, filename: "Bach.mp3")

song21 = Song.create(
    title: "The Chorus Ceases Instrumental",
    track_num: 1,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album06.id,
    artist_id: album06.artist_id
)
song21_song = open('https://musiccamp-seeds.s3.amazonaws.com/Chad_Crouch_-_The_Chorus_Ceases_Instrumental.mp3')
song21.song.attach(io: song21_song, filename: "Chad_Crouch_-_The_Chorus_Ceases_Instrumental.mp3")

song22 = Song.create(
    title: "The Light filtering Canopy Instrumental",
    track_num: 2,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album06.id,
    artist_id: album06.artist_id
)
song22_song = open('https://musiccamp-seeds.s3.amazonaws.com/Chad_Crouch_-_The_Light-filtering_Canopy_Instrumental.mp3')
song22.song.attach(io: song22_song, filename: "Chad_Crouch_-_The_Light-filtering_Canopy_Instrumental.mp3")

song23 = Song.create(
    title: "Feeding Flock Instrumental",
    track_num: 3,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album06.id,
    artist_id: album06.artist_id
)
song23_song = open('https://musiccamp-seeds.s3.amazonaws.com/Chad_Crouch_-_10_-_Feeding_Flock_Instrumental.mp3')
song23.song.attach(io: song23_song, filename: "Chad_Crouch_-_10_-_Feeding_Flock_Instrumental.mp3")

song24 = Song.create(
    title: "Sentinel",
    track_num: 1,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album07.id,
    artist_id: album07.artist_id
)
song24_song = open('https://musiccamp-seeds.s3.amazonaws.com/Kai_Engel_-_04_-_Sentinel.mp3')
song24.song.attach(io: song24_song, filename: "Kai_Engel_-_04_-_Sentinel.mp3")

song25 = Song.create(
    title: "Homeroad",
    track_num: 2,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album07.id,
    artist_id: album07.artist_id
)
song25_song = open('https://musiccamp-seeds.s3.amazonaws.com/Kai_Engel_-_09_-_Homeroad.mp3')
song25.song.attach(io: song25_song, filename: "Kai_Engel_-_09_-_Homeroad.mp3")

song26 = Song.create(
    title: "Interception",
    track_num: 3,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album07.id,
    artist_id: album07.artist_id
)
song26_song = open('https://musiccamp-seeds.s3.amazonaws.com/Kai_Engel_-_07_-_Interception.mp3')
song26.song.attach(io: song26_song, filename: "Kai_Engel_-_07_-_Interception.mp3")
