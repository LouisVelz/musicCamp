class Api::SongsController < ApplicationController
  # before_action :require_logged_in, only: [:create, :destroy]

  def index

    if params[:album_id] != 'undefined'
      @songs = Song.where(album_id: params[:album_id]).limit(2)
      @album_id = params[:album_id]
    else
        @songs = Song.order('RANDOM()').joins(:artist, :album).limit(1)
    end
        render :index
  end

  def create

    @song = Song.new(song_params)
    @song.artist_id = current_user.id

    if @song.save
      render :show

    else
      render json: @song.errors.full_messages, status: 422
    end

  end

  # def create_all(array)

  # end

  def destroy
    @song = Song.find(params[:id])

    if @song && @song.artist_id == current_user.id
      @song.destroy
      render :show
    else
      render ['You cannot erase that song'], status: 404
    end
  end

  def show
    @song = Song.find(params[:id])
    render :show
  end

  private
  def song_params
    params.require(:song).permit(:title, :track_num, :description, :album_id, :song, :photo)
  end
end


