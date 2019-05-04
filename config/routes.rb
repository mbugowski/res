Rails.application.routes.draw do
  root 'orders#index'
  resources :orders, only: [:index, :show, :new, :create] do
    member do
      post :pay
    end
  end
  resources :deliveries, only: [:update]
  mount RailsEventStore::Browser => '/res'
end
