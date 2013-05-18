class SessionsController < DeviseController
  def create
    if env["omniauth.auth"]
      user = User.from_omniauth(env["omniauth.auth"])
      session[:user_id] = user.id
    else
      self.resource = warden.authenticate!(auth_options)
      sign_in(resource_name, resource)
    end
    redirect_to root_url
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url
  end

  def auth_options
    { :scope => resource_name, :recall => "#{controller_path}#new" }
  end
end
