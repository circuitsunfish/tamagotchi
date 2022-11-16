class TamaCharactersController < ApplicationController
  before_action :set_tama_character, only: %i[ show update destroy ]

  # GET /tama_characters
  def index
    @tama_characters = TamaCharacter.all

    render json: @tama_characters
  end

  # GET /tama_characters/1
  def show
    render json: @tama_character
  end

  # POST /tama_characters
  def create
    @tama_character = TamaCharacter.new(tama_character_params)

    if @tama_character.save
      PlayerOwnsTama.create(player_id: cookies['user_id'], tama_character_id: @tama_character.id, bio: "")
      render json: @tama_character, status: :created, location: @tama_character
    else
      render json: @tama_character.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tama_characters/1
  def update
    if @tama_character.update(tama_character_params)
      render json: @tama_character
    else
      render json: @tama_character.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tama_characters/1
  def destroy
    @tama_character.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tama_character
      @tama_character = TamaCharacter.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tama_character_params
      params.require(:tama_character).permit(:name, :hunger, :attention, :sick, :weight, :height)
    end
end
