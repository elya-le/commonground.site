Rails.application.routes.draw do
  namespace :api do
    resources :categories do
      resources :beliefs
    end
  end
end
