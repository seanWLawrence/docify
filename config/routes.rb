Rails.application.routes.draw do
  resources :users
  get "/about" => "static_pages#about"

  root "static_pages#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
