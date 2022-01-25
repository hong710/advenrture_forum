Rails.application.routes.draw do
  
  resources :posts_categories
  resources :posts_comments
  resources :users_comments
  resources :categories
  resources :comments
  resources :posts
  resources :users

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
