Rails.application.routes.draw do
  devise_for :users
  resources :tweets, only: [:index, :new, :create]
  root "posts#index"
end
