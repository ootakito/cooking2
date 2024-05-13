Rails.application.routes.draw do
  get 'mypage/index'
  devise_for :users
  resources :posts
    resource :mypage, only: [:index]
  root "posts#index"
end
