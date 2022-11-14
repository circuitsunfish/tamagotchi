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

  Rails.application.routes.draw do
  resources :player_owns_tamas
  resources :player_friends_tamas
  resources :gm_responses
  resources :gm_responses, only: [:index, :show]
    # route to test your configuration
    get '/hello', to: 'application#hello_world'
  end


end
