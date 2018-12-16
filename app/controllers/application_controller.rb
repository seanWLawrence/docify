class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # create user session
  # helper_method :current_user
end
