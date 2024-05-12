Rails.application.routes.draw do
  devise_for :users
  resources :posts
    resource :mypage, only: [:index]
  root "posts#index"
end
