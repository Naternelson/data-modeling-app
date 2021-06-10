class AuthController < ApplicationController 

    def login
        @user = User.find_by_email params[:email]
        if @user && @user.authenticate(params[:password])
            token = encode_token(user_id: @user.id)
            render json: { @user: UserSerializer.new(@user), jwt: token }, status: :loggedin
        elsif @user 
            render json: { error: 'Failed to find user', messages: ["Could not find username with #{params[:email]}"] }, status: :not_acceptable
        else 
            render json: { error: 'Failed to authenticate user', messages: ["Could not find or authenticate username with #{params[:email]}", "Please check username and password"] }, status: :not_acceptable
        end
    end
end
