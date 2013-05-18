class CardsController < ApplicationController
  respond_to :json

  def index
    respond_with Card.all
  end

  def show
    respond_with Card.find(params[:id])
  end

  def create
    respond_with current_user.cards.create(params[:card])
  end

  def update
    card = current_user.cards.find(params[:id])
    respond_with card.update_attributes(params[:card])
  end

  def destroy
    card = current_user.cards.find(params[:id])
    respond_with card.delete
  end
end
