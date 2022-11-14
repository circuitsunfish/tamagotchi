class GmResponsesController < ApplicationController
  before_action :set_gm_response, only: %i[ show update destroy ]

  # GET /gm_responses
  def index
    @gm_responses = GmResponse.all

    render json: @gm_responses
  end

  # GET /gm_responses/1
  def show
    render json: @gm_response
  end

  # POST /gm_responses
  def create
    @gm_response = GmResponse.new(gm_response_params)

    if @gm_response.save
      render json: @gm_response, status: :created, location: @gm_response
    else
      render json: @gm_response.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /gm_responses/1
  def update
    if @gm_response.update(gm_response_params)
      render json: @gm_response
    else
      render json: @gm_response.errors, status: :unprocessable_entity
    end
  end

  # DELETE /gm_responses/1
  def destroy
    @gm_response.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_gm_response
      @gm_response = GmResponse.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def gm_response_params
      params.require(:gm_response).permit(:response)
    end
end
