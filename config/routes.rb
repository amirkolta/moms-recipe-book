Rails.application.routes.draw do
  root 'recipes#index'

  resources :recipes

  namespace :api do
    namespace :v1 do
      get 'recipes/index'
      get 'recipes/:id', to: 'recipes#show'
      post 'recipes/create'
    end
  end
end
