class TamaHasSpritesController < ApplicationController
  before_action :set_tama_has_sprite, only: %i[ show update destroy ]

  # GET /tama_has_sprites
  def index
    @tama_has_sprites = TamaHasSprite.all

    render json: @tama_has_sprites
  end

  # GET /tama_has_sprites/1
  def show
    render json: @tama_has_sprite
  end

  # POST /tama_has_sprites
  def create
    @tama_has_sprite = TamaHasSprite.new(tama_has_sprite_params)

    if @tama_has_sprite.save
      render json: @tama_has_sprite, status: :created, location: @tama_has_sprite
    else
      render json: @tama_has_sprite.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tama_has_sprites/1
  def update
    if @tama_has_sprite.update(tama_has_sprite_params)
      render json: @tama_has_sprite
    else
      render json: @tama_has_sprite.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tama_has_sprites/1
  def destroy
    @tama_has_sprite.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tama_has_sprite
      @tama_has_sprite = TamaHasSprite.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def tama_has_sprite_params
      params.require(:tama_has_sprite).permit(:sprite_id, :tama_character_id)
    end
end
