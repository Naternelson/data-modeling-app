Rails.application.routes.draw do
  resources :users, only: [:create, :delete]
  post 'login', to: "auth#login"
end
