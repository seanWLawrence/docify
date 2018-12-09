class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  # create user session
  helper_method :current_user

  # adds authroization to every action
  check_authorization

  def current_user
    if session[:user_id]
      @current_user ||= User.find(session[:user_id])
    else
      @current_user = nil
    end
  end
end
