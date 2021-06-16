class UserSerializer
  include JSONAPI::Serializer
  attributes :first_name, :last_name, :username, :id
  set_key_transform :camel_lower
  
end
