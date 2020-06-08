class Song < ApplicationRecord
  validates :title, presence: true

  belongs_to :artist,
  class_name: :User,
  foreign_key: :artist_id

  has_one_attached :song
end
