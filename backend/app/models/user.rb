class User < ApplicationRecord
    has_secure_password
    has_many :projects
    validates_presence_of :first_name, :email
    validates_uniqueness_of :email
    validates :username, uniqueness: true, allow_nil: true
    validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :on => [:create, :update]
    
    # before_validation(on: [:create, :update]) do 
    #     attributes.each  {|k,v| self[k] = v.strip unless v == nil}
    # end
end
