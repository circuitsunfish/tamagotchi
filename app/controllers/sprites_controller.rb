class SpritesController < ApplicationController
  before_action :set_sprite, only: %i[ show update destroy ]

  # GET /sprites
  def index
    @sprites = Sprite.all

    render json: @sprites
  end

  # GET /sprites/1
  def show
    render json: @sprite
  end

  # POST /sprites
  def create
    @sprite = Sprite.new(sprite_params)

    if @sprite.save
      render json: @sprite, status: :created, location: @sprite
    else
      render json: @sprite.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /sprites/1
  def update
    if @sprite.update(sprite_params)
      render json: @sprite
    else
      render json: @sprite.errors, status: :unprocessable_entity
    end
  end

  # DELETE /sprites/1
  def destroy
    @sprite.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sprite
      @sprite = Sprite.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def sprite_params
      params.require(:sprite).permit(:image_path)
    end
end
