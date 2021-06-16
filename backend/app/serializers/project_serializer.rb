class ProjectSerializer
  include JSONAPI::Serializer
  attributes :model, :name, :status, :id
  set_key_transform :camel_lower
end
