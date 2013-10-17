class Groupinfo
  include Mongoid::Document
  field :code, type: String
  field :name, type: String
  field :is_use, type: String

  has_many :paper
end
