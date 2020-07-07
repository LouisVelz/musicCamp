class Album < ApplicationRecord
  validates :title, presence: true


  belongs_to :artist,
  class_name: :User,
  foreign_key: :artist_id

  has_may :songs,
  class_name: :Song,
  foreign_key: :album_id

  has_one_attached :photo

end
