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
 description: "Artist 1 decription Lorem ipsum dolor sit amet,
 consectetur adipisicing elit. Delectus quod, placeat accusamus.")

 new_artist_photo = open('https://musiccamp-seeds.s3.amazonaws.com/music.jpg')
 new_artist.photo.attach(io: new_artist_photo, filename: "music.jpeg")

new_artist_1 = User.create(
email: "new_artist24@gmail.com",
 password: "hunter12",
 username: "Singer",
 description: "Artist 2 descriptio Lorem ipsum dolor sit amet,
 consectetur adipisicing elit. Delectus quod, placeat accusamus.")

 new_artist_photo_1 = open('https://musiccamp-seeds.s3.amazonaws.com/guitar.jpg')
 new_artist_1.photo.attach(io: new_artist_photo_1, filename: "guitar.jpeg")

new_artist_2 = User.create(
email: "new_artist54@gmail.com",
 password: "hunter12",
 username: "Experienced Musician",
 description: "Artist 3 description Lorem ipsum dolor sit amet,
 consectetur adipisicing elit. Delectus quod, placeat accusamus.")

 new_artist_photo_2 = open('https://musiccamp-seeds.s3.amazonaws.com/clem-onojeghuo-zGCxdJHklhA-unsplash.jpg')
 new_artist_2.photo.attach(io: new_artist_photo_2, filename: "clem-onojeghuo-zGCxdJHklhA-unsplash.jpg")

new_artist_3 = User.create(
email: "new_artist74@gmail.com",
 password: "hunter12",
 username: "Guitar Player Girl",
 description: "Artist 4 description Lorem ipsum dolor sit amet,
 consectetur adipisicing elit. Delectus quod, placeat accusamus.")

 new_artist_photo_3 = open('https://musiccamp-seeds.s3.amazonaws.com/girl1.jpg')
 new_artist_3.photo.attach(io: new_artist_photo_3, filename: "girl1.jpg")

new_artist_4 = User.create(
 email: "new_artist95@gmail.com",
 password: "hunter12",
 username: "Guitar Player Guy",
 description: "Artist 5 description Lorem ipsum dolor sit amet,
 consectetur adipisicing elit. Delectus quod, placeat accusamus.")

 new_artist_photo_4 = open('https://musiccamp-seeds.s3.amazonaws.com/guitar2.jpg')
 new_artist_4.photo.attach(io: new_artist_photo_4, filename: "guitar2.jpg")

 album01 = Album.create(
   title: "Album 1",
   description: "Album 1 description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist.id
 )
 album01_photo = open('https://musiccamp-seeds.s3.amazonaws.com/girl_radio.jpg')
 album01.photo.attach(io: album01_photo, filename: "girl_radio.jpg")

 album02 = Album.create(
   title: "Album 2",
   description: "Album 2 descriptionLorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist.id
 )

 album02_photo = open('https://musiccamp-seeds.s3.amazonaws.com/red_lights.jpg')
 album02.photo.attach(io: album02_photo, filename: "red_lights.jpg")

 album03 = Album.create(
   title: "Album 3",
   description: "Album 3 descriptionLorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist.id
 )

 album03_photo = open('https://musiccamp-seeds.s3.amazonaws.com/you_are_what.jpg')
 album03.photo.attach(io: album03_photo, filename: "you_are_what.jpg")

 album04 = Album.create(
   title: "Album 4",
   description: "Album 4 description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist.id
 )

 album04_photo = open('https://musiccamp-seeds.s3.amazonaws.com/cassette2.jpg')
 album04.photo.attach(io: album04_photo, filename: "cassette2.jpg")

 album05 = Album.create(
   title: "Album 5",
   description: "Album 5 description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_1.id
 )

 album05_photo = open('https://musiccamp-seeds.s3.amazonaws.com/keyboard.jpg')
 album05.photo.attach(io: album05_photo, filename: "keyboard.jpg")

 album06 = Album.create(
   title: "Album 6",
   description: "Album 6 description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_1.id
 )

 album06_photo = open('https://musiccamp-seeds.s3.amazonaws.com/headphones.jpg')
 album06.photo.attach(io: album06_photo, filename: "headphones.jpg")

 album07 = Album.create(
   title: "Album 7",
   description: "Album 7 description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_1.id
 )

 album07_photo = open('https://musiccamp-seeds.s3.amazonaws.com/nice_guitar.jpg')
 album07.photo.attach(io: album07_photo, filename: "nice_guitar.jpg")

 album08 = Album.create(
   title: "Album 8",
   description: "Album 8 description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_2.id
 )

 album08_photo = open('https://musiccamp-seeds.s3.amazonaws.com/vinyl.jpg')
 album08.photo.attach(io: album08_photo, filename: "vinyl.jpg")

 album09 = Album.create(
   title: "Album 9",
   description: "Album 9 description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_2.id
 )

 album09_photo = open('https://musiccamp-seeds.s3.amazonaws.com/drumset.jpg')
 album09.photo.attach(io: album09_photo, filename: "drumset.jpg")

 album10 = Album.create(
   title: "Album 10",
   description: "Album 10 description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_3.id
 )

 album10_photo = open('https://musiccamp-seeds.s3.amazonaws.com/black_and_white.jpg')
 album10.photo.attach(io: album10_photo, filename: "black_and_white.jpg")

 album11 = Album.create(
   title: "Album 11",
   description: "Album 11 description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_3.id
 )

 album11_photo = open('https://musiccamp-seeds.s3.amazonaws.com/playing_guitar.jpg')
 album11.photo.attach(io: album11_photo, filename: "playing_guitar.jpg")

 album12 = Album.create(
   title: "Album 12",
   description: "Album 12 description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_3.id
 )

 album12_photo = open('https://musiccamp-seeds.s3.amazonaws.com/guitars3.jpg')
 album12.photo.attach(io: album12_photo, filename: "guitars3.jpg")

 album13 = Album.create(
   title: "Album 13",
   description: "Album 13 description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_4.id
 )

 album13_photo = open('https://musiccamp-seeds.s3.amazonaws.com/pink_headphones.jpg')
 album13.photo.attach(io: album13_photo, filename: "pink_headphones.jpg")

 album14 = Album.create(
   title: "Album 14",
   description: "Album 14 description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_4.id
 )

 album14_photo = open('https://musiccamp-seeds.s3.amazonaws.com/fire_guitar.jpg')
 album14.photo.attach(io: album14_photo, filename: "fire_guitar.jpg")

 album15 = Album.create(
   title: "Album 15",
   description: "Album 15 description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
  artist_id: new_artist_4.id
 )

 album15_photo = open('https://musiccamp-seeds.s3.amazonaws.com/other_cassette.jpg')
 album15.photo.attach(io: album15_photo, filename: "other_cassette.jpg")

song01 = Song.create(
    title: "Je voudrais tre un pigeon",
    track_num: 1,
    description: "Song 1 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id,
    artist_id: album01.artist_id
)
song01_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3')
song01.song.attach(io: song01_song, filename: "Monplaisir_-_06_-_Je_voudrais_tre_un_pigeon.mp3")
song01_photo = open('https://musiccamp-seeds.s3.amazonaws.com/jan-kronies-Ao1MeLnG_kY-unsplash.jpg')
song01.photo.attach(io: song01_photo, filename: "jan-kronies-Ao1MeLnG_kY-unsplash.jpg")

song02 = Song.create(
    title: "JOn est bien",
    track_num: 2,
    description: "Song 2 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id,
    artist_id: album01.artist_id
)
song02_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_08_-_On_est_bien_l.mp3')
song02.song.attach(io: song02_song, filename: "Monplaisir_-_08_-_On_est_bien_l.mp3")
song02_photo = open('https://musiccamp-seeds.s3.amazonaws.com/ken-cheung-0F2nvpob0_c-unsplash.jpg')
song02.photo.attach(io: song02_photo, filename: "ken-cheung-0F2nvpob0_c-unsplash.jpg")

song03 = Song.create(
    title: "Pourquoi est ce que jen ai quelque chose faire",
    track_num: 3,
    description: "Song 3 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id,
    artist_id: album01.artist_id
)
song03_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3')
song03.song.attach(io: song03_song, filename: "Monplaisir_-_09_-_Pourquoi_est-ce_que_jen_ai_quelque_chose__faire_.mp3")
song03_photo = open('https://musiccamp-seeds.s3.amazonaws.com/shawn-ang-npeUDxUHk8g-unsplash.jpg')
song03.photo.attach(io: song03_photo, filename: "shawn-ang-npeUDxUHk8g-unsplash.jpg")

song04 = Song.create(
    title: "Monplaisir #6",
    track_num: 4,
    description: "Song 4 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id,
    artist_id: album01.artist_id
)
song04_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_11_-_6.mp3')
song04.song.attach(io: song04_song, filename: "Monplaisir_-_11_-_6.mp3")
song04_photo = open('https://musiccamp-seeds.s3.amazonaws.com/ephraim-mayrena-lkqK7NJeWG4-unsplash.jpg')
song04.photo.attach(io: song04_photo, filename: "ephraim-mayrena-lkqK7NJeWG4-unsplash.jpg")

song05 = Song.create(
    title: "Theme Song",
    track_num: 5,
    description: "Song 5 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album01.id,
    artist_id: album01.artist_id
)
song05_song = open('https://musiccamp-seeds.s3.amazonaws.com/Monplaisir_-_01_-_Theme_Song.mp3')
song05.song.attach(io: song05_song, filename: "Monplaisir_-_01_-_Theme_Song.mp3")
song05_photo = open('https://musiccamp-seeds.s3.amazonaws.com/aron-yigin-i19NWSLo5Ps-unsplash.jpg')
song05.photo.attach(io: song05_photo, filename: "aron-yigin-i19NWSLo5Ps-unsplash.jpg")

song06 = Song.create(
    title: "Traveling in your mind",
    track_num: 1,
    description: "Song 6 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album02.id,
    artist_id: album02.artist_id
)
song06_song = open('https://musiccamp-seeds.s3.amazonaws.com/Loyalty_Freak_Music_-_05_-_Traveling_in_your_mind.mp3')
song06.song.attach(io: song06_song, filename: "Loyalty_Freak_Music_-_05_-_Traveling_in_your_mind.mp3")
song06_photo = open('https://musiccamp-seeds.s3.amazonaws.com/micah-tindell-AdOeV-qlAs4-unsplash.jpg')
song06.photo.attach(io: song06_photo, filename: "micah-tindell-AdOeV-qlAs4-unsplash.jpg")

song07 = Song.create(
    title: "Monarch of the street",
    track_num: 2,
    description: "Song 7 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album02.id,
    artist_id: album02.artist_id
)
song07_song = open('https://musiccamp-seeds.s3.amazonaws.com/Loyalty_Freak_Music_-_07_-_Monarch_of_the_street.mp3')
song07.song.attach(io: song07_song, filename: "Loyalty_Freak_Music_-_07_-_Monarch_of_the_street.mp3")
song07_photo = open('https://musiccamp-seeds.s3.amazonaws.com/micah-tindell-UJrFax0t7NM-unsplash.jpg')
song07.photo.attach(io: song07_photo, filename: "micah-tindell-UJrFax0t7NM-unsplash.jpg")

song08 = Song.create(
    title: "People are spinning",
    track_num: 3,
    description: "Song 8 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album02.id,
    artist_id: album02.artist_id
)
song08_song = open('https://musiccamp-seeds.s3.amazonaws.com/Loyalty_Freak_Music_-_06_-_People_are_spinning.mp3')
song08.song.attach(io: song08_song, filename: "Loyalty_Freak_Music_-_06_-_People_are_spinning.mp3")
song08_photo = open('https://musiccamp-seeds.s3.amazonaws.com/mana5280-gmotW6RWWnA-unsplash.jpg')
song08.photo.attach(io: song08_photo, filename: "mana5280-gmotW6RWWnA-unsplash.jpg")

song09 = Song.create(
    title: "Dans le dnide la saturation absolue",
    track_num: 4,
    description: "Song 9 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album02.id,
    artist_id: album02.artist_id
)
song09_song = open('https://musiccamp-seeds.s3.amazonaws.com/Frederic_Lardon_feat_Laura_Palme_-_06_-_Dans_le_dnide_la_saturation_absolue.mp3')
song09.song.attach(io: song09_song, filename: "Frederic_Lardon_feat_Laura_Palme_-_06_-_Dans_le_dnide_la_saturation_absolue.mp3")
song09_photo = open('https://musiccamp-seeds.s3.amazonaws.com/alla-razgonova-zPTq--yOK2Y-unsplash.jpg')
song09.photo.attach(io: song09_photo, filename: "alla-razgonova-zPTq--yOK2Y-unsplash.jpg")

song10 = Song.create(
    title: "Dans le nid de la gupe massone",
    track_num: 5,
    description: "Song 10 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album02.id,
    artist_id: album02.artist_id
)
song10_song = open('https://musiccamp-seeds.s3.amazonaws.com/Frederic_Lardon_feat_Laura_Palme_-_07_-_Dans_le_nid_de_la_gupe_massone.mp3')
song10.song.attach(io: song10_song, filename: "Frederic_Lardon_feat_Laura_Palme_-_07_-_Dans_le_nid_de_la_gupe_massone.mp3")
song10_photo = open('https://musiccamp-seeds.s3.amazonaws.com/marian-kroell-tB_lUH5MozQ-unsplash.jpg')
song10.photo.attach(io: song10_photo, filename: "marian-kroell-tB_lUH5MozQ-unsplash.jpg")

song11= Song.create(
    title: "Intranet",
    track_num: 1,
    description: "Song 11 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album03.id,
    artist_id: album03.artist_id
)
song11_song = open('https://musiccamp-seeds.s3.amazonaws.com/Yung_Kartz_-_03_-_Intranet.mp3')
song11.song.attach(io: song11_song, filename: "Yung_Kartz_-_03_-_Intranet.mp3")
song11_photo = open('https://musiccamp-seeds.s3.amazonaws.com/logan-weaver-_5dGMn1RxX8-unsplash.jpg')
song11.photo.attach(io: song11_photo, filename: "logan-weaver-_5dGMn1RxX8-unsplash.jpg")

song12 = Song.create(
    title: "One Way",
    track_num: 2,
    description: "Song 12 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album03.id,
    artist_id: album03.artist_id
)
song12_song = open('https://musiccamp-seeds.s3.amazonaws.com/Yung_Kartz_-_04_-_One_Way.mp3')
song12.song.attach(io: song12_song, filename: "Yung_Kartz_-_04_-_One_Way.mp3")
song12_photo = open('https://musiccamp-seeds.s3.amazonaws.com/kristaps-ungurs-gOc4pVZYSN8-unsplash.jpg')
song12.photo.attach(io: song12_photo, filename: "kristaps-ungurs-gOc4pVZYSN8-unsplash.jpg")

song13 = Song.create(
    title: "Picture Perfect",
    track_num: 3,
    description: "Song 13 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album03.id,
    artist_id: album03.artist_id
)
song13_song = open('https://musiccamp-seeds.s3.amazonaws.com/Yung_Kartz_-_05_-_Picture_Perfect.mp3')
song13.song.attach(io: song13_song, filename: "Yung_Kartz_-_05_-_Picture_Perfect.mp3")
song13_photo = open('https://musiccamp-seeds.s3.amazonaws.com/alla-razgonova-ZyyDGo2Rykc-unsplash.jpg')
song13.photo.attach(io: song13_photo, filename: "alla-razgonova-ZyyDGo2Rykc-unsplash.jpg")

song14 = Song.create(
    title: "Stranger",
    track_num: 4,
    description: "Song 14 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album03.id,
    artist_id: album03.artist_id
)
song14_song = open('https://musiccamp-seeds.s3.amazonaws.com/Yung_Kartz_-_02_-_Stranger.mp3')
song14.song.attach(io: song14_song, filename: "Yung_Kartz_-_02_-_Stranger.mp3")
song14_photo = open('https://musiccamp-seeds.s3.amazonaws.com/vika-chartier-Y0dBD80odGw-unsplash.jpg')
song14.photo.attach(io: song14_photo, filename: "vika-chartier-Y0dBD80odGw-unsplash.jpg")

song15 = Song.create(
    title: "Landline",
    track_num: 1,
    description: "Song 15 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album04.id,
    artist_id: album04.artist_id
)
song15_song = open('https://musiccamp-seeds.s3.amazonaws.com/Yung_Kartz_-_08_-_Landline.mp3')
song15.song.attach(io: song15_song, filename: "Yung_Kartz_-_08_-_Landline.mp3")
song15_photo = open('https://musiccamp-seeds.s3.amazonaws.com/taisiia-shestopal-6uhVK8X-vgE-unsplash.jpg')
song15.photo.attach(io: song15_photo, filename: "taisiia-shestopal-6uhVK8X-vgE-unsplash.jpg")

song16 = Song.create(
    title: "Horizon Ending",
    track_num: 2,
    description: "Song 16 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album04.id,
    artist_id: album04.artist_id
)
song16_song = open('https://musiccamp-seeds.s3.amazonaws.com/Soft_and_Furious_-_09_-_Horizon_Ending.mp3')
song16.song.attach(io: song16_song, filename: "Soft_and_Furious_-_09_-_Horizon_Ending.mp3")
song16_photo = open('https://musiccamp-seeds.s3.amazonaws.com/nazarizal-mohammad-p0sU9EXH8Ok-unsplash.jpg')
song16.photo.attach(io: song16_photo, filename: "nazarizal-mohammad-p0sU9EXH8Ok-unsplash.jpg")

song17 = Song.create(
    title: "Tequila Moonrise",
    track_num: 3,
    description: "Song 17 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album04.id,
    artist_id: album04.artist_id
)
song17_song = open('https://musiccamp-seeds.s3.amazonaws.com/Tequila_Moonrise_-_09_-_Tequila_Moonrise.mp3')
song17.song.attach(io: song17_song, filename: "Tequila_Moonrise_-_09_-_Tequila_Moonrise.mp3")
song17_photo = open('https://musiccamp-seeds.s3.amazonaws.com/sulthan-auliya-WU0oahZNCd8-unsplash.jpg')
song17.photo.attach(io: song17_photo, filename: "sulthan-auliya-WU0oahZNCd8-unsplash.jpg")

song18 = Song.create(
    title: "Lost European",
    track_num: 1,
    description: "Song 18 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album05.id,
    artist_id: album05.artist_id
)
song18_song = open('https://musiccamp-seeds.s3.amazonaws.com/The+Beginning+(Of+the+End)+-+Lost+European.mp3')
song18.song.attach(io: song18_song, filename: "The Beginning (Of the End) - Lost European.mp3")
song18_photo = open('https://musiccamp-seeds.s3.amazonaws.com/hamza-bounaim-MmsbpVzPZjg-unsplash.jpg')
song18.photo.attach(io: song18_photo, filename: "hamza-bounaim-MmsbpVzPZjg-unsplash.jpg")

song19 = Song.create(
    title: "Urban Sunrise ",
    track_num: 2,
    description: "Song 19 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album05.id,
    artist_id: album05.artist_id
)
song19_song = open('https://musiccamp-seeds.s3.amazonaws.com/Urban+Sunrise+.mp3')
song19.song.attach(io: song19_song, filename: "Urban Sunrise .mp3")
song19_photo = open('https://musiccamp-seeds.s3.amazonaws.com/toan-chu-RsFO5OG0rjA-unsplash.jpg')
song19.photo.attach(io: song19_photo, filename: "toan-chu-RsFO5OG0rjA-unsplash.jpg")

song20 = Song.create(
    title: "Violin Bach",
    track_num: 3,
    description: "Song 20 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album05.id,
    artist_id: album05.artist_id
)
song20_song = open('https://musiccamp-seeds.s3.amazonaws.com/Bach.mp3')
song20.song.attach(io: song20_song, filename: "Bach.mp3")
song20_photo = open('https://musiccamp-seeds.s3.amazonaws.com/gantas-vaiciulenas-A5Xpl_7RQtk-unsplash.jpg')
song20.photo.attach(io: song20_photo, filename: "gantas-vaiciulenas-A5Xpl_7RQtk-unsplash.jpg")

song21 = Song.create(
    title: "The Chorus Ceases Instrumental",
    track_num: 1,
    description: "Song 21 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album06.id,
    artist_id: album06.artist_id
)
song21_song = open('https://musiccamp-seeds.s3.amazonaws.com/Chad_Crouch_-_The_Chorus_Ceases_Instrumental.mp3')
song21.song.attach(io: song21_song, filename: "Chad_Crouch_-_The_Chorus_Ceases_Instrumental.mp3")
song21_photo = open('https://musiccamp-seeds.s3.amazonaws.com/timo-wielink-8x9THjvhseg-unsplash.jpg')
song21.photo.attach(io: song21_photo, filename: "timo-wielink-8x9THjvhseg-unsplash.jpg")

song22 = Song.create(
    title: "The Light filtering Canopy Instrumental",
    track_num: 2,
    description: "Song 22 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album06.id,
    artist_id: album06.artist_id
)
song22_song = open('https://musiccamp-seeds.s3.amazonaws.com/Chad_Crouch_-_The_Light-filtering_Canopy_Instrumental.mp3')
song22.song.attach(io: song22_song, filename: "Chad_Crouch_-_The_Light-filtering_Canopy_Instrumental.mp3")
song22_photo = open('https://musiccamp-seeds.s3.amazonaws.com/mark-rivera-yqRUcCRO9vI-unsplash.jpg')
song22.photo.attach(io: song22_photo, filename: "mark-rivera-yqRUcCRO9vI-unsplash.jpg")

song23 = Song.create(
    title: "Feeding Flock Instrumental",
    track_num: 3,
    description: "Song 23 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album06.id,
    artist_id: album06.artist_id
)
song23_song = open('https://musiccamp-seeds.s3.amazonaws.com/Chad_Crouch_-_10_-_Feeding_Flock_Instrumental.mp3')
song23.song.attach(io: song23_song, filename: "Chad_Crouch_-_10_-_Feeding_Flock_Instrumental.mp3")
song23_photo = open('https://musiccamp-seeds.s3.amazonaws.com/natallia-nagorniak-YJnX-S4Ib5I-unsplash.jpg')
song23.photo.attach(io: song23_photo, filename: "natallia-nagorniak-YJnX-S4Ib5I-unsplash.jpg")

song24 = Song.create(
    title: "Sentinel",
    track_num: 1,
    description: "Song 24 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album07.id,
    artist_id: album07.artist_id
)
song24_song = open('https://musiccamp-seeds.s3.amazonaws.com/Kai_Engel_-_04_-_Sentinel.mp3')
song24.song.attach(io: song24_song, filename: "Kai_Engel_-_04_-_Sentinel.mp3")
song24_photo = open('https://musiccamp-seeds.s3.amazonaws.com/nazarizal-mohammad-cN7TzNvWkU4-unsplash.jpg')
song24.photo.attach(io: song24_photo, filename: "nazarizal-mohammad-cN7TzNvWkU4-unsplash.jpg")

song25 = Song.create(
    title: "Homeroad",
    track_num: 2,
    description: "Song 25 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album07.id,
    artist_id: album07.artist_id
)
song25_song = open('https://musiccamp-seeds.s3.amazonaws.com/Kai_Engel_-_09_-_Homeroad.mp3')
song25.song.attach(io: song25_song, filename: "Kai_Engel_-_09_-_Homeroad.mp3")
song25_photo = open('https://musiccamp-seeds.s3.amazonaws.com/meireles-neto-MqayxyUiiL0-unsplash.jpg')
song25.photo.attach(io: song25_photo, filename: "meireles-neto-MqayxyUiiL0-unsplash.jpg")

song26 = Song.create(
    title: "Interception",
    track_num: 3,
    description: "Song 26 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album07.id,
    artist_id: album07.artist_id
)
song26_song = open('https://musiccamp-seeds.s3.amazonaws.com/Kai_Engel_-_07_-_Interception.mp3')
song26.song.attach(io: song26_song, filename: "Kai_Engel_-_07_-_Interception.mp3")
song26_photo = open('https://musiccamp-seeds.s3.amazonaws.com/shahin-khalaji-HscNqrWavms-unsplash.jpg')
song26.photo.attach(io: song26_photo, filename: "shahin-khalaji-HscNqrWavms-unsplash.jpg")

song27 = Song.create(
    title: "A Little Swing Music",
    track_num: 1,
    description: "Song 27 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album08.id,
    artist_id: album08.artist_id
)
song27_song = open('https://musiccamp-seeds.s3.amazonaws.com/Dee_Yan-Key_-_10_-_A_Little_Swing_Music.mp3')
song27.song.attach(io: song27_song, filename: "Dee_Yan-Key_-_10_-_A_Little_Swing_Music.mp3")
song27_photo = open('https://musiccamp-seeds.s3.amazonaws.com/tim-mossholder-i59g1T0od8A-unsplash.jpg')
song27.photo.attach(io: song27_photo, filename: "tim-mossholder-i59g1T0od8A-unsplash.jpg")

song28 = Song.create(
    title: "Balmy Summer Night",
    track_num: 2,
    description: "Song 28 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album08.id,
    artist_id: album08.artist_id
)
song28_song = open('https://musiccamp-seeds.s3.amazonaws.com/Dee_Yan-Key_-_02_-_Balmy_Summer_Night.mp3')
song28.song.attach(io: song28_song, filename: "Dee_Yan-Key_-_02_-_Balmy_Summer_Night.mp3")
song28_photo = open('https://musiccamp-seeds.s3.amazonaws.com/hannah-middleton-moyBDVgDur4-unsplash.jpg')
song28.photo.attach(io: song28_photo, filename: "hannah-middleton-moyBDVgDur4-unsplash.jpg")

song29 = Song.create(
    title: "Spring Swing",
    track_num: 1,
    description: "Song 29 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album09.id,
    artist_id: album09.artist_id
)
song29_song = open('https://musiccamp-seeds.s3.amazonaws.com/Dee_Yan-Key_-_03_-_Spring_Swing.mp3')
song29.song.attach(io: song29_song, filename: "Dee_Yan-Key_-_03_-_Spring_Swing.mp3")
song29_photo = open('https://musiccamp-seeds.s3.amazonaws.com/sj-objio-J7MVwbYXXJY-unsplash.jpg')
song29.photo.attach(io: song29_photo, filename: "sj-objio-J7MVwbYXXJY-unsplash.jpg")

song30 = Song.create(
    title: "Bees",
    track_num: 2,
    description: "Song 30 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album09.id,
    artist_id: album09.artist_id
)
song30_song = open('https://musiccamp-seeds.s3.amazonaws.com/Dee_Yan-Key_-_04_-_Bees.mp3')
song30.song.attach(io: song30_song, filename: "Dee_Yan-Key_-_04_-_Bees.mp3")
song30_photo = open('https://musiccamp-seeds.s3.amazonaws.com/se-nuno-BN2bJBgz_G4-unsplash.jpg')
song30.photo.attach(io: song30_photo, filename: "se-nuno-BN2bJBgz_G4-unsplash.jpg")

song31 = Song.create(
    title: "In_Former_Rings",
    track_num: 1,
    description: "Song 31 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album10.id,
    artist_id: album10.artist_id
)
song31_song = open('https://musiccamp-seeds.s3.amazonaws.com/Unheard_Music_Concepts_-_In_Former_Rings.mp3')
song31.song.attach(io: song31_song, filename: "Unheard_Music_Concepts_-_In_Former_Rings.mp3")
song31_photo = open('https://musiccamp-seeds.s3.amazonaws.com/hannah-middleton-tB1eN4-Gl8U-unsplash.jpg')
song31.photo.attach(io: song31_photo, filename: "hannah-middleton-tB1eN4-Gl8U-unsplash.jpg")

song32 = Song.create(
    title: "Microwave",
    track_num: 2,
    description: "Song 32 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album10.id,
    artist_id: album10.artist_id
)
song32_song = open('https://musiccamp-seeds.s3.amazonaws.com/Unheard_Music_Concepts_-_22_-_Microwave.mp3')
song32.song.attach(io: song32_song, filename: "Unheard_Music_Concepts_-_22_-_Microwave.mp3")
song32_photo = open('https://musiccamp-seeds.s3.amazonaws.com/natallia-nagorniak-2lUo-DcYdwk-unsplash.jpg')
song32.photo.attach(io: song32_photo, filename: "natallia-nagorniak-2lUo-DcYdwk-unsplash.jpg")

song33 = Song.create(
    title: "Turning",
    track_num: 1,
    description: "Song 33 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album11.id,
    artist_id: album11.artist_id
)
song33_song = open('https://musiccamp-seeds.s3.amazonaws.com/Unheard_Music_Concepts_-_15_-_Turning.mp3')
song33.song.attach(io: song33_song, filename: "Unheard_Music_Concepts_-_15_-_Turning.mp3")
song33_photo = open('https://musiccamp-seeds.s3.amazonaws.com/dave-hoefler--uX-adCabaI-unsplash.jpg')
song33.photo.attach(io: song33_photo, filename: "dave-hoefler--uX-adCabaI-unsplash.jpg")

song34 = Song.create(
    title: "Depressed Buddhist",
    track_num: 2,
    description: "Song 34 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album11.id,
    artist_id: album11.artist_id
)
song34_song = open('https://musiccamp-seeds.s3.amazonaws.com/Unheard_Music_Concepts_-_14_-_Depressed_Buddhist.mp3')
song34.song.attach(io: song34_song, filename: "Unheard_Music_Concepts_-_14_-_Depressed_Buddhist.mp3")
song34_photo = open('https://musiccamp-seeds.s3.amazonaws.com/riddhesh-patil-VoyTAHY3K_8-unsplash.jpg')
song34.photo.attach(io: song34_photo, filename: "riddhesh-patil-VoyTAHY3K_8-unsplash.jpg")

song35 = Song.create(
    title: "Smuggler",
    track_num: 1,
    description: "Song 35 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album12.id,
    artist_id: album12.artist_id
)
song35_song = open('https://musiccamp-seeds.s3.amazonaws.com/Smuggler_ID_1130.mp3')
song35.song.attach(io: song35_song, filename: "Smuggler_ID_1130.mp3")
song35_photo = open('https://musiccamp-seeds.s3.amazonaws.com/timo-wielink-1EM6lrWfqMA-unsplash.jpg')
song35.photo.attach(io: song35_photo, filename: "timo-wielink-1EM6lrWfqMA-unsplash.jpg")

song36 = Song.create(
    title: "The Lasso of Time",
    track_num: 2,
    description: "Song 36 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album12.id,
    artist_id: album12.artist_id
)
song36_song = open('https://musiccamp-seeds.s3.amazonaws.com/Unheard_Music_Concepts_-_The_Lasso_of_Time.mp3')
song36.song.attach(io: song36_song, filename: "Unheard_Music_Concepts_-_The_Lasso_of_Time.mp3")
song36_photo = open('https://musiccamp-seeds.s3.amazonaws.com/fly-d-H8ALEQLhUxQ-unsplash.jpg')
song36.photo.attach(io: song36_photo, filename: "fly-d-H8ALEQLhUxQ-unsplash.jpg")

song37 = Song.create(
    title: "Sounding Steam Engine",
    track_num: 1,
    description: "Song 37 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album13.id,
    artist_id: album13.artist_id
)
song37_song = open('https://musiccamp-seeds.s3.amazonaws.com/Sounding_Steam_Engine_ID_1267.mp3')
song37.song.attach(io: song37_song, filename: "Sounding_Steam_Engine_ID_1267.mp3")
song37_photo = open('https://musiccamp-seeds.s3.amazonaws.com/archie-R84IM1cI5YQ-unsplash.jpg')
song37.photo.attach(io: song37_photo, filename: "archie-R84IM1cI5YQ-unsplash.jpg")

song38 = Song.create(
    title: "Played by Ear",
    track_num: 2,
    description: "Song 38 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album13.id,
    artist_id: album13.artist_id
)
song38_song = open('https://musiccamp-seeds.s3.amazonaws.com/Unheard_Music_Concepts_-_Played_by_Ear.mp3')
song38.song.attach(io: song38_song, filename: "Unheard_Music_Concepts_-_Played_by_Ear.mp3")
song38_photo = open('https://musiccamp-seeds.s3.amazonaws.com/johny-goerend-qm2rUzrP64U-unsplash.jpg')
song38.photo.attach(io: song38_photo, filename: "johny-goerend-qm2rUzrP64U-unsplash.jpg")

song39 = Song.create(
    title: "Waltz For a Memory",
    track_num: 1,
    description: "Song 39 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album14.id,
    artist_id: album14.artist_id
)
song39_song = open('https://musiccamp-seeds.s3.amazonaws.com/Mela_-_10_-_Waltz_For_a_Memory.mp3')
song39.song.attach(io: song39_song, filename: "Mela_-_10_-_Waltz_For_a_Memory.mp3")
song39_photo = open('https://musiccamp-seeds.s3.amazonaws.com/alla-razgonova-jSKWjT5ON7A-unsplash.jpg')
song39.photo.attach(io: song39_photo, filename: "alla-razgonova-jSKWjT5ON7A-unsplash.jpg")

song40 = Song.create(
    title: "The Strip",
    track_num: 2,
    description: "Song 40 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album14.id,
    artist_id: album14.artist_id
)
song40_song = open('https://musiccamp-seeds.s3.amazonaws.com/Mela_-_09_-_The_Strip.mp3')
song40.song.attach(io: song40_song, filename: "Mela_-_09_-_The_Strip.mp3")
song40_photo = open('https://musiccamp-seeds.s3.amazonaws.com/jasmin-chew-wZQ3engj7b4-unsplash.jpg')
song40.photo.attach(io: song40_photo, filename: "jasmin-chew-wZQ3engj7b4-unsplash.jpg")

song41 = Song.create(
    title: "Good Times Walk",
    track_num: 1,
    description: "Song 41 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album15.id,
    artist_id: album15.artist_id
)
song41_song = open('https://musiccamp-seeds.s3.amazonaws.com/Good_Times_Walk_-_Delay_ID_1266.mp3')
song41.song.attach(io: song41_song, filename: "Good_Times_Walk_-_Delay_ID_1266.mp3")
song41_photo = open('https://musiccamp-seeds.s3.amazonaws.com/erik-mclean-sDMrGD3T-NU-unsplash.jpg')
song41.photo.attach(io: song41_photo, filename: "erik-mclean-sDMrGD3T-NU-unsplash.jpg")

song42 = Song.create(
    title: "Dixie Parade",
    track_num: 2,
    description: "Song 42 Description Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.",
    album_id: album15.id,
    artist_id: album15.artist_id
)
song42_song = open('https://musiccamp-seeds.s3.amazonaws.com/Lobo_Loco_-_01_-_Dixie_Parade_ID_1187.mp3')
song42.song.attach(io: song42_song, filename: "Lobo_Loco_-_01_-_Dixie_Parade_ID_1187.mp3")
song42_photo = open('https://musiccamp-seeds.s3.amazonaws.com/shahin-khalaji-ywFhCe1u-ZA-unsplash.jpg')
song42.photo.attach(io: song42_photo, filename: "shahin-khalaji-ywFhCe1u-ZA-unsplash.jpg")
