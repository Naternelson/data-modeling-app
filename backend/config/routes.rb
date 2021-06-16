Rails.application.routes.draw do
  resources :users, only: [:delete]
  post 'signup', to: "users#signup"
  post 'login', to: "auth#login"
end
