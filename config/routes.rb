Rails.application.routes.draw do
  root "static_pages#index"

  resources :documents

  resources :users, only: [:create]

  devise_scope :user do
    get "login", to: "users/sessions#new"
    get "logout", to: "users/sessions#destroy"
    get "signup", to: "users/registrations#new"
  end

  get "users/login", redirect_to: "/login"

  devise_for :users, controllers: {
                       sessions: "users/sessions",
                       registrations: "users/registrations",
                     }

  get "/about" => "static_pages#about"
end
