Rails.application.routes.draw do
  
  resources :posts_categories
  resources :posts_comments
  resources :users_comments
  resources :categories
  resources :comments
  resources :posts
  resources :users

  get '/signup', to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
