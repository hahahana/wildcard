class UsersController < ApplicationController
  # GET /user
  # GET /user.json
  def show
    respond_to do |format|
      format.json {
        render :json => current_user
      }
    end
  end
end
