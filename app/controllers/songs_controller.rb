class SongsController < ApplicationController

  def show
    # debugger
    @song = Song.find(params[:id])
    render :show
  end
end
