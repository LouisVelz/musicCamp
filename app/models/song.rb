class Song < ApplicationRecord
  validates :title, presence: true

  validates :ensure_song

  belongs_to :artist,
  class_name: :User,
  foreign_key: :artist_id

  has_one_attached :song

  def ensure_song
    unless self.song.attached?
        errors[:song] << "A song must be attached"
    end
  end
end
