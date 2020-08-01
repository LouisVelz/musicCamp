class Api::SessionsController < ApplicationController
      def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            sign_in!(@user)
            render :show
        else
          render json: ["Enter a valid Email/Password"], status: 404

        end
    end

    def destroy

        if current_user
            sign_out!
            render json: {}
        else
            render json: ["User not signed in"], status: 401
        end
    end
end
