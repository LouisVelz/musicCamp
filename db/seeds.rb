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
   title: "Album 1",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist.id
 )
 album01_photo = open('https://musiccamp-seeds.s3.amazonaws.com/girl_radio.jpg')
 album01.photo.attach(io: album01_photo, filename: "girl_radio.jpg")

 album02 = Album.create(
   title: "Album 2",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist.id
 )

 album02_photo = open('https://musiccamp-seeds.s3.amazonaws.com/red_lights.jpg')
 album02.photo.attach(io: album02_photo, filename: "red_lights.jpg")

 album03 = Album.create(
   title: "Album 3",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist.id
 )

 album03_photo = open('https://musiccamp-seeds.s3.amazonaws.com/you_are_what.jpg')
 album03.photo.attach(io: album03_photo, filename: "you_are_what.jpg")

 album04 = Album.create(
   title: "Album 4",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist.id
 )

 album04_photo = open('https://musiccamp-seeds.s3.amazonaws.com/cassette2.jpg')
 album04.photo.attach(io: album04_photo, filename: "cassette2.jpg")

 album05 = Album.create(
   title: "Album 5",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_1.id
 )

 album05_photo = open('https://musiccamp-seeds.s3.amazonaws.com/keyboard.jpg')
 album05.photo.attach(io: album05_photo, filename: "keyboard.jpg")

 album06 = Album.create(
   title: "Album 6",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_1.id
 )

 album06_photo = open('https://musiccamp-seeds.s3.amazonaws.com/headphones.jpg')
 album06.photo.attach(io: album06_photo, filename: "headphones.jpg")

 album07 = Album.create(
   title: "Album 7",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_1.id
 )

 album07_photo = open('https://musiccamp-seeds.s3.amazonaws.com/nice_guitar.jpg')
 album07.photo.attach(io: album07_photo, filename: "nice_guitar.jpg")

 album08 = Album.create(
   title: "Album 8",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_2.id
 )

 album08_photo = open('https://musiccamp-seeds.s3.amazonaws.com/vinyl.jpg')
 album08.photo.attach(io: album08_photo, filename: "vinyl.jpg")

 album09 = Album.create(
   title: "Album 9",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_2.id
 )

 album09_photo = open('https://musiccamp-seeds.s3.amazonaws.com/drumset.jpg')
 album09.photo.attach(io: album09_photo, filename: "drumset.jpg")

 album10 = Album.create(
   title: "Album 10",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_3.id
 )

 album10_photo = open('https://musiccamp-seeds.s3.amazonaws.com/black_and_white.jpg')
 album10.photo.attach(io: album10_photo, filename: "black_and_white.jpg")

 album11 = Album.create(
   title: "Album 11",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_3.id
 )

 album11_photo = open('https://musiccamp-seeds.s3.amazonaws.com/playing_guitar.jpg')
 album11.photo.attach(io: album11_photo, filename: "playing_guitar.jpg")

 album12 = Album.create(
   title: "Album 12",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_3.id
 )

 album12_photo = open('https://musiccamp-seeds.s3.amazonaws.com/guitars3.jpg')
 album12.photo.attach(io: album12_photo, filename: "guitars3.jpg")

 album13 = Album.create(
   title: "Album 13",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_4.id
 )

 album13_photo = open('https://musiccamp-seeds.s3.amazonaws.com/pink_headphones.jpg')
 album13.photo.attach(io: album13_photo, filename: "pink_headphones.jpg")

 album14 = Album.create(
   title: "Album 14",
   description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_4.id
 )

 album14_photo = open('https://musiccamp-seeds.s3.amazonaws.com/fire_guitar.jpg')
 album14.photo.attach(io: album14_photo, filename: "fire_guitar.jpg")

 album15 = Album.create(
   title: "Album 15",
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
song01_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song01.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song02_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song02.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song03_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song03.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song04_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song04.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song05_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song05.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song06_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song06.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song07_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song07.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song08_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song08.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song09_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song09.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song10_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song10.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song11_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song11.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song12_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song12.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

song13 = Song.create(
    title: "Picture Perfect",
    track_num: 3,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album03.id,
    artist_id: album03.artist_id
)
song13_song = open('https://musiccamp-seeds.s3.amazonaws.com/Yung_Kartz_-_05_-_Picture_Perfect.mp3')
song13.song.attach(io: song13_song, filename: "Yung_Kartz_-_05_-_Picture_Perfect.mp3")
song13_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song13.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song14_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song14.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song15_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song15.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song16_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song16.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song17_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song17.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song18_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song18.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song19_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song19.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song20_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song20.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song21_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song21.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song22_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song22.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song23_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song23.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song24_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song24.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song25_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song25.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

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
song26_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song26.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

song27 = Song.create(
    title: "A_Little_Swing_Music",
    track_num: 1,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album08.id,
    artist_id: album08.artist_id
)
song27_song = open('https://musiccamp-seeds.s3.amazonaws.com/Dee_Yan-Key_-_10_-_A_Little_Swing_Music.mp3')
song27.song.attach(io: song27_song, filename: "Dee_Yan-Key_-_10_-_A_Little_Swing_Music.mp3")
song27_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song27.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

song28 = Song.create(
    title: "Balmy_Summer_Night",
    track_num: 2,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album08.id,
    artist_id: album08.artist_id
)
song28_song = open('https://musiccamp-seeds.s3.amazonaws.com/Dee_Yan-Key_-_02_-_Balmy_Summer_Night.mp3')
song28.song.attach(io: song28_song, filename: "Dee_Yan-Key_-_02_-_Balmy_Summer_Night.mp3")
song28_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song28.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

song29 = Song.create(
    title: "Spring_Swing",
    track_num: 1,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album09.id,
    artist_id: album09.artist_id
)
song29_song = open('https://musiccamp-seeds.s3.amazonaws.com/Dee_Yan-Key_-_03_-_Spring_Swing.mp3')
song29.song.attach(io: song29_song, filename: "Dee_Yan-Key_-_03_-_Spring_Swing.mp3")
song29_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song29.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

song30 = Song.create(
    title: "Bees",
    track_num: 2,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album09.id,
    artist_id: album09.artist_id
)
song30_song = open('https://musiccamp-seeds.s3.amazonaws.com/Dee_Yan-Key_-_04_-_Bees.mp3')
song30.song.attach(io: song30_song, filename: "Dee_Yan-Key_-_04_-_Bees.mp3")
song30_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song30.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

song31 = Song.create(
    title: "In_Former_Rings",
    track_num: 1,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album10.id,
    artist_id: album10.artist_id
)
song31_song = open('https://musiccamp-seeds.s3.amazonaws.com/Unheard_Music_Concepts_-_In_Former_Rings.mp3')
song31.song.attach(io: song31_song, filename: "Unheard_Music_Concepts_-_In_Former_Rings.mp3")
song31_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song31.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

song32 = Song.create(
    title: "Microwave",
    track_num: 2,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album10.id,
    artist_id: album10.artist_id
)
song32_song = open('https://musiccamp-seeds.s3.amazonaws.com/Unheard_Music_Concepts_-_22_-_Microwave.mp3')
song32.song.attach(io: song32_song, filename: "Unheard_Music_Concepts_-_22_-_Microwave.mp3")
song32_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song32.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

song33 = Song.create(
    title: "Turning",
    track_num: 1,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album11.id,
    artist_id: album11.artist_id
)
song33_song = open('https://musiccamp-seeds.s3.amazonaws.com/Unheard_Music_Concepts_-_15_-_Turning.mp3')
song33.song.attach(io: song33_song, filename: "Unheard_Music_Concepts_-_15_-_Turning.mp3")
song33_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song33.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

song34 = Song.create(
    title: "Depressed_Buddhist",
    track_num: 2,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album11.id,
    artist_id: album11.artist_id
)
song34_song = open('https://musiccamp-seeds.s3.amazonaws.com/Unheard_Music_Concepts_-_14_-_Depressed_Buddhist.mp3')
song34.song.attach(io: song34_song, filename: "Unheard_Music_Concepts_-_14_-_Depressed_Buddhist.mp3")
song34_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song34.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

song35 = Song.create(
    title: "Smuggler",
    track_num: 1,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album12.id,
    artist_id: album12.artist_id
)
song35_song = open('https://musiccamp-seeds.s3.amazonaws.com/Smuggler_ID_1130.mp3')
song35.song.attach(io: song35_song, filename: "Smuggler_ID_1130.mp3")
song35_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song35.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

song36 = Song.create(
    title: "The_Lasso_of_Time",
    track_num: 2,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album12.id,
    artist_id: album12.artist_id
)
song36_song = open('https://musiccamp-seeds.s3.amazonaws.com/Unheard_Music_Concepts_-_The_Lasso_of_Time.mp3')
song36.song.attach(io: song36_song, filename: "Unheard_Music_Concepts_-_The_Lasso_of_Time.mp3")
song36_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song36.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

song37 = Song.create(
    title: "Sounding_Steam_Engine",
    track_num: 1,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album13.id,
    artist_id: album13.artist_id
)
song37_song = open('https://musiccamp-seeds.s3.amazonaws.com/Sounding_Steam_Engine_ID_1267.mp3')
song37.song.attach(io: song37_song, filename: "Sounding_Steam_Engine_ID_1267.mp3")
song37_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song37.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

song38 = Song.create(
    title: "Played_by_Ear",
    track_num: 2,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album13.id,
    artist_id: album13.artist_id
)
song38_song = open('https://musiccamp-seeds.s3.amazonaws.com/Unheard_Music_Concepts_-_Played_by_Ear.mp3')
song38.song.attach(io: song38_song, filename: "Unheard_Music_Concepts_-_Played_by_Ear.mp3")
song38_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song38.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

song39 = Song.create(
    title: "Waltz_For_a_Memory",
    track_num: 1,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album14.id,
    artist_id: album14.artist_id
)
song39_song = open('https://musiccamp-seeds.s3.amazonaws.com/Mela_-_10_-_Waltz_For_a_Memory.mp3')
song39.song.attach(io: song39_song, filename: "Mela_-_10_-_Waltz_For_a_Memory.mp3")
song39_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song39.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

song40 = Song.create(
    title: "The_Strip",
    track_num: 2,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album14.id,
    artist_id: album14.artist_id
)
song40_song = open('https://musiccamp-seeds.s3.amazonaws.com/Mela_-_09_-_The_Strip.mp3')
song40.song.attach(io: song40_song, filename: "Mela_-_09_-_The_Strip.mp3")
song40_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song40.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

song41 = Song.create(
    title: "Good_Times_Walk",
    track_num: 1,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album15.id,
    artist_id: album15.artist_id
)
song41_song = open('https://musiccamp-seeds.s3.amazonaws.com/Good_Times_Walk_-_Delay_ID_1266.mp3')
song41.song.attach(io: song41_song, filename: "Good_Times_Walk_-_Delay_ID_1266.mp3")
song41_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song41.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")

song42 = Song.create(
    title: "Dixie_Parade",
    track_num: 2,
    description: "Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album15.id,
    artist_id: album15.artist_id
)
song42_song = open('https://musiccamp-seeds.s3.amazonaws.com/Lobo_Loco_-_01_-_Dixie_Parade_ID_1187.mp3')
song42.song.attach(io: song42_song, filename: "Lobo_Loco_-_01_-_Dixie_Parade_ID_1187.mp3")
song42_photo = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song42.photo.attach(io: song01_photo, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")
