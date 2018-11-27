Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :books, only: [:index, :show]
    end
  end

  get 'locales/:locale/translation', to: 'translations#show'

  root to: 'pages#root'
  get '*unmatched_route', to: 'pages#root'
end
