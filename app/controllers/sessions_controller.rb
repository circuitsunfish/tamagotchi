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
          cookies[:user_name] = user.name
          render json: user, status: :created
        else
          render json: { error: "Invalid username or password" }, status: :unauthorized
        end
      end

      def destroy
        #TODO: make sure you delete ALL the cookies from like pets and stuff
        #if u set both, u have to delete both >.>
        session.delete :user_id
        cookies.delete :user_id
        cookies.delete :user_name
        cookies.delete :tama_character_id
        cookies.delete :tama_character_last_accessed
        head :no_content
      end
      

end
