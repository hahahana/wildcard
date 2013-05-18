class CardSerializer < ActiveModel::Serializer
  attributes :id, :tag, :message, :coordinates
end
