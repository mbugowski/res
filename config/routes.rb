Rails.application.routes.draw do
  root 'react_app#index'
  namespace :api, defaults: { format: 'json' } do
    resources :orders, only: [:index, :show, :new, :create] do
      member do
        post :pay
      end
    end
    get :product_customer_options, to: 'utils#product_customer_options'
    resources :deliveries, only: [:update]
    mount RailsEventStore::Browser => '/res'
  end

  get "*path", to: "react_app#index", via: :all, constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
