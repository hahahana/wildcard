class CardSerializer < ActiveModel::Serializer
  attributes :id, :tag, :message, :location
end
