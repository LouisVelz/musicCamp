Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :albums, only: [:create, :destroy, :index, :show] do
      resources :songs, only: :index
    end
    resources :songs, only: [:create, :destroy, :show]
  end

  resources :songs, only: [:show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
