class ApplicationController < ActionController::Base
    before_action :authorized

  def encode_token(payload)
    JWT.encode(payload, JWT_SECRET)
  end

  def auth_header 
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header 
      token = auth_header.split(' ')[1]
      begin 
        JWT.decode(token, JWT_SECRET, true, algorithm: 'HS256')
      rescue JWT::Decoder
        nil
      end
    end 
  end

  def current_user
    user_id = decoded_token[0][:user_id]
    @user = User.find_by id: user_id 
  end

  def loggin_in?
    !!current_user
  end

  def check_user_auth
    render json: {message: 'Please Log In'}, status: :unauthorized unless loggin_in?
  end
end
