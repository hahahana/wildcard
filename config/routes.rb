Wildcard::Application.routes.draw do
  use_doorkeeper

  devise_for :users
  resources :users, :only => [:show, :index], :controller => :users

  match 'auth/:provider/callback', to: 'sessions#create'
  match 'auth/failure', to: redirect('/')
  match 'signout', to: 'sessions#destroy', as: 'signout'
  
  resources :cards

  root to: "home#index"
end
