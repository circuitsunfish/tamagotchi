class PlayerHasFoodsController < ApplicationController
  before_action :set_player_has_food, only: %i[ show update destroy ]

  # GET /player_has_foods
  def index
    @player_has_foods = PlayerHasFood.all

    render json: @player_has_foods
  end

  # GET /player_has_foods/1
  def show
    render json: @player_has_food
  end

  # POST /player_has_foods
  def create
    @player_has_food = PlayerHasFood.new(player_has_food_params)

    if @player_has_food.save
      render json: @player_has_food, status: :created, location: @player_has_food
    else
      render json: @player_has_food.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /player_has_foods/1
  def update
    if @player_has_food.update(player_has_food_params)
      render json: @player_has_food
    else
      render json: @player_has_food.errors, status: :unprocessable_entity
    end
  end

  # DELETE /player_has_foods/1
  def destroy
    @player_has_food.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_player_has_food
      @player_has_food = PlayerHasFood.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def player_has_food_params
      params.require(:player_has_food).permit(:player_id, :sprite_id, :quantity)
    end
end
