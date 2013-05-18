class UsersController < ApplicationController
  respond_to :json

  def index
    respond_with User.all
  end

  # GET /users/1
  # GET /users/1.json
  def show
    if params[:id] == 'me'
      respond_with current_user || User.first
    else
      respond_with User.find(params[:id])
    end
  end
end
