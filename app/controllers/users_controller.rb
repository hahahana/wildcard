class UsersController < ApplicationController
  respond_to :json
 
  def index
    respond_with User.all
  end

  # GET /users/1
  # GET /users/1.json
  def show
    respond_with User.find(params[:id])
  end
end