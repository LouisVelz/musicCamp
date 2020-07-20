class Api::AlbumsController < ApplicationController

  def index
    debugger
    # @albums = Album.joins(:artist)
    # @albums = Album.limit(3)
    if params.has_key?(:artist_id)
      @albums = Album.where(artist_id: params[:artist_id])
    else
        @albums = Album.joins(:artist)
        # .where(artist_id: params[:artist_id])
    end

    render :index
  end

  def create 
    @album = Album.new(album_params)

    @album.artist_id = current_user.id

    if @album.save
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end

  end

  def destroy
    @album = Album.find(params[:id])

    if @album && @album.artist_id == current_user.id
      @album.destroy
      render :show
    else
      render ['You cannot erase this album'], status: 404
    end
  end

  def show
    debugger
    @album = Album.joins(:artist).where(id: params[:id])
    render :show
  end

  private
  def album_params
    params.require(:album).permit(:title, :description, :photo)
  end
end
