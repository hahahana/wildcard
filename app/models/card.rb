class Card
  include Mongoid::Document
  include Mongoid::Geospatial

  field :tag,         :type => String
  field :message,     :type => String
  geo_field :location

  belongs_to :user

  validates_presence_of :tag, :location
end
