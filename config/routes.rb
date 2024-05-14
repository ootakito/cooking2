Rails.application.routes.draw do
  devise_for :users

  resources :posts do
    resource :likes, only: [:create, :destroy]
    collection do
      get 'search'
      get 'mypage', to: 'mypage#index'
      get 'popularposts', to: 'popularposts#index'
    end
  end

  root "posts#index"
end
