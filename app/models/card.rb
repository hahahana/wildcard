class Card
  include Mongoid::Document

  field :tag,         :type => String
  field :message,     :type => String
  field :coordinates, :type => Array

  belongs_to :user

  validates_presence_of :tag, :coordinates
end
