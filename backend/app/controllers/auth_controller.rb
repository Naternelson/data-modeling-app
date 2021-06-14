class AuthController < ApplicationController 
    skip_before_action :authorized, only: [:login]
    def login
        @user = User.find_by_username params[:username]
        @user = User.find_by_email params[:username] unless @user
        if @user && @user.authenticate(params[:password])
            token = encode_token(user_id: @user.id)
            render json: { user: UserSerializer.new(@user), jwt: token }, status: :ok
        elsif @user 
            render json: { error: 'Failed to authenticate user'}, status: :not_acceptable
        else 
            render json: { error: 'Failed to find user', messages: [ "Please check username and password"] }, status: :not_acceptable
        end
    end
end
