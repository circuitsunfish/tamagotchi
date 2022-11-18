class PlayerOwnsTamasController < ApplicationController
  before_action :set_player_owns_tama, only: %i[ show update destroy ]

  # GET /player_owns_tamas
  def index
    @player_owns_tamas = PlayerOwnsTama.all

    render json: @player_owns_tamas
  end

  # GET /player_owns_tamas/1
  def show
    render json: @player_owns_tama
  end

  # GET /mypets
def mypets
@player_owns_tamas = PlayerOwnsTama.find_by!(player_id: cookies[:user_id])
cookies[:tama_character_id] = @player_owns_tamas.tama_character_id
cookies[:tama_character_last_accessed] = @player_owns_tamas.updated_at
render json: @player_owns_tamas
end

  # POST /player_owns_tamas
  def create
    @player_owns_tama = PlayerOwnsTama.new(player_owns_tama_params)

    if @player_owns_tama.save
      render json: @player_owns_tama, status: :created, location: @player_owns_tama
    else
      render json: @player_owns_tama.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /player_owns_tamas/1
  def update
    if @player_owns_tama.update(player_owns_tama_params)
      cookies[:tama_character_last_accessed] = @player_owns_tamas.updated_at
      render json: @player_owns_tama
    else
      render json: @player_owns_tama.errors, status: :unprocessable_entity
    end
  end

  # DELETE /player_owns_tamas/1
  def destroy
    @player_owns_tama.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_player_owns_tama
      @player_owns_tama = PlayerOwnsTama.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def player_owns_tama_params
      params.require(:player_owns_tama).permit(:player_id, :tama_character_id, :bio, :relationship)
    end
end
