class UserSerializer
  include JSONAPI::Serializer
  attributes :first_name, :last_name, :username, :email, :id

  set_key_transform :camel_lower
end
