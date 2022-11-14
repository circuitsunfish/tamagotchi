Rails.application.routes.draw do
  resources :gm_responses
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  Rails.application.routes.draw do
  resources :gm_responses, only: [:index, :show]
    # route to test your configuration
    get '/hello', to: 'application#hello_world'
  end


end
