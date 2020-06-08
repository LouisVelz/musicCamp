class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.integer :track_num, null: false
      t.text :description
      t.integer :album_id
      t.integer :artist_id, null: false

      t.timestamps
    end
    add_index :songs, :title
    add_index :songs, :artist_id, unique: true
  end
end
