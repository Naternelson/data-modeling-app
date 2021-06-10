Rails.application.routes.draw do
  resources :users, only: [:create, :delete]
  get 'login', to: "auth#login"
end
