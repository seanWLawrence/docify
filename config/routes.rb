Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql'
  end

  post '/graphql', to: 'graphql#execute'
  root 'static_pages#index'

  resources :users, only: [:create]

  get 'demo', to: 'documents#demo'
  get 'documents', to: 'documents#index'
  get 'documents/edit/:id', to: 'documents#index'
  get 'documents/test', to: 'documents#index'

  devise_scope :user do
    get 'login', to: 'users/sessions#new'
    get 'logout', to: 'users/sessions#destroy'
    get 'signup', to: 'users/registrations#new'
  end

  get 'users/login', redirect_to: '/login'

  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  get '/about' => 'static_pages#about'
end
