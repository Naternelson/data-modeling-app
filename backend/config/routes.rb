Rails.application.routes.draw do
  resources :projects
  resources :users, only: [:delete]
  post 'signup', to: "users#create"
  post 'login', to: "auth#login"
end
