Wildcard::Application.routes.draw do
  use_doorkeeper

  devise_for :users, controllers: {omniauth_callbacks: "omniauth_callbacks"}

  root to: "home#index"
end
