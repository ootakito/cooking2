Rails.application.routes.draw do
  devise_for :users
  resources :posts do
    resource :likes, only: [:create, :destroy]
  end
  root "posts#index"
  get 'mypage/index'
  get 'popularposts/index'
end
