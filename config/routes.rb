Rails.application.routes.draw do
  devise_for :users

  resources :posts do
    resource :likes, only: [:create, :destroy]
    collection do
      get 'search'
    end
  end

  root "posts#index"
  get 'mypage/index'
  get 'popularposts/index'
end
