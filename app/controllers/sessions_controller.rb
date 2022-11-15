class SessionsController < ApplicationController

    # def create
    #     user = User.find_by(username: params[:username])
    #     session[:user_id] = user.id
    #     render json: user
    #   end

    # def create
    #     user = Player.find_by(name: params[:username])
    #     session[:user_id] = user.id
    #     render json: user
    #   end

      def create
        user = Player.find_by(name: params[:name])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          cookies[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { error: "Invalid username or password" }, status: :unauthorized
        end
      end

end
