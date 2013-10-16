Rts::Application.routes.draw do

  resources :custom_groups

  resources :jobs

  resources :gifts

  resources :authorities

  resources :managers

  resources :customs

  resources :custom_answers

  resources :paper_histories

  resources :question_types

  resources :question_items

  resources :directives

  resources :papers

  resources :mangers

  scope '/api' do
    resources :shares
    resources :groupinfo

    devise_for :users,
      :controllers => {
        omniauth_callbacks: "users/omniauth_callbacks",
        registrations: "users/registrations",
        sessions: "users/sessions"
      }

    devise_scope :user do
      post '/check/is_user' => 'users/users#is_user', as: 'is_user'
      post '/current_user' => 'users/sessions#get_current_user'
    end
  end
  get '/dashboard' => 'welcome#dashboard'
  root to: 'welcome#index'
end