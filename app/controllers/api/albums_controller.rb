class Api::AlbumsController < ApplicationController

  def index
    @albums = Album.all
    # find(artist_id: params[:artist_id])

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
    @album = Album.find(params[:id])
    render :show
  end

  private
  def album_params
    params.require(:album).permit(:title, :description, :photo)
  end
end