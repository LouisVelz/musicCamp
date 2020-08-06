class Api::SearchesController < ApplicationController

  def index

    if search_params[:album]
      @albums = Album.find_by[title: search_params[:album]]
      
    elsif search_params[:query].length > 0
      parameter = search_params[:query].downcase
      @users = User.all.where("lower(username) LIKE ?", "%#{parameter}%").limit(2)
      @albums = Album.all.where("lower(title) LIKE ?", "%#{parameter}%").limit(2)
      @songs = Song.where("lower(title) LIKE ?", "%#{parameter}%").limit(2)
    end

    # if params[:query].length > 0
    #   parameter = params[:query].downcase
    #   @users = User.all.where("lower(username) LIKE ?", "%#{parameter}%").limit(2)
    #   @albums = Album.all.where("lower(title) LIKE ?", "%#{parameter}%").limit(2)
    #   @songs = Song.where("lower(title) LIKE ?", "%#{parameter}%").limit(2)
    # end

    render :index
  end

  private
  def search_params
    params.require(:search).permit(:query, :album)
  end
end
