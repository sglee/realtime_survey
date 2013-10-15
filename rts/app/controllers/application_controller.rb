class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  #protect_from_forgery with: :exception
  #after_filter :set_csrf_cookie_for_ng

# CORS(cross-origin-resource sharing)
#As we’re working with our client on our own domain, 
#CORS (cross-origin resource sharing) is not entirely necessary; 
#however, if you are going to host your Rails app on a different server, 
#we’ll need to implement it.
protect_from_forgery with: :null_session
before_filter :set_cors_headers
before_filter :cors_preflight

def set_cors_headers
  headers['Access-Control-Allow-Origin'] = AppConfig.client['origin'] 
  headers['Access-Control-Allow-Methods'] = 'GET,POST,PUT,DELETE,OPTIONS' 
  headers['Access-Control-Allow-Headers'] = '*' 
  headers['Access-Control-Max-Age'] = "3628800"
end

def cors_preflight
  head(:ok) if request.method == :options
end

  #private

  #def set_csrf_cookie_for_ng
  #	cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  #end

  #def verified_request?
  #	super || form_authenticity_token == 
  #		request.headers['HTTP_X_XSRF_TOKEN']
  #end
end
