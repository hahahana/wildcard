class Card
  include Mongoid::Document

  field :tag,         :type => String
  field :message,     :type => String
  field :coordinates, :type => Array

  validates_presence_of :tag
end
