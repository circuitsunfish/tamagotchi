Rails.application.routes.draw do
  resources :gm_responses, only: [:index, :show]

  resources :players
  
  resources :tama_characters
  resources :player_owns_tamas
  resources :tama_has_sprites
  resources :player_has_foods
  
  #resources :sprites
  resources :player_friends_tamas
  
  
  #custom routes
  get "/mypets", to: "player_owns_tamas#mypets"
  
  
  #auth routes
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # # route to test your configuration
  # get '/hello', to: 'application#hello_world'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
end
