class User < ApplicationRecord
    has_secure_password
    validate_presence_of :first_name, :email
    validates_uniqueness_of :email
    validates :username, uniqueness: true, allow_nil: true
    validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => [:create, :update]
    
    before_validation(on: [:create, :update]) do 
        email = email.strip if attribute_present?("email")
        username = username.strip if attribute_present?("username")
    end
end
