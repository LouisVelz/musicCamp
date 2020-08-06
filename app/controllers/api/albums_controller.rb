class Api::AlbumsController < ApplicationController

  def index

    if params[:user_id] != 'undefined'
      @albums = Album.where(artist_id: params[:user_id])
      @user_id = params[:user_id]
    else
        @albums = Album.order('RANDOM()').joins(:artist)
    end

    render :index
  end

  def create 
    @new_params = album_params
    if @new_params[:photo] == 'null'
      @new_params[:photo] = nil
    end

    @album = Album.new(@new_params)
    @album.artist_id = current_user.id

    if @album.save  
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  # def addSong

  #     @album = Album.find_by(title: params[:title])

  #     debugger
  #     unless @album
  #       render ['The title for that album does not exist'], status: 404
  #     end


  # end

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
      @album = Album.find(params[:id])
      render :show

  end

  private
  def album_params
    params.require(:album).permit(:title, :description, :photo)
  end
end
