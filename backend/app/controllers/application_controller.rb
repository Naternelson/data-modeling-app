class ApplicationController < ActionController::Base
    before_action :authorized
    before_action :snake_case_params

  def encode_token(payload)
    JWT.encode(payload, ENV['JWT_SECRET'])
  end

  def auth_header 
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header 
      token = auth_header.split(' ')[1]
      begin 
        JWT.decode(token, ENV['JWT_SECRET'], true, algorithm: 'HS256')
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

  def authorized
    render json: {message: 'Please Log In'}, status: :unauthorized unless loggin_in?
  end

  private 

  def snake_case_params
    request.parameters.deep_transform_keys!(&:underscore)
  end

end
