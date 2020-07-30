class Api::SearchesController < ApplicationController

  def index

    if params[:user_id] != 'undefined'
      @users = User.where(username: params[:query]).limit(2)
      @albums = Album.where(title: params[:query]).limit(2)
      @songs = Song.where(title: params[:query]).limit(2)
    else
        @albums = Album.order('RANDOM()').joins(:artist)
        # .where(artist_id: params[:artist_id])
    end

    render :index
  end

  private
  def album_params
    params.require(:search).permit(:query)
  end
end
