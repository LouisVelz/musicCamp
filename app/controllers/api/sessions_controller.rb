class Api::SessionsController < ApplicationController
      def create
        @user = User.find_by_credentials(
            params[:user][:email],
            # params[:user][:username],
            params[:user][:password]
        )
        # unless @user
        #   @user = User.find_by_credentials(
        #     params[:user][:username],
        #     params[:user][:password]
        #   )
        # end

        if @user
            sign_in!(@user)
            # render '/'
            # render '/'
            render :show
        else
          render json: ["Invalid credentials!"], status: 404
          # redirect_to root_url
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
