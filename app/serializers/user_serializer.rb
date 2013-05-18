class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :provider, :uid
end
