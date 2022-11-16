Rails.application.routes.draw do
  resources :player_owns_tamas
  resources :player_friends_tamas
  resources :gm_responses
  resources :tama_has_sprites
  resources :player_has_foods
  resources :sprites
  resources :tama_characters
  resources :players
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :player_owns_tamas
  resources :player_friends_tamas
  resources :gm_responses
  resources :gm_responses, only: [:index, :show]


#auth routes
post "/signup", to: "users#create"
post "/login", to: "sessions#create"
delete "/logout", to: "sessions#destroy"

    # route to test your configuration
    get '/hello', to: 'application#hello_world'

end
