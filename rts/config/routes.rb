Rts::Application.routes.draw do




  #get "/managers(.:format)" => "managers#index"
  #get "/api/managers/:hp" => "managers#show"
    #get "/managers(.:format)" => "managers#index"
  #put "/api/managers/:hp" => "managers#update"

  scope '/api' do

  resources :answers

  resources :paper_types, :id => /.*/

  resources :custom_groups

  resources :jobs

  resources :gifts

  resources :authorities

  resources :managers, :id => /.*/

  resources :customs

  resources :custom_answers

  resources :paper_histories

  resources :question_types

  resources :question_items

  resources :directives

  resources :papers

  resources :manager, :id => /.*/

  resources :groupinfos, :id => /.*/

  resources :shares

  #get "/manager/basicInfo" => 'manager#basicInfo'

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
