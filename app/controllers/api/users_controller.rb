class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save!
        sign_in!(@user)
        # redirect_to root_url
        render :show
    else
      
        # render json: ['Invalid creadentials'], status: 422
        render @user.errors.full_messages
    end
  end

  def user_params
    params.require(:user).permit(:email, :password, :username)
  end

end
