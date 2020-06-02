class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save!
        sign_in!(@user)
        # redirect_to root_url
    else
        render json: @user.errors.full_message
    end
  end

  def user_params
    params.require(:user).permit(:email, :password, :username)
  end
  
end
