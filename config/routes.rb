Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/events', to: 'events#index'

  get '/events/:id', to: 'events#show'

  post '/events', to: 'events#create'

  delete '/events/:id', to: 'events#delete'

  put '/events/:id', to: 'events#update'

  get '/members', to: 'members#index'

  get '/members/:id', to: 'members#show'

  # get '/users', to: 'users#index'
  #
  # get '/users/:id', to: 'users#show'

end
