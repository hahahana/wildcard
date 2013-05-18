class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :provider, :uid, :picture
end
