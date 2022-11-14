class PlayerFriendsTamasController < ApplicationController
  before_action :set_player_friends_tama, only: %i[ show update destroy ]

  # GET /player_friends_tamas
  def index
    @player_friends_tamas = PlayerFriendsTama.all

    render json: @player_friends_tamas
  end

  # GET /player_friends_tamas/1
  def show
    render json: @player_friends_tama
  end

  # POST /player_friends_tamas
  def create
    @player_friends_tama = PlayerFriendsTama.new(player_friends_tama_params)

    if @player_friends_tama.save
      render json: @player_friends_tama, status: :created, location: @player_friends_tama
    else
      render json: @player_friends_tama.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /player_friends_tamas/1
  def update
    if @player_friends_tama.update(player_friends_tama_params)
      render json: @player_friends_tama
    else
      render json: @player_friends_tama.errors, status: :unprocessable_entity
    end
  end

  # DELETE /player_friends_tamas/1
  def destroy
    @player_friends_tama.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_player_friends_tama
      @player_friends_tama = PlayerFriendsTama.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def player_friends_tama_params
      params.require(:player_friends_tama).permit(:player_id, :tama_character_id, :guestbook)
    end
end
