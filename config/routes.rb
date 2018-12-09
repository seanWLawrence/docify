Rails.application.routes.draw do
  resources :documents
  root "static_pages#index"

  resources :users
  resources :sessions, only: [:new, :create, :destroy]

  get "signup", to: "users#new", as: "signup"
  get "login", to: "sessions#new", as: "login"
  get "logout", to: "sessions#destroy", as: "logout"

  get "/about" => "static_pages#about"
end
